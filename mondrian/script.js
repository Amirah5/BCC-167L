// /* create a specific function to address dpi */
// function fix_dpi() {
//   //create a style object that returns width and height
//   let style = {
//     height() {
//       return +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
//     },
//     width() {
//       return +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
//     },
//   };

//   canvas.setAttribute("width", style.width() * dpi);
//   canvas.setAttribute("height", style.height() * dpi);
// }

function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // fix_dpi();

    ctx.fillStyle = "grey"; // house sidetop roof
    ctx.rect(250, 185, 265, 75);
    ctx.fill();

    ctx.fillStyle = "blue"; //rectangle house front
    ctx.rect(50, 260, 240, 240);
    ctx.fill();

    ctx.fillStyle = "grey"; //front door
    ctx.fillRect(115, 310, 75, 185);

    ctx.fillStyle = "grey"; //cloud
    ctx.beginPath();
    ctx.arc(480, 50, 30, 0, Math.PI * 2, true); //circle
    ctx.fill();

    ctx.fillStyle = "grey"; //cloud
    ctx.beginPath();
    ctx.arc(520, 50, 30, 0, Math.PI * 2, true); //circle
    ctx.fill();

    ctx.fillStyle = "grey"; //cloud
    ctx.beginPath();
    ctx.arc(540, 30, 30, 0, Math.PI * 2, true); //circle
    ctx.fill();

    ctx.fillStyle = "grey"; //cloud
    ctx.beginPath();
    ctx.arc(680, 60, 30, 0, Math.PI * 2, true); //circle
    ctx.fill();

    ctx.fillStyle = "grey"; //cloud
    ctx.beginPath();
    ctx.arc(730, 60, 30, 0, Math.PI * 2, true); //circle
    ctx.fill();

    ctx.fillStyle = "grey"; //cloud
    ctx.beginPath();
    ctx.arc(705, 30, 30, 0, Math.PI * 2, true); //circle
    ctx.fill();

    ctx.fillStyle = "yellow"; //door knob
    ctx.beginPath();
    ctx.arc(125, 400, 10, 0, Math.PI * 2, true); //circle
    ctx.fill();

    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.beginPath(); //triangle house top
    ctx.moveTo(160, 150);
    ctx.lineTo(50, 260);
    ctx.lineTo(250, 260);
    ctx.fill();

    ctx.fillStyle = "yellow"; //sun on right hand side
    ctx.beginPath();
    ctx.arc(1400, 75, 50, 0, Math.PI * 2, true); //circle
    ctx.fill();

    // mondrian for house main
    ctx.fillStyle = "grey";
    ctx.fillRect(255, 260, 65, 185);
    ctx.fillStyle = "#FD0";
    ctx.fillRect(320, 260, 65, 120);
    ctx.fillStyle = "grey";
    ctx.fillRect(385, 260, 65, 120);
    ctx.fillStyle = "#09F";
    ctx.fillRect(450, 260, 65, 185);
    ctx.fillStyle = "#09F";
    ctx.fillRect(255, 440, 65, 60);
    ctx.fillStyle = "#FD0";
    ctx.fillRect(330, 380, 120, 120);
    ctx.fillStyle = "red";
    ctx.fillRect(320, 360, 65, 140);
    ctx.fillStyle = "grey";
    ctx.fillRect(450, 440, 65, 60);

    ctx.fillStyle = "rgb(102, 204, 0)"; //green lawn
    ctx.fillRect(550, 185, 450, 320);

    ctx.fillStyle = "blue"; //pool in lawn
    ctx.beginPath();
    ctx.arc(765, 355, 100, 0, Math.PI * 2, true); //circle
    ctx.fill();

    ctx.fillStyle = "red"; //car top
    ctx.fillRect(250, 520, 145, 60);

    ctx.fillStyle = "#09F"; //car body
    ctx.fillRect(210, 570, 230, 80);

    ctx.fillStyle = "grey"; //car divider
    ctx.fillRect(320, 520, 10, 130);

    ctx.fillStyle = "grey"; //car upper light
    ctx.beginPath();
    ctx.arc(440, 590, 8, 0, Math.PI * 2, true); //circle
    ctx.fill();

    ctx.fillStyle = "grey"; //car lower light
    ctx.beginPath();
    ctx.arc(440, 620, 8, 0, Math.PI * 2, true); //circle
    ctx.fill();

    ctx.fillStyle = "yellow"; //car tire 1
    ctx.beginPath();
    ctx.arc(260, 645, 30, 0, Math.PI * 2, true); //circle
    ctx.fill();

    ctx.fillStyle = "yellow"; //car tire 2
    ctx.beginPath();
    ctx.arc(380, 645, 30, 0, Math.PI * 2, true); //circle
    ctx.fill();

    ctx.fillStyle = "green"; //tree main trunk
    ctx.beginPath();
    ctx.arc(1280, 275, 75, 0, Math.PI * 2, true); //circle
    ctx.fill();

    ctx.fillStyle = "green"; //tree upper branch
    ctx.beginPath();
    ctx.arc(1270, 200, 60, 0, Math.PI * 2, true); //circle
    ctx.fill();

    ctx.fillStyle = "green"; //tree left upper branch
    ctx.beginPath();
    ctx.arc(1210, 260, 60, 0, Math.PI * 2, true); //circle
    ctx.fill();

    ctx.fillStyle = "green"; //tree right upper branch
    ctx.beginPath();
    ctx.arc(1350, 260, 60, 0, Math.PI * 2, true); //circle
    ctx.fill();

    ctx.fillStyle = "grey"; //tree trunk
    ctx.fillRect(1260, 340, 45, 285);

    ctx.fillStyle = "yellow"; //fruit on tree
    ctx.beginPath();
    ctx.arc(1350, 245, 10, 0, Math.PI * 2, true); //circle
    ctx.fill();

    ctx.fillStyle = "yellow"; //fruit on tree
    ctx.beginPath();
    ctx.arc(1210, 245, 10, 0, Math.PI * 2, true); //circle
    ctx.fill();

    ctx.fillStyle = "yellow"; //fruit on tree
    ctx.beginPath();
    ctx.arc(1280, 165, 10, 0, Math.PI * 2, true); //circle
    ctx.fill();

    ctx.fillStyle = "yellow"; //fruit on tree
    ctx.beginPath();
    ctx.arc(1280, 305, 10, 0, Math.PI * 2, true); //circle
    ctx.fill();

    ctx.fillStyle = "grey"; //road
    ctx.fillRect(20, 675, 1520, 110);

    ctx.fillStyle = "#FD0"; //yellow marking on road representing mondrian designs
    ctx.rect(25, 695, 255, 35);
    ctx.fill();

    ctx.fillStyle = ""; //green marking on road representing mondrian
    ctx.rect(140, 735, 265, 35);
    ctx.fill();

    ctx.fillStyle = ""; //yellow marking on road representing mondrian
    ctx.rect(370, 695, 365, 35);
    ctx.fill();

    ctx.fillStyle = ""; // marking on road representing mondrian
    ctx.rect(690, 735, 395, 35);
    ctx.fill();

    ctx.fillStyle = ""; // marking on road representing mondrian
    ctx.rect(940, 695, 345, 35);
    ctx.fill();

    ctx.fillStyle = ""; // marking on road representing mondrian
    ctx.rect(1190, 735, 265, 35);
    ctx.fill();

    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("My Mondrian Inspired Design");
  }
}
