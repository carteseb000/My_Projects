var canvas = document.getElementById("screen");
var context = canvas.getContext("2d");

var x = 20, y = 20;

function move(dx, dy) {
   x += dx;
   y += dy;
}

function main() {
   context.fillStyle = "red";
   context.fillRect(x, y, 50, 50);
   move(3,0);
}

setInterval(main,  1000 / 60);
