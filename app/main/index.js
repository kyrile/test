const { app, BrowserWindow } = require('electron')
const { create:createWindow } = require('./windows/mian')
const handleIpc = require('./ipc')

app.on('ready', () => {
  createWindow()
  handleIpc()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  
  }
})