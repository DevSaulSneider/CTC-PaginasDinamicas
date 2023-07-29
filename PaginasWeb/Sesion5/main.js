// alert("funciona mi js");

let texto = document.getElementById('texto'); //elemento a modificar
console.log(texto);

let colorTexto = document.getElementById('color-texto');//controlar el color de texto
console.log(colorTexto);

let colorFondo = document.getElementById('color-fondo');//controlar el fondo
console.log(colorFondo);

//Creamos Funciones
function CambiarColor() {
    texto.style.color = colorTexto.value;
}
// CambiarColor()

function CambiarFondo() {
    texto.style.background  = colorFondo.value;
}
// CambiarFondo();

//CREAMOS EVENTOS PARA CADA SELECT
colorTexto.addEventListener("change", CambiarColor);

colorFondo.addEventListener("change", CambiarFondo)

