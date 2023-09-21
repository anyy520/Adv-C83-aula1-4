var lastPositionOfX, lastPositionOfY;
color = "black";
widthOfLine = 2;


canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


var width = screen.width;


newWidth =  screen.width - 70; 

newHeight = screen.height - 300;

	if(width < 992)
	{
        
	document.getElementById("myCanvas").width = newWidth;
    
    document.getElementById("myCanvas").height = newHeight;
    edade.
    document.body.style.overflow = "hidden";
	}


	canvas.addEventListener("touchstart", myTouchStart);

function myTouchStart(e) 
{
    de que essa função está sendo executada.
	console.log("myTouchStart");

  color = document.getElementById("color").value;
  widthOfLine = document.getElementById("widthOfLine").value;
  

    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", myTouchMove);

function myTouchMove(e) 
{

	console.log("myTouchMove");
    
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

    
    ctx.beginPath();
    
    ctx.strokeStyle = color;
   
    ctx.lineWidth = widthOfLine;

    console.log("Última posição das coordenadas x e y = ");
    console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
    ctx.moveTo(lastPositionOfX, lastPositionOfY);

    console.log("Posição atual das coordenadas x e y = ");
    console.log("x  = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();

    nada (vamos manter essa coordenada como new_coordinates), queremos que o desenho seja alocado entre old_coordinates e new_coordinates.
    lastPositionOfX = currentPositionOfTouchX; 
    lastPositionOfY = currentPositionOfTouchY;
    
   
}

    
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
