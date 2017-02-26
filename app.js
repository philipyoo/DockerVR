var ipc = require('electron').ipcRenderer;
const AFRAME = window.AFRAME;


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
shuffle(containers);

cr.addEventListener('click', function(evt) {
  console.log("creating container..");
  ipc.once('addContainerReceive', function(event, res) {
    console.log("Got response back");
    console.log(res);

    if (res.code != 0) {
      show_container = containers.shift();
      show_container.setAttribute("height", 1);
      cr.setAttribute('material', 'color', 'green');
    } else {
      cr.setAttribute('material', 'color', 'red');
    }

    document.getElementById('cname').value = "";
  });

  var name = document.getElementById('cname');

  ipc.send('addContainerSend', name.value);
});

t1.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
  console.log(this);
});

t2.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
  console.log(this);
});

t3.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
  console.log(this);
});

t4.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
  console.log(this);
});

t5.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
  console.log(this);
});

t6.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
  console.log(this);
});

t7.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
  console.log(this);
});

t8.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
  console.log(this);
});

t9.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
  console.log(this);
});

t10.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
  console.log(this);
});

t11.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
  console.log(this);
});

t12.addEventListener('click', function(evt) {
  console.log("inside");
  console.log(evt);
  console.log(this);
});

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}