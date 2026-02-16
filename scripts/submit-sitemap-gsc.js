#!/usr/bin/env node

/**
 * Submit BestTrips sitemap to Google Search Console
 * Requires: credentials.json (GSC service account)
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://besttrips.org/';
const SITEMAP_URL = 'https://besttrips.org/sitemap.xml';

async function submitSitemap() {
  try {
    // Load service account credentials
    const credentialsPath = path.join(__dirname, '../credentials.json');
    if (!fs.existsSync(credentialsPath)) {
      throw new Error('credentials.json not found. Run setup first.');
    }

    const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));

    // Authenticate
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/webmasters'],
    });

    const authClient = await auth.getClient();
    const searchconsole = google.searchconsole({ version: 'v1', auth: authClient });

    // Submit sitemap
    console.log(`Submitting sitemap: ${SITEMAP_URL}`);
    await searchconsole.sitemaps.submit({
      siteUrl: SITE_URL,
      feedpath: SITEMAP_URL,
    });

    console.log('✅ Sitemap submitted successfully!');
    console.log(`Timestamp: ${new Date().toISOString()}`);
    
    // Verify submission
    const result = await searchconsole.sitemaps.get({
      siteUrl: SITE_URL,
      feedpath: SITEMAP_URL,
    });

    console.log('\nSitemap status:');
    console.log(`- Last downloaded: ${result.data.lastDownloaded || 'Never'}`);
    console.log(`- Last submitted: ${result.data.lastSubmitted || 'Just now'}`);
    console.log(`- Pending: ${result.data.isPending ? 'Yes' : 'No'}`);
    console.log(`- URLs submitted: ${result.data.contents?.[0]?.submitted || 'Unknown'}`);

  } catch (error) {
    console.error('❌ Error submitting sitemap:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
    process.exit(1);
  }
}

submitSitemap();
