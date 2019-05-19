var canvas = document.getElementById("screen");
var context = canvas.getContext("2d");

var x = 20, y = 20;

function init(){
   context.fillStyle = "yellow";
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
}

function main() {
   update();
   draw();
}

window.onload = function() {
   init();
   setInterval(main,  1000 / 60);
}


