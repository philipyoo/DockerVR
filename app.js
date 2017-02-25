var ipc = require('electron').ipcRenderer;
const AFRAME = window.AFRAME;

var tester = document.querySelector('#testme');

tester.addEventListener('click', function() {
  // ipc.once('addContainerReceive', function(res) {
  //   console.log("Got response back");
  //   console.log(res);
  // })

  this.setAttribute('material', 'color', 'red');
  console.log("I was clicked");

  // var name = "IRMADE";

  // ipc.send('addContainerSend', name);
});

