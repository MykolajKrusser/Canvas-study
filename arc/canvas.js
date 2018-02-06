let canvas =  document.getElementById("test");// declare variables of element
let ctx = canvas.getContext("2d"); //context
let pi = Math.PI;

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "red";
ctx.arc(150, 100, 75, 0, 2*pi, false);
ctx.stroke();


ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = "green";
ctx.arc(270, 100, 75, 0, 2*pi, false);
ctx.stroke();

ctx.clearRect(0, 0, 500, 500);

canvas.onmousemove = function (event) {
    let x = event.offsetX;
    ctx.beginPath();
    ctx.clearRect(0, 0, 500, 500);
    ctx.arc(250, 250, Math.abs(x-200), 0, 2*pi, false);
    ctx.stroke();
};
