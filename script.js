var canvas = document.getElementById(canvas);
var c = canvas.getContext("2d");

function dibujLinea(color, xI, yI, xF, yF){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xI, yI);
    lienzo.lineTo(xF, yF);
    lienzo.stroke();
    lienzo.closePath(); 

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(yI, xI);
    lienzo.lineTo(yF, xF);
    lienzo.stroke();
    lienzo.closePath(); 
}
