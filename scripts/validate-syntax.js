#!/usr/bin/env node

/**
 * Pre-commit syntax validation
 * Catches JavaScript syntax errors before pushing to GitHub
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Validating JavaScript syntax...\n');

let hasErrors = false;

// Find all .js files in app/ and components/
const appDir = path.join(process.cwd(), 'app');
const componentsDir = path.join(process.cwd(), 'components');

function validateDirectory(dir, label) {
  if (!fs.existsSync(dir)) {
    console.log(`⚠️  ${label} directory not found, skipping...`);
    return;
  }

  console.log(`Checking ${label}...`);
  
  const files = [];
  
  function walk(directory) {
    const items = fs.readdirSync(directory);
    for (const item of items) {
      const fullPath = path.join(directory, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walk(fullPath);
      } else if (item.endsWith('.js') || item.endsWith('.jsx')) {
        files.push(fullPath);
      }
    }
  }
  
  walk(dir);
  
  let fileErrors = 0;
  for (const file of files) {
    try {
      execSync(`node -c "${file}"`, { stdio: 'pipe' });
      console.log(`  ✓ ${path.relative(process.cwd(), file)}`);
    } catch (error) {
      console.error(`  ✗ ${path.relative(process.cwd(), file)}`);
      console.error(`    ${error.message}`);
      fileErrors++;
      hasErrors = true;
    }
  }
  
  if (fileErrors === 0 && files.length > 0) {
    console.log(`  All ${files.length} files valid!\n`);
  } else if (files.length === 0) {
    console.log(`  No files to check\n`);
  } else {
    console.log(`  ${fileErrors} file(s) with errors\n`);
  }
}

validateDirectory(appDir, 'app/');
validateDirectory(componentsDir, 'components/');

if (hasErrors) {
  console.error('❌ Syntax validation failed. Fix errors before committing.');
  process.exit(1);
} else {
  console.log('✅ All files passed syntax validation!');
  process.exit(0);
}
