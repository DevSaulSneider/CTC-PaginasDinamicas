// alert("hola mundo");
let boton_enviar = document.querySelector("#enviar");

boton_enviar.addEventListener("click", function(e){
  e.preventDefault();
  Swal.fire(
    'Envio Correcto',
    'Se realizo con exito la operacion',
    'success'
  )
})