let canvas =  document.getElementById("test");// declare variables of element
let ctx = canvas.getContext("2d"); //context
let amountLoaded = 0; // amount of steps to get a circle
let start = 4.72; // 12 o'clock start draw position
let cw = ctx.canvas.width; //context width  canvas html element object that is associated with the context
let ch = ctx.canvas.height; //and height
let diff; //the relative value of amount loaded to math.pi every step to make a circle
let simulation = setInterval(progress, 50); //every 50 milisec fire a function which count steps from 0 to 100, or less number

function progress() {
    diff = ((amountLoaded / 100) * Math.PI * 2 * 10).toFixed(2); //the relative value
    ctx.clearRect(0, 0, cw, ch); //"refresh" canvas after each dawning))
    ctx.lineWidth = 15; //progress line width
    ctx.fillStyle = '#A6120D'; //text color
    ctx.strokeStyle ='#A6120D';// progress line color
    ctx.fillText(amountLoaded + '%', cw * 0.5, ch * 0.5 + 2, cw); //draw and calc percent number
    ctx.font = "16pt Arial";
    ctx.textAlign = 'center';

    ctx.beginPath(); // start draw
    ctx.arc(250, 250, 100, start, diff/10 + start, false); //draw circle in center of canvas element, radius 100 start and points, from right to left
    ctx.stroke(); //draw method
    amountLoaded++; // add 1 to amountLoaded each setInterval step
    if (amountLoaded > 100){ // condition to end circle draw
        clearInterval(simulation);
        //maybe some callback
    }
}