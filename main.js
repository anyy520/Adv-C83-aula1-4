//var mouseEvent = "empty";removeremos a variável mouseEvent, pois não precisamos dela agora.
var lastPositionOfX, lastPositionOfY;//As variáveis que utilizamos para armazenar as coordenadas X e Y permanecerão as mesmas.

color = "black";//para a variável que contém color e para a variável que
widthOfLine = 2;//contém a width, serão as mesmas.

canvas = document.getElementById('myCanvas');//referencia canvas
ctx = canvas.getContext("2d");//atribui a varivel ctx

var width = screen.width;//buscaremos a width da tela e a armazenamos dentro da variável.
//pois queremos saber qual tamanho de tela (mobile ou desktop) que o usuário está utilizando.
newWidth =  screen.width - 70; // definiremos uma variável newWidth:● Essa variável será 
                              //utilizada para armazenar a nova width que será obtida aosubtrairmos a screen.width de 70 da width da tela do usuário.
                             //○ Esse 70 significa 70px.
newHeight = screen.height - 300;//armazenar a nova height, que será obtida subtraindo screen.height de 300
// if abaixo
//Se o tamanho da tela for menor que 992 (ou seja, 992px), então, modifique
//a width e a height do canvas para as novas width e height, as quais
//definimos no ponto acima

     if(width < 992)//
	{
	document.getElementById("myCanvas").width = newWidth;
       document.getElementById("myCanvas").height = newHeight;
       document.body.style.overflow = "hidden";
	}

canvas.addEventListener("touchstart", my_touchstart);//


function my_touchstart(e) //
{
	console.log("my_touchstart");
  //Atividade Adicional
  color = document.getElementById("color").value;
  widthOfLine = document.getElementById("widthOfLine").value;
  //Fim da Atividade Adicional
         
    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);//
function my_touchmove(e) 
{

	console.log("my_touchMove");

    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

    //mesma coisa do app web paint antigo
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;

    console.log("Ultima posicao das coordenadas x e y = ");
    console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
    ctx.moveTo(lastPositionOfX, lastPositionOfY);

    console.log("Posicao atual das coordenadas x e y = ");
    console.log("x  = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();

    lastPositionOfX = currentPositionOfTouchX; 
    lastPositionOfY = currentPositionOfTouchY;
    
    //mesma coisa do app web paint antigo
}

    //mesma coisa do app web paint antigo
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    //mesma coisa do app web paint antigo
