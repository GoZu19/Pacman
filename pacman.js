// con el new Image le doy propiedas a una image pero aún no está en el canvas
const pacman = new Image();
//le digo donde va estar en que sitio de x, en una imagen no puede tener atributos de x o y si fuera creación de figura y no una imagen si
//aquí le digo 
pacman.positionx = 290;
pacman.positiony = 300;
pacman.tamanox = 20;
pacman.tamanoy = 20;
pacman.puntuacion =0;
pacman.pillado = false;//esto es si fue pillado por los fantasmas
pacman.estadoPartida=false;//esto si la partida está terminada
pacman.src = "pacman_image/Pacman_right.svg"
pacman.onload = function() {


    contextcanvas.drawImage(pacman, pacman.positionx, pacman.positiony);

}
//función para saber si fue pillado por los fantasmas
function fantasmaPillaPacman () {
    fantasmas = crearArrayFantasma();
    
    for (let i = 0; i < fantasmas.length; i++) {
        //compruebo la colision de los fantasmas
        if (pacman.positionx < fantasmas[i].pospx + fantasmas[i].tamanox &&
            pacman.positionx + pacman.tamanox > fantasmas[i].pospx &&
            pacman.positiony < fantasmas[i].pospy + fantasmas[i].tamanoy &&
            pacman.positiony + pacman.tamanoy > fantasmas[i].pospy) {
            // si hubo colisión con algún fantasma tendrá que colocar pillado
            pacman.pillado =true;
            //creación del menú:
            //texto del rectangulo:
            puntuacionlose = document.getElementById("puntuacion");
            puntuacionlose.innerHTML=pacman.puntuacion;

            //crear menú sobre el canvas de derrota
            menulose = document.getElementById("menulose");
            menulose.style.display = "block";
            
            

            //limpiar los intervalos para que no sigan consumiento memoria
            clearInterval(iaRed);
            clearInterval(iaPink);
            clearInterval(iaSky);
            clearInterval(iaYellow);
            document.removeEventListener('keydown',teclasPacman);
            cancelAnimationFrame(idanimacion);
            
        } 

    }
    
}
function pacmanGana() {
    
    
    if (puntos.length==0) {
        //creación del menú:
        //texto del rectangulo:
        puntuacionwin = document.getElementById("puntuacion_win");
        puntuacionwin.innerHTML=pacman.puntuacion;

        //crear menú sobre el canvas de derrota
        menuwin = document.getElementById("menuwin");
        menuwin.style.display = "block";
        
        

        //limpiar los intervalos para que no sigan consumiento memoria
        clearInterval(iaRed);
        clearInterval(iaPink);
        clearInterval(iaSky);
        clearInterval(iaYellow);
        document.removeEventListener('keydown',teclasPacman);
        cancelAnimationFrame(idanimacion);
        
    } 
    
    
}


//para ver si colisiono con un punto y además guardar la puntuación con un promise
function colisionPunto () {
    return new Promise((resolve,reject)=>{
        for (let i = 0; i < puntos.length; i++) {
            if (pacman.positionx < puntos[i].x + puntos[i].width &&
                pacman.positionx + pacman.tamanoy > puntos[i].x &&
                pacman.positiony < puntos[i].y + puntos[i].height &&
                pacman.tamanoy + pacman.positiony > puntos[i].y) {
                pacman.puntuacion += 1;
                puntos.splice(i,1)
            }
            
        }
    });
}

function moverPacman () {
    

// Mover al jugador con las teclas de flecha y detectar colisiones con los muros
document.addEventListener("keydown", teclasPacman);
}
function teclasPacman(event) {
    event.stopPropagation();
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
    event.preventDefault();
}