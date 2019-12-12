var sprite = function (filename, is_patern) {
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

var bullet1 = {
  x: null,
  y: null,
  image: "My_RPG/resources/images/sprites/bullet.png",
  move: function(spdX, spdY) {
    this.x = spdX;
    this.y = spdY;
  }
};

var bar = "My_RPG/resources/images/GUI/Health_Bar.png";
