'use strict';
const electron = require('electron');
const app = electron.app;
const ipc = require('electron').ipcMain;
const Docker = require('dockerode');

var docker = new Docker({socketPath: '/var/run/docker.sock'});

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

ipc.on('addContainer', function(e, data) {
  docker.createContainer(
    {Image: 'ubuntu', Cmd: ['/bin/bash'], name: 'ubuntu-test'},
    function(err, container) {
      if (err) {
        console.log(err);
      }
    }
  )
});





// prevent window being garbage collected
let mainWindow;

function onClosed() {
  // dereference the window
  // for multiple windows store them in an array
  mainWindow = null;
}

function createMainWindow() {
  const win = new electron.BrowserWindow({
    width: 600,
    height: 400
  });

  win.loadURL(`file://${__dirname}/index.html`);
  win.on('closed', onClosed);

  return win;
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (!mainWindow) {
    mainWindow = createMainWindow();
  }
});

app.on('ready', () => {
  mainWindow = createMainWindow();
});