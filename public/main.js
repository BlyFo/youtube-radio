const { app, BrowserWindow } = require('electron')

require('@electron/remote/main').initialize()

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 960,
        height: 540,
        minHeight: 360,
        minWidth: 640,
        webPreferences: {
            enableRemoteModule: true
        },
        resizable: true,
        frame: false
    })

    win.loadURL('http://localhost:3000');
    win.setAspectRatio(16 / 9);

    // Emitted when the window is closed.
    win.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})