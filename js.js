// Inicializar el canvas
var canvas = document.getElementById("canvas");
var contextcanvas = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

// Dibujar al jugador (Pac-Man)
var player = new Image();
player.xx = 300;
player.yy = 300;
player.radius = 20;
player.onload = function() {
    contextcanvas.drawImage(player, player.xx + 10, player.yy + 10);
}
player.src = "Pacman.svg"

player.onload();

// Mover al jugador con las teclas de flecha
// Crear un array de muros
var laberinto1 = [
    { x: 590, y: 50, width: 10, height: 200 },
    { x: 200, y: 100, width: 100, height: 10 },
    { x: 400, y: 200, width: 10, height: 150 },
    { x: 300, y: 350, width: 150, height: 10 }
];

// Dibujar los muros
function drawWalls() {
    for (var i = 0; i < laberinto1.length; i++) {
        //para pintar de azul
        contextcanvas.fillStyle = "blue";
        //para cargar el muro en el camba
        contextcanvas.fillRect(laberinto1[i].x, laberinto1[i].y, laberinto1[i].width, laberinto1[i].height);
    }
}

// Mover al jugador con las teclas de flecha y detectar colisiones con los muros
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 37) {
        player.xx -= 10;
    } else if (event.keyCode === 38) {
        player.yy -= 10;
    } else if (event.keyCode === 39) {
        player.xx += 10;
    } else if (event.keyCode === 40) {
        player.yy += 10;
    }

    // Detectar colisiones con los muros
    for (var i = 0; i < laberinto1.length; i++) {
        if (player.xx + player.radius > laberinto1[i].x &&
            player.xx - player.radius < laberinto1[i].x + laberinto1[i].width &&
            player.yy + player.radius > laberinto1[i].y &&
            player.yy - player.radius < laberinto1[i].y + laberinto1[i].height) {
            // Si hay colisión, mover al jugador de vuelta
            if (event.keyCode === 37) {
                player.xx += 10;

            } else if (event.keyCode === 38) {
                player.yy += 10;
            } else if (event.keyCode === 39) {
                player.xx -= 10;
            } else if (event.keyCode === 40) {
                player.yy -= 10;
            }
        } else {
            if (player.xx > 600) {
                // Si hay colisión, mover al jugador de vuelta
                if (event.keyCode === 39) {
                    player.xx = 0;
                }
            }
            if (player.xx < 0) {
                // Si hay colisión, mover al jugador de vuelta
                if (event.keyCode === 37) {
                    player.xx = 590;
                }
            }
        }
    }
});

// Bucle del juego
function gameLoop() {
    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar al jugador
    player.onload();
    drawWalls()
        // Llamar al bucle del juego otra vez
    requestAnimationFrame(gameLoop);
}
gameLoop();