let canvas;
let ctx; //built in HTML object context
// let gradient = ctx.createLinearGradient(0, 0, 150, 100);
let x = 100; //position of x coordinate
let y = 100; //position of y coordinate
let verticalSpeed = 6; //vertical speed of ball
let horizontalSpeed = 6; //horizontal speed of ball
let carPosition = 3; // position of the car
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

  var img = document.getElementById("brickHouse");
  ctx.drawImage(img, 20, 300);

  var img = document.getElementById("puppy");
  ctx.drawImage(img, 350, 400);

  var img = document.getElementById("tree");
  ctx.drawImage(img, 950, 100);

  var img = document.getElementById("bear");
  ctx.drawImage(img, 980, 310);

  //Yellow Sun Circle
  ctx.beginPath();
  ctx.arc(650, 130, sunRadius, 0, Math.PI * 2, true);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  sunRadius = (sunRadius * 99) / 100; //for increasing sun size
  sunRadius += 1;

  ////formula for ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise), radiusX--> The ellipse's major-axis radius(Must be non-negative)radiusY-->The ellipse's minor-axis radius(Must be non-negative),rotation of the ellipse, expressed in radians.

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

  //variables for cloud movements
  leftX -= 1; //for moving leftclouds leftwards
  rightX += 1; //for moving rightclouds rightwards

  ctx.fillStyle = "#C1BFB5";
  ctx.fillRect(2, 620, 1650, 390); //road

  // draw the car body
  ctx.fillStyle = "#89A6FB";
  ctx.fillRect(carPosition + 15, 570, 70, 40); //car upper body rect
  ctx.fillRect(carPosition, 595, 100, 20); //car lower body rect

  // draw the wheels
  ctx.beginPath(); //left wheel
  ctx.arc(carPosition + 25, 620, tireRadius, 0, Math.PI * 2, true); //carPosition plus 25 is relative to the center of car, 25 pixels to the right of car body
  ctx.fillStyle = "#98CE00";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath(); //right wheel
  ctx.arc(carPosition + 75, 620, tireRadius, 0, Math.PI * 2, true); //carPosition plus 25 is relative to the center of car, 75 pixels to the right of car body
  ctx.fillStyle = "#98CE00";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  carPosition = carPosition + 5; //for moving the car on road

  //Turquoise bouncy ball Circle(formula for arc: ctx.arc(x-coordinate, y-coordinate, radius, start angle,end angle in radian--> 2 * Math.PI);)
  ctx.beginPath();
  ctx.arc(1200, y, 20, 0, Math.PI * 2, false);
  ctx.fillStyle = "turquoise";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  //orange ball Circle
  ctx.beginPath();
  ctx.arc(x, 370, 25, 0, Math.PI * 2, false);
  ctx.fillStyle = "orange";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  //conditional statement for bouncing the ball
  if (x > canvas.width - ballRadius || x < ballRadius) {
    horizontalSpeed = horizontalSpeed * -1;
  }
  if (y > canvas.height - ballRadius || y < ballRadius) {
    verticalSpeed = verticalSpeed * -1;
  }
  x += horizontalSpeed;
  y += verticalSpeed;
  // y = y + 5; //for bringing the pink ball half way down and bounce

  ctx.font = "30px Arial";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.fillText("Happy Coding BCC", x, y);
}
