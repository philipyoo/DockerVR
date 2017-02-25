var ipc = require('electron').ipcRenderer;
const AFRAME = window.AFRAME;


// var tester = document.querySelector('#testme');


// tester.addEventListener('click', function() {
//   ipc.once('addContainerReceive', function(event, res) {
//     console.log("Got response back");
//     console.log(res);
//     // Dynamically create object here
//   })

//   this.setAttribute('material', 'color', 'red');

//   var name = document.getElementById('cname');

//   ipc.send('addContainerSend', name.value);
// });


var t1 = document.querySelector('#box1');
var t2 = document.querySelector('#box2');
var t3 = document.querySelector('#box3');
var t4 = document.querySelector('#box4');
var t5 = document.querySelector('#box5');
var t6 = document.querySelector('#box6');

var containers = [t1, t2, t3, t4, t5, t6]

t1.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
  console.log(this);
});

t2.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
});

t3.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
});

t4.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
});

t5.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
});

t6.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
});


