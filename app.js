require('aframe');
var ipc = require('electron').ipcRenderer;

var el = document.querySelector("#getthis");

// AFRAME.registerComponent('position', {
//   schema: { type: 'vec3' },

//   update: function() {
//     var object3D = this.el.object3D;
//     var data = this.data;
//     object3D.position.set(data.x, data.y, data.z);
//   }
// });