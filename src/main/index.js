const electron = require('electron')
const pathJoin = require('path').join
const urlFormat = require('url').format

const app = electron.app // Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow = null

function createWindow () {
  // Create the browser window
  mainWindow = new BrowserWindow({
    title: 'Stream Project Manage',
    icon: pathJoin(__dirname, 'ressources', 'icon.ico'),
    backgroundColor: '#f0f0f0'
  })
  mainWindow.setMenuBarVisibility(false)

  mainWindow.loadURL(
    urlFormat({
      pathname: pathJoin(__dirname, '..', 'renderer', 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  )

  if (process.env.NODE_ENV !== 'production') {
    mainWindow.webContents.openDevTools()
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  mainWindow.webContents.on('crashed', function () {
    console.error('WebContent crash !')
  })
  mainWindow.on('unresponsive', function () {
    console.error('Window unresponsive !')
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
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
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
process.on('uncaughtException', function () {
  console.error.apply(null, arguments)
})
