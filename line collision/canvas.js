let canvas =  document.getElementById("test");// declare variables of element
let ctx = canvas.getContext("2d"); //context
let targetAmount = 50;// amount of steps to get line
let targetAmount2 = 450;// amount of steps to get line
let cw = ctx.canvas.width; //context width canvas html element object that is associated with the context
let ch = ctx.canvas.height; //and height
let simulation = setInterval(progress, 15);//every 50 milisec fire a function
function progress() {
    ctx.clearRect(0, 0, cw, ch); //"refresh" canvas after each dawning))

    ctx.beginPath(); //draw lines
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.moveTo(50, 50);
    ctx.lineTo(targetAmount, targetAmount);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.moveTo(450, 450);
    ctx.lineTo(targetAmount2, targetAmount2);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.moveTo(50, 450);
    ctx.lineTo(targetAmount, targetAmount2);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 5;
    ctx.moveTo(450, 50);
    ctx.lineTo(targetAmount2, targetAmount);
    ctx.stroke();

    targetAmount++;//add 1 to targetAmount each setInterval step
    targetAmount2--; // minus 1 to targetAmount each setInterval step
    if (targetAmount > 250){ // condition to end line draw, and start draw line collision
        clearInterval(simulation);
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 5;
        ctx.moveTo(250, 250);
        ctx.lineTo(50, 250);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 5;
        ctx.moveTo(250, 250);
        ctx.lineTo(450, 250);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "green";
        ctx.lineWidth = 5;
        ctx.moveTo(250, 250);
        ctx.lineTo(250, 450);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "yellow";
        ctx.lineWidth = 5;
        ctx.moveTo(250, 250);
        ctx.lineTo(250, 50);
        ctx.stroke();

    }
}