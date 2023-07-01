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
  xPacman += 1;
}

function moveLeft_Pacman() {
  xPacman -= 1;
}

function moveUp_Pacman() {
  yPacman -= 1;
}

function moveDown_Pacman() {
  yPacman += 1;
}

//Ahora agregamos codigo que escuche cuando presiamos el teclado indicado;

window.onkeydown = function (e) {
  if (e.code == "ArrowRight") {
    moveRight_Pacman();
  } 
  //Hacemos lo mismo con las demas flechas
  else if (e.code == "ArrowLeft") {
    moveLeft_Pacman();
  }
  else if(e.code == "ArrowUp"){
    moveUp_Pacman();
  }
  else if(e.code == "ArrowDown"){
    moveDown_Pacman();
  }
  drawGame();
}

//Cuando se ejecute la funcion drawPacman(), se dibujara un nuevo pacaman adicional
//para corregir ese error se crearemos la funcion drawGame.
function drawGame() {
  canvasSprites.clearRect(0, 0, 500, 500);
  drawPacman();
}