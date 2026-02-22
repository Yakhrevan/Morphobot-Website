const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 800,
        icon: path.join(__dirname, 'icon.png'), // Optional
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    // Load the local HTML file
    win.loadFile('M4 Website.html');

    // Optional: Remove menu bar
    win.setMenuBarVisibility(false);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
