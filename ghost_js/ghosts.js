const velocidadFantasma = 6;
// con el new Image le doy propiedas a una image pero aún no está en el canvas
const ghostRed = new Image();
//le digo donde va estar en que sitio de x, en una imagen no puede tener atributos de x o y si fuera creación de figura y no una imagen si
//aquí le digo 
// es te el fantasma verde
ghostRed.positionx = 280;
ghostRed.positiony = 250;
ghostRed.tamanox = 15;
ghostRed.tamanoy = 15;
ghostRed.pospx = 0;
ghostRed.pospy = 0;
ghostRed.src = "../ghost_image/ghost_red.svg"
ghostRed.onload = function() {
        contextcanvas.drawImage(ghostRed, ghostRed.positionx, ghostRed.positiony);
    }
    //está función es la ia del fantasma por el momento falta implementar el calculo de la distancia
ghostRed.ia = () => iaFantasmal(setInterval, ghostRed);


//fantasma pink:
// con el new Image le doy propiedas a una image pero aún no está en el canvas
const ghostPink = new Image();
//le digo donde va estar en que sitio de x, en una imagen no puede tener atributos de x o y si fuera creación de figura y no una imagen si
//aquí le digo 
ghostPink.positionx = 300;
ghostPink.positiony = 250;
ghostPink.tamanox = 15;
ghostPink.tamanoy = 15;
ghostPink.pospx = 0;
ghostPink.pospy = 0;
ghostPink.src = "../ghost_image/ghost_pink.svg"
ghostPink.onload = () => contextcanvas.drawImage(ghostPink, ghostPink.positionx, ghostPink.positiony);
//está función es la ia del fantasma por el momento falta implementar el calculo de la distancia
ghostPink.ia = () => iaFantasmal(setInterval, ghostPink);

//fantasma celeste:
const ghostSky = new Image();
//le digo donde va estar en que sitio de x, en una imagen no puede tener atributos de x o y si fuera creación de figura y no una imagen si
//aquí le digo 
ghostSky.positionx = 320;
ghostSky.positiony = 250;
ghostSky.tamanox = 15;
ghostSky.tamanoy = 15;
ghostSky.pospx = 0;
ghostSky.pospy = 0;
ghostSky.src = "../ghost_image/ghost_sky.svg"
ghostSky.onload = () => contextcanvas.drawImage(ghostSky, ghostSky.positionx, ghostSky.positiony);
//está función es la ia del fantasma por el momento falta implementar el calculo de la distancia
ghostSky.ia = () => iaFantasmal(setInterval, ghostSky);


//fantasma Amarillo:
const ghostYellow = new Image();
//le digo donde va estar en que sitio de x, en una imagen no puede tener atributos de x o y si fuera creación de figura y no una imagen si
//aquí le digo 
ghostYellow.positionx = 260;
ghostYellow.positiony = 250;
ghostYellow.tamanox = 15;
ghostYellow.tamanoy = 15;
ghostYellow.pospx = 0;
ghostYellow.pospy = 0;
ghostYellow.src = "../ghost_image/ghost_Yellow.svg"
ghostYellow.onload = () => contextcanvas.drawImage(ghostYellow, ghostYellow.positionx, ghostYellow.positiony);
//está función es la ia del fantasma por el momento falta implementar el calculo de la distancia
ghostYellow.ia = () => iaFantasmal(setInterval, ghostYellow);


//función de la inteligencia artificial de los fantasma, fue separada ya que va ver muchos fantasmas para ahorrar lineas de código adicional
function iaFantasmal(callback, ghost) {
    callback(function() {
        pacmanlugarx = pacman.positionx;
        pacmanlugary = pacman.positiony;
        // aquí obtengo números aleatorios entre -1 y 1 para que se mueva el fantasma
        ghost.pospx = calcularDistanciaX(ghost, pacmanlugarx); // esto genera un número aleatorio entre -1 y 1
        ghost.pospy = calcularDistanciaY(ghost, pacmanlugary); // esto genera un número aleatorio entre -1 y 1

        // aqui miramos si que ha presionado el fantasma

        if (ghost.pospx > 0) {
            ghost.positionx += velocidadFantasma;
        } else if (ghost.pospx < 0) {
            ghost.positionx -= velocidadFantasma;
        }

        if (ghost.pospy > 0) {
            ghost.positiony += velocidadFantasma;
        } else if (ghost.pospy < 0) {
            ghost.positiony -= velocidadFantasma;
        }
        // Detectar colisiones con los muros
        for (var i = 0; i < laberinto1.length; i++) {
            if (ghost.positionx < laberinto1[i].x + laberinto1[i].width &&
                ghost.positionx + ghost.tamanoy > laberinto1[i].x &&
                ghost.positiony < laberinto1[i].y + laberinto1[i].height &&
                ghost.tamanoy + ghost.positiony > laberinto1[i].y) {
                colisionx = false;
                colisiony = false;
                // Si hay colisión, mover al jugador de vuelta
                if (ghost.pospx > 0) {
                    ghost.positionx -= velocidadFantasma;
                    colisionx = true;
                } else if (ghost.pospx < 0) {
                    ghost.positionx += velocidadFantasma;
                    colisionx = true;
                }
                if (ghost.pospy > 0) {
                    ghost.positiony -= velocidadFantasma;
                    colisiony = true;
                } else if (ghost.pospy < 0) {
                    ghost.positiony += velocidadFantasma;
                    colisiony = true;
                }
                if (colisionx) {
                    // redirigirBloqueox(ghost, laberinto1[i], pacman)
                } else if (colisiony) {
                    // redirigirBloqueoy(ghost, laberinto1[i], pacman)
                }

            } else {
                if (ghost.positionx > 600) {
                    // Si hay colisión, mover al jugador de vuelta
                    if (ghost.pospx > 0) {
                        ghost.positionx = 0;
                    }
                }
                if (ghost.positionx < 0) {
                    // Si hay colisión, mover al jugador de vuelta
                    if (ghost.pospx < 0) {
                        ghost.positionx = 590;
                    }
                }

            }

        }
    }, 110)
}

function calcularDistanciaX(ghost, pacmanx) {
    //para calcular la distancia del pacman para saber si se mueve para la izquierda o derecha vamos a implementar 
    //un calculo matematico sencillo una resta pero 
    //una que se aprecia el orden de objetos que esten este avanzará a la izquierda cuando la resta se positiva.
    //y este avanzará a la izquierda cuando la resta se negativa
    return pacmanx - ghost.positionx;
}

function calcularDistanciaY(ghost, pacmany) {
    //está es lo mismo que la función de arriba calcula según la resta
    //esto va avanzará abajo cuando sea positivo entonces el pacman siempre va ser mayor
    return pacmany - ghost.positiony;
}
//redirigir si hay un bloqueo de la parte x,Y para que vaya arriba o abajo según estas funciones
//redirigir x según la distancia del muro
function redirigirBloqueox(ghost, laberinto, pacman) {
    distanciaA = ghost.positiony - laberinto.y;

    distanciaB = (ghost.positiony + ghost.tamanoy) - (laberinto.y + laberinto.height)

    if (distanciaA < distanciaB || (ghost.positiony > pacman.positiony && ghost.positiony != pacman.positiony)) {
        ghost.positiony -= velocidadFantasma;
    } else {
        ghost.positiony += velocidadFantasma;
    }
}
//redirigir y según la distancia del muro
function redirigirBloqueoy(ghost, laberinto, pacman) {
    distanciaA = ghost.positionx - laberinto.x;
    distanciaB = (ghost.positionx + ghost.tamanox) - (laberinto.x + laberinto.width)
    if (distanciaA < distanciaB || (ghost.positionx > pacman.positionx && ghost.positionx != pacman.positionx)) {
        ghost.positionx -= velocidadFantasma;
    } else {
        ghost.positionx += velocidadFantasma;
    }
}