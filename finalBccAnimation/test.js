let canvas;
let ctx;
let xx = 100; //position of x coordinate
let yy = 100; //position of y coordinate
let v = 3; //vertical speed of ball
let y = 3; //horizontal speed
let x = 3; // position of the car
const tireRadius = 10; //radius of car tire
let sunRadius = 30; //radius of sun
const ballRadius = 20; //radius of ball
let leftX = 580; //for moving the clouds leftside
let rightX = 780; //for moving the clouds rightside

window.onload = function () {
  canvas = document.getElementById("animationCanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  setInterval(animate, 50);
};

function animate() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); //to clear the canvas everytime we request the frame

  //Yellow Circle
  ctx.beginPath();
  ctx.arc(650, 130, sunRadius, 0, Math.PI * 2, true);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  //clouds
  // ellipse for leftside small cloud
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.ellipse(leftX, 150, 55, 70, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();

  // Draw the ellipse for the leftbigcloud
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.ellipse(leftX - 72, 150, 30, 45, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();

  // ellipse for leftside small cloud
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.ellipse(leftX + 72, 150, 30, 45, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();

  // ellipse for rightside small cloud
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.ellipse(rightX, 120, 55, 70, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();

  // Draw the ellipse for the rightbigcloud
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.ellipse(rightX - 72, 120, 30, 45, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();

  // ellipse for rightside small cloud
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.ellipse(rightX + 72, 120, 30, 45, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();

  //pink bouncy ball Circle
  ctx.beginPath();
  ctx.arc(100, y, 20, 0, Math.PI * 2, false);
  ctx.fillStyle = "pink";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  // draw the car body
  ctx.fillStyle = "#89A6FB";
  ctx.fillRect(x + 15, 468, 70, 40); //car upper body rect
  ctx.fillRect(x, 490, 100, 20); //car lower body rect

  // draw the wheels

  ctx.beginPath(); //left wheel
  ctx.arc(x + 25, 510, tireRadius, 0, Math.PI * 2, true);
  ctx.fillStyle = "#98CE00";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath(); //right wheel
  ctx.arc(x + 75, 510, tireRadius, 0, Math.PI * 2, true);
  ctx.fillStyle = "#98CE00";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.fillStyle = "#C1BFB5";
  ctx.fillRect(2, 520, 1490, 70); //road

  x = x + 5; //for moving the car on road
  y = y + 5; //for moving the pink ball

  sunRadius = (sunRadius * 99) / 100; //for increasing sun size
  sunRadius += 1;
  leftX -= 1; //for moving leftclouds leftwards
  rightX += 1; //for moving rightclouds rightwards

  if (xx > canvas.width - ballRadius || xx < ballRadius) {
    v = v * -1;
  }
  if (yy > canvas.height - ballRadius || yy < ballRadius) {
    y = y * -1;
  }
  xx += v;
  // yy += y;
}

//animate();

// //clouds
  // ellipse for leftside big cloud
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.ellipse(leftX, 150, 55, 70, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill(); ////formula for ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise), radiusX--> The ellipse's major-axis radius(Must be non-negative)radiusY-->The ellipse's minor-axis radius(Must be non-negative),rotation of the ellipse, expressed in radians.

  // Draw the ellipse for the leftmost smallcloud
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.ellipse(leftX - 72, 150, 30, 45, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();

  // ellipse for leftside rigtsmall cloud
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.ellipse(leftX + 72, 150, 30, 45, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();

  // ellipse for rightside big cloud
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.ellipse(rightX, 120, 55, 70, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();

  // Draw the ellipse for the righsise small-leftcloud
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.ellipse(rightX - 72, 120, 30, 45, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();

  // ellipse for rightside small cloud
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.ellipse(rightX + 72, 120, 30, 45, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();
