var canvas = document.getElementById(canvas);
var c = canvas.getContext("2d");

dibujLinea("red", 20, 20, 200,300);

function dibujLinea(color, xI, yI, xF, yF){
    c.beginPath();
    c.strokeStyle = color;
    c.moveTo(xI, yI);
    c.lineTo(xF, yF);
    c.stroke();
    c.closePath(); 

    c.beginPath();
    c.strokeStyle = color;
    c.moveTo(yI, xI);
    c.lineTo(yF, xF);
    c.stroke();
    c.closePath(); 
}
