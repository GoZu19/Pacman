// con el new Image le doy propiedas a una image pero aún no está en el canvas
const pacman = new Image();
//le digo donde va estar en que sitio de x, en una imagen no puede tener atributos de x o y si fuera creación de figura y no una imagen si
//aquí le digo 
pacman.positionx = 290;
pacman.positiony = 300;
pacman.tamanox = 20;
pacman.tamanoy = 20;
pacman.src = "pacman_image/Pacman_right.svg"
pacman.onload = function() {


    contextcanvas.drawImage(pacman, pacman.positionx, pacman.positiony);

}
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
        if (pacman.positionx < laberinto1[i].x + laberinto1[i].width &&
            pacman.positionx + pacman.tamanoy > laberinto1[i].x &&
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