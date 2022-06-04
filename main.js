console.log('sup');
const { app, BrowserWindow } = require('electron');
//npm install --save-dev electron
// const {app, BrowserWindow} = require('electron');
const electron = require('electron');

app.on('ready',function(){

    var win = new BrowserWindow({width: 1280, height: 720});

    win.loadFile('index.html');
});
