#!/usr/bin/env node

/**
 * Request indexing for priority BestTrips guides via Google Indexing API
 * Limit: 200 requests per day
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const CREDENTIALS_PATH = path.join(__dirname, '../credentials.json');
const PRIORITY_GUIDES_PATH = path.join(__dirname, '../priority-guides.json');
const STATE_PATH = path.join(__dirname, '../indexing-state.json');

// Max requests per day (Google limit: 200)
const MAX_DAILY_REQUESTS = 200;

async function loadState() {
  if (!fs.existsSync(STATE_PATH)) {
    return { lastReset: new Date().toISOString().split('T')[0], requestsToday: 0, indexed: [] };
  }
  return JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
}

function saveState(state) {
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
}

async function requestIndexing() {
  try {
    // Load credentials
    if (!fs.existsSync(CREDENTIALS_PATH)) {
      throw new Error('credentials.json not found');
    }
    const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));

    // Load priority guides
    if (!fs.existsSync(PRIORITY_GUIDES_PATH)) {
      console.log('⚠️  priority-guides.json not found. Run identify-priority-guides.js first.');
      process.exit(1);
    }
    const priorityData = JSON.parse(fs.readFileSync(PRIORITY_GUIDES_PATH, 'utf8'));

    // Load state
    const state = await loadState();
    const today = new Date().toISOString().split('T')[0];

    // Reset daily counter if new day
    if (state.lastReset !== today) {
      state.lastReset = today;
      state.requestsToday = 0;
    }

    // Check if we've hit daily limit
    if (state.requestsToday >= MAX_DAILY_REQUESTS) {
      console.log(`⚠️  Daily limit reached (${MAX_DAILY_REQUESTS} requests). Try again tomorrow.`);
      process.exit(0);
    }

    // Authenticate
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const authClient = await auth.getClient();
    const indexing = google.indexing({ version: 'v3', auth: authClient });

    // Get guides that haven't been indexed yet
    const pendingGuides = priorityData.top50.filter(g => !state.indexed.includes(g.url));

    if (pendingGuides.length === 0) {
      console.log('✅ All top 50 guides already requested for indexing!');
      process.exit(0);
    }

    console.log(`Requesting indexing for ${Math.min(pendingGuides.length, MAX_DAILY_REQUESTS - state.requestsToday)} guides...\n`);

    let successCount = 0;
    let errorCount = 0;

    // Request indexing (batch)
    for (const guide of pendingGuides) {
      if (state.requestsToday >= MAX_DAILY_REQUESTS) {
        console.log(`\n⚠️  Hit daily limit (${MAX_DAILY_REQUESTS} requests)`);
        break;
      }

      try {
        await indexing.urlNotifications.publish({
          requestBody: {
            url: guide.url,
            type: 'URL_UPDATED',
          },
        });

        console.log(`✅ ${guide.slug}`);
        state.indexed.push(guide.url);
        state.requestsToday++;
        successCount++;

        // Rate limit: 1 request per second to be safe
        await new Promise(resolve => setTimeout(resolve, 1000));

      } catch (error) {
        console.error(`❌ ${guide.slug}: ${error.message}`);
        errorCount++;
      }
    }

    // Save state
    saveState(state);

    console.log(`\nSummary:`);
    console.log(`- Success: ${successCount}`);
    console.log(`- Errors: ${errorCount}`);
    console.log(`- Requests today: ${state.requestsToday}/${MAX_DAILY_REQUESTS}`);
    console.log(`- Total indexed: ${state.indexed.length}/${priorityData.top50.length}`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
    process.exit(1);
  }
}

requestIndexing();
