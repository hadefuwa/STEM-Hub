// Script to clear cached data
// Run with: node clear-cache.js

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the data file path (same as in persistence.js)
function getDataPath() {
  // For Windows, use USERPROFILE, for others use HOME
  const userHome = process.env.USERPROFILE || process.env.HOME || os.homedir();
  const desktopPath = path.join(userHome, 'Desktop');
  const appDir = path.join(desktopPath, 'HomeschoolHub');
  return path.join(appDir, 'data.json');
}

async function clearCache() {
  try {
    const dataPath = getDataPath();
    console.log('Looking for data file at:', dataPath);
    
    try {
      await fs.access(dataPath);
      await fs.unlink(dataPath);
      console.log('✅ Successfully deleted cached data file!');
      console.log('   File deleted:', dataPath);
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log('ℹ️  No cached data file found (this is okay)');
      } else {
        throw error;
      }
    }
    
    console.log('\n📝 To clear browser localStorage:');
    console.log('   1. Open the app in browser');
    console.log('   2. Open Developer Tools (F12)');
    console.log('   3. Go to Console tab');
    console.log('   4. Run: localStorage.removeItem("homeschool-hub-data")');
    console.log('   5. Refresh the page');
    
  } catch (error) {
    console.error('❌ Error clearing cache:', error);
  }
}

clearCache();

