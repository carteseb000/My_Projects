var canvas = document.getElementById("screen");
var context = canvas.getContext("2d");


context.fillStytle="red";
context.fillRect(20, 20, 50, 50);

if(event.keyCode == 37) {
   alert('Left was pressed');
   }else if(event.keyCode == 39)
   {
   alert('Right was pressed');
   }

