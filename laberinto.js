// Crear un array de muros
// va contemplar 3 niveles
const laberinto1 = [
    //laterales de los muros izquierdo
    { x: 0, y: 0, width: 50, height: 300 },
    { x: 0, y: 320, width: 50, height: 280 },
    //laterales de los muros derecho
    { x: 550, y: 0, width: 50, height: 300 },
    { x: 550, y: 320, width: 50, height: 280 },
    //muro arriba
    { x: 50, y: 0, width: 500, height: 50 },
    //muro abajo
    { x: 50, y: 550, width: 500, height: 50 },
    //muro inferior.
    { x: 70, y: 480, width: 460, height: 50 },
    //muro superior.
    { x: 70, y: 70, width: 460, height: 50 },
    //muro laterales izquierdo centrales
    { x: 70, y: 140, width: 50, height: 160 },
    { x: 70, y: 320, width: 50, height: 140 },
    //muro laterales derecho centrales
    { x: 480, y: 320, width: 50, height: 140 },
    { x: 480, y: 140, width: 50, height: 140 },
    //muro inferior centro centrales:
    { x: 140, y: 410, width: 150, height: 50 },
    { x: 310, y: 410, width: 150, height: 50 },
    //muro superior centro centrales:
    { x: 140, y: 140, width: 150, height: 50 },
    { x: 310, y: 140, width: 150, height: 50 },
    //muro base inferior pacman
    { x: 140, y: 320, width: 320, height: 70 },
    
    //muro base superior pacman:
    { x: 140, y: 210, width: 320, height: 35 },
    { x: 140, y: 275, width: 320, height: 25 }

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