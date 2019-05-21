var canvas = document.getElementById("screen");
var context = canvas.getContext("2d");

var enemies = context.fillStyle = "red";
var character = context.fillStyle = "OliveDrab";

var x = 20, y = 20;
var ex = 50, ey = 50;

function init(){
   character
   enemies
}

function move(dx, dy) {
   x += dx;
   y += dy;
}

function update() {
   if(key.a) {move(-5, 0);}
   if(key.d) {move(5 , 0);}
   if(key.w) {move(0, -5);}
   if(key.s) {move(0 , 5);}
}

function draw() {
   context.clearRect(0, 0, canvas.width, canvas.height);
   context.fillRect(x, y, 20, 20);
   context.fillRect(ex, ey, 20, 20);
}

function main() {
   update();
   draw();
}

window.onload = function() {
   init();
   setInterval(main,  1000 / 60);
}
