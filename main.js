const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  // Determine the path to the web build
  // In development: build/web is in project root
  // In packaged app: files are in app.asar, accessible via __dirname
  const isDev = !app.isPackaged;
  
  // Try multiple possible paths
  const possibleWebPaths = [
    path.join(__dirname, 'build', 'web', 'index.html'),
    path.join(process.resourcesPath, 'app', 'build', 'web', 'index.html'),
    path.join(__dirname, '..', 'build', 'web', 'index.html')
  ];
  
  const possibleIconPaths = [
    path.join(__dirname, 'build', 'web', 'icons', 'Icon-512.png'),
    path.join(process.resourcesPath, 'app', 'build', 'web', 'icons', 'Icon-512.png'),
    path.join(__dirname, '..', 'build', 'web', 'icons', 'Icon-512.png')
  ];
  
  // Use the first path that exists (in dev, first should work)
  const fs = require('fs');
  let webPath = possibleWebPaths.find(p => {
    try {
      return fs.existsSync(p);
    } catch {
      return false;
    }
  }) || possibleWebPaths[0];
  
  let iconPath = possibleIconPaths.find(p => {
    try {
      return fs.existsSync(p);
    } catch {
      return false;
    }
  }) || possibleIconPaths[0];

  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    title: 'Homeschool Hub',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      webSecurity: true
    },
    icon: iconPath,
    show: false // Don't show until ready
  });

  // Load the Flutter web app
  console.log('Loading Flutter web app from:', webPath);
  mainWindow.loadFile(webPath);

  // Show window when ready to prevent visual flash
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    
    // Open DevTools in development
    if (isDev) {
      mainWindow.webContents.openDevTools();
    }
  });

  // Handle window closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Handle navigation errors
  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    console.error('Failed to load:', errorCode, errorDescription);
  });
}

// This method will be called when Electron has finished initialization
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS, re-create a window when the dock icon is clicked
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Security: Prevent new window creation
app.on('web-contents-created', (event, contents) => {
  contents.on('new-window', (event, navigationUrl) => {
    event.preventDefault();
    // Optionally open in external browser
    require('electron').shell.openExternal(navigationUrl);
  });
});

