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
ghostRed.pospx = 280;
ghostRed.pospy = 250;
ghostRed.direccion = "DERECHA";
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
ghostPink.pospx = 300;
ghostPink.pospy = 250;
ghostPink.direccion = "DERECHA";
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
ghostSky.pospx = 320;
ghostSky.pospy = 250;
ghostSky.direccion = "DERECHA";
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
ghostYellow.pospx = 260;
ghostYellow.pospy = 250;
ghostYellow.direccion = "DERECHA";
ghostYellow.src = "../ghost_image/ghost_Yellow.svg"
ghostYellow.id = "gyellow";
ghostYellow.onload = () => contextcanvas.drawImage(ghostYellow, ghostYellow.positionx, ghostYellow.positiony);
//está función es la ia del fantasma por el momento falta implementar el calculo de la distancia
ghostYellow.ia = () => iaFantasmal(setInterval, ghostYellow);


//función de la inteligencia artificial de los fantasma, fue separada ya que va ver muchos fantasmas para ahorrar lineas de código adicional
function iaFantasmal(callback, ghost) {
    callback(function () {
        //función para que se mueva el fantasma
        
        movimientoFantasma(ghost)

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


//para que se mueva el fantasma:
function movimientoFantasma(ghost) {
    if(ghost.positiony == pacman.positiony){
        if (pacman.positionx > ghost.positionx) {
            ghost.direccion = "DERECHA";
        }else{
            ghost.direccion = "IZQUIERDA";
        }
    }
    if(ghost.positionx == pacman.positionx){
        if (pacman.positiony > ghost.positiony) {
            ghost.direccion = "ABAJO";
        }else{
            ghost.direccion = "ARRIBA";
        }
    }
    
    switch (ghost.direccion) {
        case "DERECHA":
            ghost.pospx += velocidadFantasma;
            break;
        case "IZQUIERDA":
            ghost.pospx -= velocidadFantasma;
        break;
        case "ARRIBA":
            ghost.pospy -= velocidadFantasma;
        break;
        case "ABAJO":
            ghost.pospy += velocidadFantasma;
        break;
        default:
            break;
    }
    if (deteccionColision(ghost)||deteccionColisionFantasmas(ghost)) {
        switch (ghost.direccion) {
            case "DERECHA":
                ghost.pospx -= velocidadFantasma;
                ghost.direccion = "IZQUIERDA";
                break;
            case "IZQUIERDA":
                ghost.pospx += velocidadFantasma;
                ghost.direccion= "ARRIBA";
            break;
            case "ARRIBA":
                ghost.pospy += velocidadFantasma;
                ghost.direccion = "ABAJO";
            break;
            case "ABAJO":
                ghost.pospy -= velocidadFantasma;
                ghost.direccion = "DERECHA";
            break;
            default:
                break;
           }
           
    } else {
        switch (ghost.direccion) {
            case "DERECHA":
                ghost.positionx = ghost.pospx;
                break;
            case "IZQUIERDA":
                ghost.positionx = ghost.pospx;
            break;
            case "ARRIBA":
                ghost.positiony = ghost.pospy;
            break;
            case "ABAJO":
                ghost.positiony = ghost.pospy;
            break;
            default:
                break;
           }
           return;
    }




}




//para saber si hubo una colisión con algún fantasma;
function deteccionColisionFantasmas(ghost) {
    fantasmas = crearArrayFantasma();
    numColision = 0
    colision =false;
    
    for (let i = 0; i < fantasmas.length; i++) {
        if (ghost.id != fantasmas[i].id) {

            if (ghost.pospx < fantasmas[i].pospx + fantasmas[i].tamanox &&
                ghost.pospx + ghost.tamanox > fantasmas[i].pospx &&
                ghost.pospy < fantasmas[i].pospy + fantasmas[i].tamanoy &&
                ghost.pospy + ghost.tamanoy > fantasmas[i].pospy) {
                // Si hay colisión, mover al jugador de vuelta
               
                numColision += 1;
            } 
        }

    }
    if (numColision>0) {
        colision = true;
    } else {
        colision = false;
    }
    return colision;
}
//detecta si hubo una colisión con algún muro
function deteccionColision(ghost) {
    colision = false;
    numColision = 0;
    // Detectar colisiones con los muros
    for (var i = 0; i < laberinto1.length; i++) {
        if (ghost.pospx < laberinto1[i].x + laberinto1[i].width &&
            ghost.pospx + ghost.tamanoy > laberinto1[i].x &&
            ghost.pospy < laberinto1[i].y + laberinto1[i].height &&
            ghost.tamanoy + ghost.pospy > laberinto1[i].y) {
            
            numColision +=1;
        } else {
            if (ghost.positionx > 600) {
                // Si hay colisión, mover al jugador de vuelta
                if (event.keyCode === 39) {
                    ghost.positionx = 0;
                }
            }
            if (ghost.positionx < 0) {
                // Si hay colisión, mover al jugador de vuelta
                if (event.keyCode === 37) {
                    ghost.positionx = 590;
                }
            }
            
        }
    }
    if (numColision>0) {
        colision = true;
    } else {
        colision =false;
    }
    return colision;
}
