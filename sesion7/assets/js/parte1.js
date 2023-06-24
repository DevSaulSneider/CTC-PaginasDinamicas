const squareSize = 10; //Pixeles
const sizePacman = 3; // 3 Cuadrados * 10px = 30px 

var xPacman = 2;
var yPacman = 2;

function drawPacman() {

  //Agregamos
  let size = squareSize * sizePacman;
  let x = squareSize * xPacman;
  let y = squareSize * yPacman;

  let radius = size / 2;
  // Forma pacman
  canvasSprites.beginPath();
  canvasSprites.moveTo(x, y);  // Movemos el "puntero" al siguiente punto de inicio de trazado
  canvasSprites.arc(x, y, radius, 0.25 * Math.PI, 1.75 * Math.PI);
  canvasSprites.fillStyle = "yellow";
  canvasSprites.strokeStyle = "black";
  canvasSprites.stroke();
  canvasSprites.fill();

  // Ahora agregamos el ojo
  let eyeRadius = radius / 7.5;
  let eyeY = y - 4 * eyeRadius;
  canvasSprites.moveTo(175, 225);
  canvasSprites.beginPath();
  canvasSprites.arc(x, eyeY, eyeRadius, 0, 2 * Math.PI);
  canvasSprites.fillStyle = "black";
  canvasSprites.fill();
}

function moveRight_Pacman() {
  
}

function moveLeft_Pacman() {
  
}

function moveUp_Pacman() {
  
}

function moveDown_Pacman() {
  
}