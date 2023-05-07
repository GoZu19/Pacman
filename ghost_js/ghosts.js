
const velocidadFantasma = 6;
// con el new Image le doy propiedas a una image pero aún no está en el canvas
const ghostRed = new Image();
//le digo donde va estar en que sitio de x, en una imagen no puede tener atributos de x o y si fuera creación de figura y no una imagen si
//aquí le digo 
// es te el fantasma verde
ghostRed.positionx = 280;
ghostRed.positiony = 250;
ghostRed.tamanox = 20;
ghostRed.tamanoy = 20;
ghostRed.pospx=0;
ghostRed.pospy=0;
ghostRed.src = "../ghost_image/ghost_red.svg"
ghostRed.onload = function() {
    contextcanvas.drawImage(ghostRed, ghostRed.positionx, ghostRed.positiony );
}    
//está función es la ia del fantasma por el momento falta implementar el calculo de la distancia
ghostRed.ia = ()=>iaFantasmal(setInterval,ghostRed);


//fantasma pink:
// con el new Image le doy propiedas a una image pero aún no está en el canvas
const ghostPink = new Image();
//le digo donde va estar en que sitio de x, en una imagen no puede tener atributos de x o y si fuera creación de figura y no una imagen si
//aquí le digo 
ghostPink.positionx = 300;
ghostPink.positiony = 250;
ghostPink.tamanox = 20;
ghostPink.tamanoy = 20;
ghostPink.pospx=0;
ghostPink.pospy=0;
ghostPink.src = "../ghost_image/ghost_pink.svg"
ghostPink.onload = ()=>contextcanvas.drawImage(ghostPink, ghostPink.positionx, ghostPink.positiony );
//está función es la ia del fantasma por el momento falta implementar el calculo de la distancia
ghostPink.ia = ()=>iaFantasmal(setInterval,ghostPink);

//fantasma celeste:
const ghostSky = new Image();
//le digo donde va estar en que sitio de x, en una imagen no puede tener atributos de x o y si fuera creación de figura y no una imagen si
//aquí le digo 
ghostSky.positionx = 320;
ghostSky.positiony = 250;
ghostSky.tamanox = 20;
ghostSky.tamanoy = 20;
ghostSky.pospx=0;
ghostSky.pospy=0;
ghostSky.src = "../ghost_image/ghost_sky.svg"
ghostSky.onload = ()=>contextcanvas.drawImage(ghostSky, ghostSky.positionx, ghostSky.positiony );
//está función es la ia del fantasma por el momento falta implementar el calculo de la distancia
ghostSky.ia = ()=>iaFantasmal(setInterval,ghostSky);


//fantasma Amarillo:
const ghostYellow = new Image();
//le digo donde va estar en que sitio de x, en una imagen no puede tener atributos de x o y si fuera creación de figura y no una imagen si
//aquí le digo 
ghostYellow.positionx = 260;
ghostYellow.positiony = 250;
ghostYellow.tamanox = 20;
ghostYellow.tamanoy = 20;
ghostYellow.pospx=0;
ghostYellow.pospy=0;
ghostYellow.src = "../ghost_image/ghost_Yellow.svg"
ghostYellow.onload = ()=>contextcanvas.drawImage(ghostYellow, ghostYellow.positionx, ghostYellow.positiony );
//está función es la ia del fantasma por el momento falta implementar el calculo de la distancia
ghostYellow.ia = ()=>iaFantasmal(setInterval,ghostYellow);


//función de la inteligencia artificial de los fantasma, fue separada ya que va ver muchos fantasmas para ahorrar lineas de código adicional
function iaFantasmal (callback,ghost) {
    callback(function(){
    
         
   
        // aquí obtengo números aleatorios entre -1 y 1 para que se mueva el fantasma
        ghost.pospx = (Math.random() * 2) - 1; // esto genera un número aleatorio entre -1 y 1
        ghost.pospy = (Math.random() * 2) - 1; // esto genera un número aleatorio entre -1 y 1
    
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
            if (ghost.positionx <laberinto1[i].x + laberinto1[i].width &&
                ghost.positionx + ghost.tamanoy> laberinto1[i].x  &&
                ghost.positiony < laberinto1[i].y + laberinto1[i].height &&
                ghost.tamanoy + ghost.positiony > laberinto1[i].y) {
                // Si hay colisión, mover al jugador de vuelta
                if (ghost.pospx > 0) {
                    ghost.positionx -= velocidadFantasma;
                } else if (ghost.pospx < 0) {
                    ghost.positionx += velocidadFantasma;
                }
                if (ghost.pospy > 0) {
                    ghost.positiony -= velocidadFantasma;
                } else if (ghost.pospy < 0) {
                    ghost.positiony += velocidadFantasma;
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
    },110)
}