var ipc = require('electron').ipcRenderer;
const AFRAME = window.AFRAME;

var tester = document.querySelector('#testme');


tester.addEventListener('click', function() {
  ipc.once('addContainerReceive', function(event, res) {
    console.log("Got response back");
    console.log(res);
    // Dynamically create object here
  })

  this.setAttribute('material', 'color', 'red');

  var name = document.getElementById('cname');

  ipc.send('addContainerSend', name.value);
});

