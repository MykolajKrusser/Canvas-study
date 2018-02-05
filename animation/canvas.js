let canvas =  document.getElementById("test");// declare variables of element
let ctx = canvas.getContext("2d"); //context
let stepCount = 0; //steps to change dot move direction
let direction;
let timer;
let myX; //mouse coordinates X
let myY; //mouse coordinates X
let x = 250; //start dot point
let y = 250;
function drawDot() {
    ctx.clearRect(0, 0, 500, 500,); //clear old dot every step
    if (stepCount == 0){
        stepCount = Math.floor(15 * Math.random()); //random step
        direction = Math.floor(8 * Math.random()); //randomm direction
    } else {
        stepCount--;
    }
    switch (direction){ //fore every random step, choose random direction
        case 0:
            y = y - 1; //down
            break;
        case 1:
            x = x + 1;// right
            break;
        case 2:
            y = y + 1; //up
            break;
        case 3:
            x = x - 1; //left
            break;
        case 4:
            x = x + 1; // up+right
            y = y + 1;
            break;
        case 5:
            x = x - 1; //down+left
            y = y - 1;
            break;
        case 6:
            x = x + 1; //down+right
            y = y - 1;
            break;
        case 7:
            x = x - 1; //up+left
            y = y + 1;
            break;
    }
    if(x<0 || x>500 || y<0 || y>500){ // hero don`t touch the border!!!
        stepCount = 0;
    }
    ctx.fillRect(x, y, 6, 6); //draw rectangle

    ctx.beginPath(); // draw line from dot to mouse
    ctx.moveTo(x, y);
    ctx.lineTo(myX, myY);
    ctx.stroke();

    timer = setTimeout(drawDot, 100); //function auto run every 100 milisec.
}

drawDot(); // run function

canvas.onmousemove = function (event) { // get mouse coordinates x and y
    myX = event.offsetX;
    myY = event.offsetY;
};