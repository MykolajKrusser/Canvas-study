var canvas =  document.getElementById("test");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.moveTo(100, 50);
ctx.lineTo(150, 150);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 15;
ctx.moveTo(200, 100);
ctx.lineTo(350, 100);
ctx.lineTo(350, 200);
ctx.lineCap = "round"; //"square", "butt"
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 10;
ctx.moveTo(100, 200);
ctx.lineTo(200, 300);
ctx.lineTo(50, 300);
//ctx.lineTo(100, 200);
ctx.closePath(); //cool
ctx.fillStyle = 'orange';
ctx.stroke();
ctx.fill();