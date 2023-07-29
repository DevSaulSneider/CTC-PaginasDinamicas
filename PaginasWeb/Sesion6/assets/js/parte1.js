//alert("hola mundo");

//Capturamos los canvas de html
let canvasSprite = document.getElementById('canvas-sprites').getContext("2d");
let canvasMaze = document.getElementById('canvas-maze').getContext("2d");

//Dijamos personajes
canvasSprite.beginPath(); //Empezamos a dibujar

//Utilizamos radianes, PI es igual 180°
//Circulo completo
canvasSprite.arc(100, 100, 50, 0, 2 * Math.PI);
canvasSprite.fillStyle = "yellow";
canvasSprite.strokeStyle = "black";
canvasSprite.stroke();
canvasSprite.fill();

//Forma de pacman
canvasSprite.beginPath();
canvasSprite.moveTo(200, 200); //Movemos el "puntero" al siguiente punto de inicio de trazado
canvasSprite.arc(200, 200, 50, 0.25 * Math.PI, 1.75 * Math.PI);
canvasSprite.fillStyle = "yellow";
canvasSprite.strokeStyle = "black";
canvasSprite.stroke();
canvasSprite.fill();

//Creamos el ojo de pacman
canvasSprite.moveTo(175, 225);
canvasSprite.beginPath();
canvasSprite.arc(200, 175, 7.5, 0, 2 * Math.PI);
canvasSprite.fillStyle = "black";
canvasSprite.fill();