const { BrowserWindow } = require('electron')

function create () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    })
  
    win.loadURL('http://localhost:8080')
    win.webContents.openDevTools()
  }

module.exports = { create }