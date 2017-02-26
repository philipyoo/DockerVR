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

var cr = document.querySelector('#create-sky');

var t1 = document.querySelector('#box1');
var t2 = document.querySelector('#box2');
var t3 = document.querySelector('#box3');
var t4 = document.querySelector('#box4');
var t5 = document.querySelector('#box5');
var t6 = document.querySelector('#box6');
var t7 = document.querySelector('#box7');
var t8 = document.querySelector('#box8');
var t9 = document.querySelector('#box9');
var t10 = document.querySelector('#box10');
var t11 = document.querySelector('#box11');
var t12 = document.querySelector('#box12');

var containers = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12];

cr.addEventListener('click', function(evt) {
  console.log("creating container..");
  ipc.once('addContainerReceive', function(event, res) {
    console.log("Got response back");
    console.log(res);
    document.getElementById('cname').value = "";
  });

  var name = document.getElementById('cname');

  ipc.send('addContainerSend', name.value);
});

t1.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
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

t7.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
});

t8.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
});

t9.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
});

t10.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
});

t11.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
});

t12.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
});