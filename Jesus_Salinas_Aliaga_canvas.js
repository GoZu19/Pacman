// Inicializar el canvas
var idanimacion//aquí está variable lo incializamos para que exista todoe el documento pero va guardar el id AnimationFrame
var idtimeout;//aquí guardará el id del timeSetOut
var cuentaAtras=3;//inicializamos la cuenta hacia atras
var canvas = document.getElementById("canvas"); // guardamos el elemento del cambas
var contextcanvas = canvas.getContext("2d"); // guardamos el contexto del canvas con el vamos animar o dibujar
//agregamos un tamaño fijo al canvas
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
  document.removeEventListener("keydown", anularbotonesPresionado);//esto eliminará el evento de keydon donde si permitirá moverse
}