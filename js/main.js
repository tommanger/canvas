'use strict'

var gCanvas;
var gCtx;
var mouseDown = false;
var gDraw = 'circles';
var gBackgroundColor = '#fafafa';
var gStrokeColor = 'black';

function init() {
    createCanvas();
}

function createCanvas() {
    gCanvas = document.querySelector('.canvas');
    gCanvas.height = window.innerHeight;
    gCanvas.width = window.innerWidth;
    gCtx = gCanvas.getContext('2d');
    gCtx.fillStyle = gBackgroundColor;

    gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
}

function handleMouseDown() {
    mouseDown = true;
}

function handlemosuemove(event) {
    if (!mouseDown) return;
    let x = event.clientX;
    let y = event.clientY;
    switch(gDraw) {
        case 'circles':
            drawCircle(x,y)
            break;
        case 'squares':
            drawSqr(x,y)
            break;
            case 'lines':
            drawLines(x,y)
            break;
        } 
    
}

function handleMouseUp() {
    mouseDown = false;
}

function drawLines(x,y){
    gCtx.strokeStyle = gStrokeColor;
    gCtx.beginPath();

    var randX = getRandomIntInclusive(10, 300);
    var randY = getRandomIntInclusive(10, 300);

    gCtx.moveTo(x, y);
    gCtx.lineTo(x+randX,y+randY);

    gCtx.stroke()

}

function drawSqr(x,y) {
    gCtx.strokeStyle = gStrokeColor;
    gCtx.strokeRect(x-50,y-50,100,100)
    

    // gCtx.beginPath();
    // gCtx.moveTo(x, y);
    // gCtx.lineTo(x+100,y)
    // gCtx.lineTo(x+100,y+100)
    // gCtx.lineTo(x,y+100)
    // gCtx.lineTo(x,y)
    // // gCtx.closePath()
    // gCtx.stroke()
}

function drawCircle(x,y){
    gCtx.strokeStyle = gStrokeColor;

    gCtx.beginPath();
    gCtx.arc(x, y, 50, 0, Math.PI * 2, true);
   
    gCtx.stroke();
}


function onSelectDraw(val){
    gDraw = val;
  
}


function onClearBtn(){
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    gCtx.fillStyle = gBackgroundColor;
    gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
}



function onChangeColor(val){
    gStrokeColor = val;
}

function onChangeBackColor(val){
    gBackgroundColor = val;
    createCanvas();

}

function onSaveBtn(elLink){
    elLink.href = gCanvas.toDataURL()
    elLink.download = 'my-canvas.jpg';
}

function onAboutBtn(){
    document.querySelector('.modal').classList.toggle('showModal');
}