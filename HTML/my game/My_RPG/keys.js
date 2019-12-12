var key = {
  a: false,
  d: false,
  s: false,
  w: false,
  e: false,
  i: false,
  r: false,
  b: false,
  f: false,
  bar: false,
  up: false,
  down: false,
  left: false,
  right: false,
  enter: false,
  esc: false
};

window.addEventListener('keydown', function (event) {
  switch (event.which || event.keyCode) {
    case 65: key.a = true; break;
    case 68: key.d = true; break;
    case 83: key.s = true; break;
    case 87: key.w = true; break;
    case 82: key.r = true; break;
    case 73: key.i = true; break;
    case 69: key.e = true; break;
    case 66: key.b = true; break;
    case 32: key.bar = true; break;
    case 70: key.f = true; break;
    case 38: key.up = true; break;
    case 40: key.down = true; break;
    case 37: key.left = true; break;
    case 39: key.right = true; break;
    case 27: key.esc = true; break;
    case 13: key.enter = true; break;
  }
});

window.addEventListener('keyup', function (event) {
  switch (event.which || event.keyCode) {
    case 65: key.a = false; break;
    case 68: key.d = false; break;
    case 83: key.s = false; break;
    case 87: key.w = false; break;
    case 82: key.r = false; break;
    case 73: key.i = false; break;
    case 69: key.e = false; break;
    case 66: key.b = false; break;
    case 32: key.bar = false; break;
    case 70: key.f = false; break;
    case 38: key.up = false; break;
    case 40: key.down = false; break;
    case 37: key.left = false; break;
    case 39: key.right = false; break;
    case 27: key.esc = false; break;
    case 13: key.enter = false; break;
  }
});
