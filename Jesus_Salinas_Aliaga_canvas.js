// Inicializar el canvas
var idanimacion
var idtimeout;
var cuentaAtras=3;
var canvas = document.getElementById("canvas");
var contextcanvas = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;
//para saber si ha pulsado en el canvas para que pueda utilizar la flechas y no se mueva el scroll
canvas.addEventListener('click', canvasPresionado);
//función para eliminar la pulsación por defecto
function canvasPresionado(event) {
  document.addEventListener("keydown", anularbotonesPresionado);//para colocar un evento para mantener las teclas y no ejecutarlas para no hacer scroll
  event.stopPropagation(); //para que no se ejecute el siguietne escuchador del documento
}

function anularbotonesPresionado(event) {
  event.preventDefault();  //para no ejecutar la flechas para hacer scroll
}

var body = document.getElementsByTagName("body")[0];
body.addEventListener("click", eliminarAnularPresionado);//para hacer el escuchador del documento si se ha presionado para eliminar el escuchado del canvas

function eliminarAnularPresionado() {
  document.removeEventListener("keydown", anularbotonesPresionado);
}