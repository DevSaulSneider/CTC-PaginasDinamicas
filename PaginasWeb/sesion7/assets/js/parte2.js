// Ahora dibujamos el laberinto
function drawWalls() {
  //Vamos a crear un cuadro de muro por cada elemento que se encuentra en el archivo laberinto.js

  for (let i = 0; i < patronLaberinto.length; i++) {
    let x = patronLaberinto [i][0] * squareSize;
    let y = patronLaberinto [i][1] * squareSize;

    canvasMaze.beginPath();
    canvasMaze.rect(x, y, squareSize, squareSize);
    canvasMaze.fillStyle = "blue";
    canvasMaze.strokeStyle= "white";
    canvasMaze.fill();
    canvasMaze.stroke();
  }
}

drawWalls();

//Ahora vamos a spbreescribir las funciones de mover
//Escenario
const canvasWidth = document.getElementById("canvas-maze").width / squareSize;
const canvasHeight = document.getElementById("canvas-maze").heidht / squareSize;

function moveRight_Pacman() {
  if(xPacman < canvasWidth -1){
    xPacman += 1;
  }
}

function moveLeft_Pacman() {
  
}

function moveUp_Pacman() {
  
}

function moveDown_Pacman() {
  
}