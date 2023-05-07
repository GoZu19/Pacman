

//cargar el pacman
pacman.onload();
//cargar fantastmas:
//fantasma rojo
ghostRed.onload();
ghostRed.ia();
//fantasma rosada:
ghostPink.onload();
ghostPink.ia();
//fantasma celeste:
ghostSky.onload();
ghostSky.ia();
//fantasma amarillo:
ghostYellow.onload();
ghostYellow.ia();

// Mover al jugador con las teclas de flecha



// Mover al jugador con las teclas de flecha y detectar colisiones con los muros
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 37) {
        pacman.src = "pacman_image/Pacman_left.svg"
        pacman.positionx -= 10;
    } else if (event.keyCode === 38) {
        pacman.src = "pacman_image/Pacman_up.svg"
        pacman.positiony -= 10;
    } else if (event.keyCode === 39) {
        pacman.src = "pacman_image/Pacman_right.svg"
        pacman.positionx += 10;
    } else if (event.keyCode === 40) {
        pacman.src = "pacman_image/Pacman_down.svg"
        pacman.positiony += 10;
    }

    // Detectar colisiones con los muros
    for (var i = 0; i < laberinto1.length; i++) {
        if (pacman.positionx <laberinto1[i].x + laberinto1[i].width &&
            pacman.positionx + pacman.tamanoy> laberinto1[i].x  &&
            pacman.positiony < laberinto1[i].y + laberinto1[i].height &&
            pacman.tamanoy + pacman.positiony > laberinto1[i].y) {
            // Si hay colisión, mover al jugador de vuelta
            if (event.keyCode === 37) {
                pacman.positionx += 10;
                
            } else if (event.keyCode === 38) {
                pacman.positiony += 10;
            } else if (event.keyCode === 39) {
                pacman.positionx -= 10;
            } else if (event.keyCode === 40) {
                pacman.positiony -= 10;
            }
        } else {
            if (pacman.positionx > 600) {
                // Si hay colisión, mover al jugador de vuelta
                if (event.keyCode === 39) {
                    pacman.positionx = 0;
                }
            }
            if (pacman.positionx < 0) {
                // Si hay colisión, mover al jugador de vuelta
                if (event.keyCode === 37) {
                    pacman.positionx = 590;
                }
            }
        }
    }
});

// Bucle del juego
function gameLoop() {
    // Limpiar el canvas
    contextcanvas.clearRect(0, 0, canvas.width, canvas.height);

    //hacer aparecer el pacma
    pacman.onload();

    //hacer aparecer los fantasmas:
    //fantasma rojo:
    ghostRed.onload();
    //fantasma rosada:
    ghostPink.onload();
    //fantasma celetes:
    ghostSky.onload();
    //fantasma amarillo:
    ghostYellow.onload();

    drawWalls()
        // Llamar al bucle del juego otra vez
    requestAnimationFrame(gameLoop);
}
gameLoop();