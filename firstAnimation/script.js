let incrementor = 0; //starting point from where it will be incrementing
let decrementor = 200; //size shrinking point from where it will be decreasing further.
let speed = 30;
let radius = 65;

const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
setInterval(animate, 70);

function animate() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  //blue rectangle
  ctx.fillStyle = "#89A6FB";
  ctx.fillRect(incrementor++, incrementor++, 140, 140);

  //Yellow green Circle
  ctx.beginPath();
  ctx.arc(incrementor, 600, radius, 0, Math.PI * 2, true);
  ctx.fillStyle = "#98CE00";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  //green rectangle
  ctx.fillStyle = "#A833B9";
  ctx.fillRect(1100, incrementor++, 150, 95);

  //Yellow sun or circle
  ctx.beginPath();
  ctx.arc(950, decrementor--, decrementor--, 0, Math.PI * 2, true);
  ctx.fillStyle = "#ffba08";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

window.addEventListener("mousemove", function (e) {
  animate();
});
