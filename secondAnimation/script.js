let canvas;
let ctx;
let incrementorX = 0;
let incrementorY = 0;
//x and y starting point from where it will be incrementing

let x = 200;
let y = 200;
let radius = 35;
let speedX = 3;
let speedY = 3;

window.onload = function () {
  canvas = document.getElementById("animationCanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  setInterval(animate, 50);
};

function animate() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  incrementorX = incrementorX + speedX;
  incrementorY = incrementorY + speedY;

  //background and its color
  ctx.fillStyle = "cyan";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  x += speedX;
  y += speedY;
  //Circle
  ctx.beginPath();
  ctx.arc(300, y, radius, 0, Math.PI * 2, false);
  ctx.fillStyle = "orange";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fillStyle = "#f1c0e8";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  //blue square
  ctx.fillStyle = "#4361ee";
  ctx.fillRect(incrementorX, incrementorY, 85, 85);

  //triangle
  ctx.beginPath();
  ctx.save();
  ctx.translate(x, y);
  ctx.moveTo(50, 80);
  ctx.lineTo(170, 170 - radius);
  ctx.rotate(Math.PI / 3);
  ctx.lineTo(170, 170 - radius);
  ctx.restore();
  ctx.closePath();
  ctx.fillStyle = "#8AFFC1";
  ctx.fill();
  ctx.stroke();

  if (x > canvas.width - radius || x < radius) {
    speedX = speedX * -1;
  }
  if (y > canvas.height - radius || y < radius) {
    speedY = speedY * -1;
  }
  x += speedX;
  y += speedY;
}
