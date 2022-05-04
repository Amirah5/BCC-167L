let incrementor = 0; //starting point from where it will be incrementing
let x = 200;
let y = 200;
let speed = 20;
let radius = 20;
let innerRadius = 0.2;
let n = 0; //n is number of sides in Math.PI/n

const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
setInterval(animate, 50);

function animate(x, y, radius, innerRadius, n) {
  //star shape
  ctx.beginPath();

  ctx.save(); //it creates a snapshot of current canvas global settings such as rotate, translate etc.

  ctx.translate(x, y);
  // ctx.translate(canvas.width / 2, canvas.height / 2); //it will translate or rotate canvas around this point. I will move the coordinates fromm 0 0 to the desired location.

  ctx.moveTo(0, 0 - radius);
  // ctx.moveTo(canvas.width / 2, canvas.height / 2); //to draw the line from middle of the canvas

  // ctx.lineTo(0, 0 - radius); //to draw straight line

  for (let i = 0; i < n; i++) {
    ctx.rotate(Math.PI / n);
    ctx.lineTo(0, 0 - radius * innerRadius);
    ctx.rotate(Math.PI / n);
    ctx.lineTo(0, 0 - radius);
  }

  // ctx.rotate(Math.PI / n); //rotate method expect value in radians, half circle = 180 degrees = Math.PI(3.14 radians), full circle = 360 degrees = Math.PI*2(6.28 radians), 1/3 of 1/2 circle = Math.PI/3

  ctx.restore(); //it will reset all canvas global settings to the point when they were at the save()method, it will prevent translate and rotate from stacking up.

  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = "#f72585";
  ctx.fill();
}

// animate(100, 0.5, 6);

window.addEventListener("mousemove", function (e) {
  animate(e.x, e.y, 150, 0.5, 7);
});
