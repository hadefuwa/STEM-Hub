# How to Clear Cache and Remove Old Lessons

The app stores cached data in two places. Follow these steps to completely clear it:

## Method 1: Delete the Data File (Electron App)

The data file is stored at:
- **Windows**: `C:\Users\YOUR_USERNAME\Desktop\HomeschoolHub\data.json`
- **Mac/Linux**: `~/Desktop/HomeschoolHub/data.json`

### Option A: Run the Script
```bash
node clear-cache.js
```

### Option B: Manual Delete
1. Navigate to your Desktop
2. Open the `HomeschoolHub` folder
3. Delete the `data.json` file
4. Restart the app

## Method 2: Clear Browser localStorage (If using browser version)

1. Open the app in your browser
2. Press **F12** to open Developer Tools
3. Go to the **Console** tab
4. Type and press Enter:
   ```javascript
   localStorage.removeItem('homeschool-hub-data')
   ```
5. Refresh the page (F5)

## Method 3: Force Reset (Recommended)

After clearing the cache, the app will automatically:
- Load fresh default data (without the removed lessons)
- Remove any old lessons from cache on next startup

**Note:** The merge function has been updated to automatically remove lessons that no longer exist in the default data, so this should only be needed once.

