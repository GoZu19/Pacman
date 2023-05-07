// Crear un array de muros
// va contemplar 3 niveles
const laberinto1 = [
    { x: 590, y: 50, width: 10, height: 200 },
    { x: 200, y: 100, width: 100, height: 10 },
    { x: 400, y: 200, width: 10, height: 150 },
    { x: 300, y: 350, width: 150, height: 10 }
];
var laberinto2 = [
    { x: 590, y: 50, width: 10, height: 200 },
    { x: 100, y: 100, width: 100, height: 10 },
    { x: 400, y: 200, width: 10, height: 150 },
    { x: 300, y: 350, width: 150, height: 10 }
];
var laberinto3 = [
    { x: 590, y: 50, width: 10, height: 200 },
    { x: 200, y: 100, width: 100, height: 10 },
    { x: 400, y: 200, width: 10, height: 150 },
    { x: 300, y: 350, width: 150, height: 10 }
];
// Dibujar los muros del laberinto
function drawWalls() {
    for (var i = 0; i < laberinto1.length; i++) {
        //el fillstyle sirve para dar estilo a lo que vayamos hacer, no solo es para pintar también es para
        //colocar imagenes de fondo se puede utilizar funciones de canvas
        contextcanvas.fillStyle = "blue";
        //para cargar el muro en el camba
        contextcanvas.fillRect(laberinto1[i].x, laberinto1[i].y, laberinto1[i].width, laberinto1[i].height);
    }
}
