var ctx = document.getElementById('screen').getContext('2d');

var width = 1250, height = 750;

var _blocks = function (filename, is_patern) {
  this.image = null;
  this.pattern = null;
  this.TO_RADIANS = Math.PI / 180;

  if (filename != undefined && filename != "" && filename != null) {
    this.image = new Image();
    this.image.src = filename;

    if (is_patern) {
      this.pattern = ctx.createPattern(this.image, 'repeat');
    }
  }
  else console.log("unable to load sprite.");

  this.draw = function (x, y, w, h) {
    //Pattern
    if (this.pattern != null) {
      ctx.fillStyle = this.pattern;
      ctx.fillRect(x, y, w, h);
    } else {
      //Image
      if (w != undefined || h != undefined) {
        ctx.drawImage(this.image, x, y, this.image.width, this.image.height);
      }
      else {
        //Stretched
        ctx.drawImage(this.image, x, y, w, h);
      }
    }

  };
  this.rotate = function (x, y, angle) {
    ctx.save();

    ctx.translate(x, y);
    ctx.rotate(angle * this.TO_RADIANS);

    ctx.drawImage(this.image, this.image.width / 2, this.image.height / 2);
    ctx.restore();
  };
};

var bricks = "My_RPG/resources/images/blocks/Brick.png";
var sand = "My_RPG/resources/images/blocks/Sand.png";
var shadows = "My_RPG/resources/images/blocks/shadows.png";

var houseOne = { 
  x: 100,
  y: 50,
  width: 16,
  height: 16,
  image: "My_RPG/resources/images/blocks/house.png",
};

var house1 = new _blocks(houseOne.image, false);
var brick = new _blocks(bricks, false);
var sand1 = new _blocks(sand, false);
var shadow1 = new _blocks(shadows, false);

function getDistanceBetweenEntity(Entity1, Entity2) {
  var vx = Entity1.x - Entity2.x;
  var vy = Entity1.y - Entity2.y;
  return Math.sqrt(vx * vx + vy * vy);
}

function testCollisionEntity(Entity1, Entity2) {
  var distance = getDistanceBetweenEntity(Entity1, Entity2);
  return distance < 16;
}

function updateMap() {
  if (key.e) {
    ctx.save();
    ctx.fillRect(player.x, player.y, width, height);
    ctx.fillStyle = "black";
    ctx.restore();    
  }
}

function clearMap() {
  ctx.save();
  ctx.clearRect(0, 0, width, height);
  ctx.restore();
}