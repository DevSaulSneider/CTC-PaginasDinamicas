// alert("me salio pacman");

//Capturamos los canvas de html
let canvasSprite = document.getElementById('canvas-sprites').getContext("2d");
let canvasMaze = document.getElementById('canvas-maze').getContext("2d");


const squareSize = 10; //pixeles

//Datos como el tamaño de pacman, de los fantasmas, etc
const sizePacman = 2;   //2 cuadrados * 5px = 10px
const widthGosth = 2;
const sizeFoot = 3;

//Declarar posiciones de forma global
var xPacman = 2; //cuadrados
var yPacman = 2;

function drawPacman() {
  //Transformamos de cuadrado a pixeles
  let size = squareSize * sizePacman;
  let x = squareSize * xPacman + size / 5; //Agregamos size / 5 para corregir la posicion
  let y = squareSize * yPacman + size / 5;
  //Obtenemos la radio
  let radius = size / 2;

  //Forma de pacman
  canvasSprite.beginPath();
  canvasSprite.moveTo(x, y); //Movemos el "puntero" al siguiente punto de inicio de trazado
  canvasSprite.arc(x, y, radius, 0.25 * Math.PI, 1.75 * Math.PI);
  canvasSprite.fillStyle = "yellow";
  canvasSprite.strokeStyle = "black";
  canvasSprite.stroke();
  canvasSprite.fill();

  //Creamos el ojo de pacman
  let eyeRadius = radius / 7.5;
  let eyeY = y - 4 * eyeRadius;

  canvasSprite.moveTo(175, 225);
  canvasSprite.beginPath();
  canvasSprite.arc(x, eyeY, eyeRadius, 0, 2 * Math.PI); //reemplazamos por nuestras variables
  canvasSprite.fillStyle = "black";
  canvasSprite.fill();
}
//drawPacman()

function drawGhost(x, y, color) {
  //Transformar cuadramos a pixeles
  let width = squareSize * widthGosth;
  x = squareSize * x + squareSize / 2;
  y = squareSize * y + squareSize / 4;

  let radius = width / 2;

  canvasSprites.beginPath();
}