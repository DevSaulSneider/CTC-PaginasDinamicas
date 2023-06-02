console.log(document);



function ColocarTitulo() {
    document.querySelector('h1').innerHTML = "Texto desde JS";
}

function QuitarTitulo() {
    document.querySelector('h1').innerHTML = "";
}

let miBoton = document.getElementById("alerta");

miBoton.addEventListener("click", function(){
    alert("presionaste el boton");
});

let botonColor = document.getElementById("color");
let parrafo = document.getElementById("parrafo");

botonColor.addEventListener("click", function(){
    parrafo.classList.add("fondo");
});