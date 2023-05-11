const velocidadFantasma = 10;
// con el new Image le doy propiedas a una image pero aún no está en el canvas
const ghostRed = new Image();
var crearArrayFantasma = () => [ghostRed, ghostPink, ghostSky, ghostYellow]
//le digo donde va estar en que sitio de x, en una imagen no puede tener atributos de x o y si fuera creación de figura y no una imagen si
//aquí le digo 
// es te el fantasma verde
ghostRed.positionx = 280;
ghostRed.positiony = 250;
ghostRed.tamanox = 20;
ghostRed.tamanoy = 20;
ghostRed.pospx = 0;
ghostRed.pospy = 0;
ghostRed.src = "../ghost_image/ghost_red.svg"
ghostRed.id = "gred";
ghostRed.onload = function () {
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
ghostPink.tamanox = 20;
ghostPink.tamanoy = 20;
ghostPink.pospx = 0;
ghostPink.pospy = 0;
ghostPink.id = "gpink";
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
ghostSky.tamanox = 20;
ghostSky.tamanoy = 20;
ghostSky.pospx = 0;
ghostSky.pospy = 0;

ghostSky.src = "../ghost_image/ghost_sky.svg"
ghostSky.id = "gsky";
ghostSky.onload = () => contextcanvas.drawImage(ghostSky, ghostSky.positionx, ghostSky.positiony);
//está función es la ia del fantasma por el momento falta implementar el calculo de la distancia
ghostSky.ia = () => iaFantasmal(setInterval, ghostSky);


//fantasma Amarillo:
const ghostYellow = new Image();
//le digo donde va estar en que sitio de x, en una imagen no puede tener atributos de x o y si fuera creación de figura y no una imagen si
//aquí le digo 
ghostYellow.positionx = 260;
ghostYellow.positiony = 250;
ghostYellow.tamanox = 20;
ghostYellow.tamanoy = 20;
ghostYellow.pospx = 0;
ghostYellow.pospy = 0;
ghostYellow.src = "../ghost_image/ghost_Yellow.svg"
ghostYellow.id = "gyellow";
ghostYellow.onload = () => contextcanvas.drawImage(ghostYellow, ghostYellow.positionx, ghostYellow.positiony);
//está función es la ia del fantasma por el momento falta implementar el calculo de la distancia
ghostYellow.ia = () => iaFantasmal(setInterval, ghostYellow);


//función de la inteligencia artificial de los fantasma, fue separada ya que va ver muchos fantasmas para ahorrar lineas de código adicional
function iaFantasmal(callback, ghost) {
    callback(function () {
        pacmanlugarx = pacman.positionx;
        pacmanlugary = pacman.positiony;
        // aquí obtengo números aleatorios entre -1 y 1 para que se mueva el fantasma
        ghost.pospx = calcularDistanciaX(ghost, pacmanlugarx); // esto genera un número aleatorio entre -1 y 1
        ghost.pospy = calcularDistanciaY(ghost, pacmanlugary); // esto genera un número aleatorio entre -1 y 1
        seleccionMovimientoGhostx(ghost,1);
        if (seleccionMovimientoGhostx(ghost)) {
            ghost.pospy = pospy;
            ghost.pospx = 0;
        } else {
            if (seleccionMovimientoGhosty(ghost)) {
                ghost.pospx = -pospx
                ghost.positiony = 0;
            }
        }
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
    }, 110)
}
function seleccionMovimientoGhostx( ghost,xory) {
    if (deteccionColision(ghost)||deteccionColisionFantasmas(ghost)) {
        if (xory==1) {
            xory=1;
            ghost.pospy = ghost.pospy-1;
            seleccionMovimientoGhostx(ghost,xory)
        } else if(xory ==2){
            xory=2;
            ghost.pospx = ghost.pospx-1;
            seleccionMovimientoGhostx(ghost,xory)
        }
    } else {
        if (ghost.pospx==0 && ghost.pospy == 0) {
            if (pacman.positiony==ghost.pospy&&pacman.positionx==ghsot.pospx) {
                return
            } else {
                xory =2
                ghost.pospx = ghost.pospx+1
                seleccionMovimientoGhostx(ghost,xory)
            }
        } else {
            return
        }
    }
}



//Empleo recursividad para saber donde ir el fantasma y que tome una decición según el camino que tenga
function seleccionMovimientoGhosty(ghost) {
    if (deteccionColisionFantasmas(ghost) || deteccionColision(ghost)) {
        if (ghost.pospy > 0) {
            ghost.pospy = -1;
        } else if (ghost.pospy < 0) {
            ghost.pospy = +1;
        }
        
    }
}

//para saber si hubo una colisión con algún fantasma;
function deteccionColisionFantasmas(ghost) {
    fantasmas = crearArrayFantasma();
    avanceadicionalx = 0;
    avanceadicionaly = 0
    if (ghost.pospx > 0) {
        avanceadicionalx += velocidadFantasma;
    } else if (ghost.pospx < 0) {
        avanceadicionalx -= velocidadFantasma;
    }

    if (ghost.pospy > 0) {
        avanceadicionaly += velocidadFantasma
    } else if (ghost.pospy < 0) {
        avanceadicionaly -= velocidadFantasma
    }
    for (let i = 0; i < fantasmas.length; i++) {
        if (ghost.id != fantasmas[i].id) {

            if (ghost.positionx + avanceadicionalx < fantasmas[i].positionx + fantasmas[i].tamanox &&
                (ghost.positionx + avanceadicionalx) + ghost.tamanox > fantasmas[i].positionx &&
                ghost.positiony + avanceadicionaly < fantasmas[i].positiony + fantasmas[i].tamanoy &&
                (ghost.positiony + avanceadicionaly) + ghost.tamanoy > fantasmas[i].positiony) {
                // Si hay colisión, mover al jugador de vuelta

                return true;

            } else {
                return false;
            }
        }

    }
}
//detecta si hubo una colisión con algún muro
function deteccionColision(ghost) {
    fantasmas = crearArrayFantasma();
    avanceadicionalx = 0;
    avanceadicionaly = 0
    if (ghost.pospx > 0) {
        avanceadicionalx += velocidadFantasma;
    } else if (ghost.pospx < 0) {
        avanceadicionalx -= velocidadFantasma;
    }

    if (ghost.pospy > 0) {
        avanceadicionaly += velocidadFantasma
    } else if (ghost.pospy < 0) {
        avanceadicionaly -= velocidadFantasma
    }
    // Detectar colisiones con los muros
    for (var i = 0; i < laberinto1.length; i++) {
        if (ghost.positionx + avanceadicionalx < laberinto1[i].x + laberinto1[i].width &&
            (ghost.positionx + avanceadicionalx) + ghost.tamanox > laberinto1[i].x &&
            ghost.positiony + avanceadicionaly < laberinto1[i].y + laberinto1[i].height &&
            (ghost.tamanoy + avanceadicionaly) + ghost.positiony > laberinto1[i].y) {

            return true;

        } else return false;
    }
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
