var key = {
  a: false,
  d: false,
  s: false,
  w: false
};

window.addEventListener('keydown', function(event) {
  switch(event.which || event.keyCode) {
    case 65: key.a = true; break;
    case 68: key.d = true; break;
    case 83: key.s = true; break;
    case 87: key.w = true; break;
  }
});

window.addEventListener('keyup', function(event) {
  switch(event.which || event.keyCode) {
    case 65: key.a = false; break;
    case 68: key.d = false; break;
    case 83: key.s = false; break;
    case 87: key.w = false; break;
  }
});
