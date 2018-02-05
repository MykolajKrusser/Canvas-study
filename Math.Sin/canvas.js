let canvas =  document.getElementById("test");// declare variables of element
let ctx = canvas.getContext("2d"); //context
let x = 0;
let timer;

drawSIN();

function drawSIN() {
    let y = Math.sin(x);
    let y2 = Math.cos(x);
    if(x >= 500){
        x=0;
    }else {
        x = x + 0.3;
    }
    ctx.fillRect(5*x, 100+20*y, 2, 2);

    ctx.fillRect(5*x, 200+20*y2, 2, 2);

    timer = setTimeout(drawSIN, 20)
}