var ctx = document.getElementById('screen').getContext('2d');

var player = {
  x: null,
  y: null,
  width: 20,
  height: 20,
  spdX: 3,
  spdY: 3,
  hp: 100,
  lives: 3,
  image: "My_RPG/resources/images/sprites/player.png",
  move: function(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
};

var pointer = {
  x: null,
  y: null,
  image: "My_RPG/resources/images/GUI/pointer.png",
};

var bar1 = new sprite(bar, false);
var player1 = new sprite(player.image, false);
var pointer1 = new sprite(pointer.image, false);
var bullet = new sprite(bullet1.image, false);

function update() {
  updateMap();

  ctx.fillText(player.hp + "HP / 50HP", bar1.x, bar1.y); //players stuff
  ctx.fillText(player.armor + " Armor / 5 Armor", player.x, player.y + 7);
  ctx.fillText(player.lives + " Lives / 3 Lives", 10, 20);
  ctx.fillText(player.score + " score", 10, 10);
}

function main() {
  movement();
  update();
  draw();
}

function draw() {
  setInterval(function () {
    clearMap();
    brick.draw(0, 0, 64, 64);
    sand1.draw(50, 0, 64, 64);
    shadow1.draw(100, 0, 64, 64);
    bar1.draw(0, 100, 64, 64);
    player1.draw(player.x, player.y, 128, 128);
    pointer1.draw(pointer.x, pointer.y, 100, 100);
    bullet.draw(bullet1.x, bullet1.y, 64, 64);
    house1.draw(houseOne.x, houseOne.y, 64, 64);
  }, 1000 / 60);
}

function updateEntity(something) {
  updateEntityPosition(something);
}

updateEntityPosition = function (something) {
  if (something.x < width) {
    something.spdX = -something.spdX;
  }
  if (something.x > 0) {
    something.spdX = -something.spdX;
  }
  if (something.y < height) {
    something.spdY = -something.spdY;
  }
  if (something.y > 0) {
    something.spdY = -something.spdY;
  }
};

drawEntity = function (something) {
  ctx.save();
  ctx.fillStyle = something.color;
  ctx.fillRect(something.x, something.y, something.width, something.height);
  ctx.restore();
};

//keys and player controls
document.onmousemove = function (mouse) {
  var mouseX = mouse.clientX;
  var mouseY = mouse.clientY;

  pointer.x = mouseX;
  pointer.y = mouseY;

};

function movement(everything) {
  if (key.esc) { everything.spdX = null; everything.spdY = null; }
  if (key.w) { player.move(0, -player.spdY); }
  if (key.s) { player.move(0, player.spdY); }
  if (key.a) { player.move(-player.spdX, 0); }
  if (key.d) { player.move(player.spdX, 0); }
  if (key.f) { bullet1.move(pointer.x, pointer.y);} else{ bullet1.move(player.x, player.y); }
}

//system
window.onload = function () {
  setInterval(main, 10000 / 150);
};

