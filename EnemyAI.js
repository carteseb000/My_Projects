var canvas = document.getElementById("screen");
var enemy = document.getElementById("enemy");
var context = canvas.getContext("2d");

var x = 20, y = 20;

function init() {
  context.fillstyle = "red";
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  conext.fillRect(x, y, 20, 20);
}

function main() {
  draw();
  update();
}

function AI() {
  
}

function update() {
  
}

window.onload = function() {
   init();
   setInterval(main,  1000 / 60);
}
