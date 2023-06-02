//alert("hola mundo");

let numeroGenerado = parseInt(Math.random() * 100);
console.log(numeroGenerado);


const intentosMaximos = 5;
let intentosGastados = 0;

alert("Tu misión es adivinar el número en el que está pensando la computadora. Este número está entre 0 y 100.\nTienes 5 intentos.");

let numeroIngresado = -1;

let correcto = false;

while (intentosGastados < intentosMaximos && !correcto) {
    
    numeroIngresado = prompt("ingrese un numero del 0 al 100");

    intentosGastados++;

    if (numeroIngresado == numeroGenerado) {
        correcto = true;

    } else if(numeroIngresado < numeroGenerado){

        alert(`El numero ingrsado es menor al correcto. \nTe quedan ${intentosMaximos - intentosGastados} intentos`);  
    } else {

        alert(`El numero ingrsado es mayor al correcto. \nTe quedan ${intentosMaximos - intentosGastados} intentos`);  
    }
}

if (correcto) {
    alert(`Haz Ganado!! Felicidades, el numero correcto es ${numeroGenerado}.\nTe tomó ${intentosGastados} intentos adivinarlo.`);
} else {
    alert(`Se te han acabo los intentos. El numero correcto era ${numeroGenerado}.`);
}