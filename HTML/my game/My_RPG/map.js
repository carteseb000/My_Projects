var ctx = document.getElementById('screen').getContext('2d');

var width = 1250, height = 750;

var houseOne = { 
  x: 100,
  y: 50,
  image: "My_RPG/resources/images/blocks/house.png",
};

var house1 = new sprite(houseOne.image, false);

function getDistanceBetweenEntity(Entity1, Entity2) {
  var vx = Entity1.x - Entity2.x;
  var vy = Entity1.y - Entity2.y;
  return Math.sqrt(vx * vx + vy * vy);
}

function testCollisionEntity(Entity1, Entity2) {
  var distance = getDistanceBetweenEntity(Entity1, Entity2);
  return distance < 20;
}

function updateMap() {
  var isColliding = testCollisionEntity(houseOne, player);
  if (isColliding) {
    ctx.save();
    ctx.clearRect(0, 0, width, height);
  }
}