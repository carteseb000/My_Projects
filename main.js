var canvas = document.getElementById("screen");
var context = canvas.getContext("2d");

function main() {
   context.fillStyle = "red";
   context.fillRect(20, 20 , 50, 50);
}

setInterval(main,  1000 / 60);
