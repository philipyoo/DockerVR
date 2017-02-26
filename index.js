'use strict';
const electron = require('electron');
const app = electron.app;
const ipc = require('electron').ipcMain;
const Docker = require('dockerode');

var docker = new Docker({socketPath: '/var/run/docker.sock'});

ipc.on('addContainerSend', function(event, data) {
  var status = {code: 0, stat: "na"};

  docker.createContainer({
    Image: 'hello-world', Tty: true, Cmd: ['/bin/bash'], name: data
  }, function(err, container) {
    if (err) {
      console.log(err);
      status.code = 0;
      status.stat = "Error";
    } else {
      console.log("no error")
      status.code = 2;
      status.stat = "Works"
    }
  });

  event.sender.send('addContainerReceive', status);
});



// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

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