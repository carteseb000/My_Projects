var canvas = document.getElementById("screen");
var context = canvas.getContext("2d");

var ex = 100, ey = 20;

function init(){
   var Player = function(x,y,size,speed) {
  this.x = x;
  this.y = y;
  this.size = size; 
  this.speed = speed;
   this.update = function() {
      ellipse(this.x,this.y,this.size,this.size);
   };
};

var player = new Player(100,100,9,3);

draw = function() {
   player.update();
};
  
}

function move(dx, dy) {
   x += dx;
   y += dy;
}
function enemyAI() {
   
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
