function calcularSuma() {
    
    // Capturamos el valor ingresado por el usuario
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;

    //Transformamos a numero
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);

    //Realizamos la adicion
    let resulado = valor1 + valor2;
    
    //Mostramos en consola
    console.log(resulado);
};

function calcularResta() {
    // Capturamos el valor ingresado por el usuario
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;

    //Transformamos a numero
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);

    //Realizamos la sustraccion
    let resulado = valor1 - valor2;
    
    //Mostramos en consola
    console.log(resulado);
}

function calcularProducto() {
    // Capturamos el valor ingresado por el usuario
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;

    //Transformamos a numero
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);

    //Realizamos la multiplicacion
    let resulado = valor1 * valor2;
    
    //Mostramos en consola
    console.log(resulado);
}

function calcularDivision() {
    // Capturamos el valor ingresado por el usuario
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;

    //Transformamos a numero
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);

    //Realizamos la division
    let resulado = valor1 / valor2;
    
    //Mostramos en consola
    console.log(resulado);
}