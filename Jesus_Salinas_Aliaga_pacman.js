// con el new Image le doy propiedas a una image pero aún no está en el canvas
const pacman = new Image();
//le digo donde va estar en que sitio de x, en una imagen no puede tener atributos de x o y si fuera creación de figura y no una imagen si
//aquí le digo 
// le digo donde va estar ubicado el pacman
pacman.positionx = 290;
pacman.positiony = 300;
//el tamaño del pacman
pacman.tamanox = 20;
pacman.tamanoy = 20;
//aquí guardaremos la puntución del pacman
pacman.puntuacion =0;
pacman.win=false;//aquí podemos saber si ha ganado o perdido
pacman.pillado = false;//esto es si fue pillado por los fantasmas
pacman.estadoPartida=false;//esto si la partida está terminada
pacman.src = "pacman_image/Pacman_right.svg"//cargamos el pacman
pacman.onload = function() {//está va ser su función para cargarlo que realmente es pintandolo con el context del canvas


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
               if (!pacman.pillado) {//comprobamos si ha sido pillado antes si no pues lo cargamos, para evitar bucles
                musicapacmandead.currentTime=0;
                musicapacmandead.play();
                     // si hubo colisión con algún fantasma tendrá que colocar pillado
                pacman.pillado =true;//indicamos es que es true que lo pillaron
                cuentaAtras =3;//incializamos la cuenta atras para de nuevo hacerlo repetir
                //creación del menú:
                //texto del span del menú de derrota:
                puntuacionlose = document.getElementById("puntuacion");
                puntuacionlose.innerHTML=pacman.puntuacion;

                //crear menú sobre el canvas de derrota
                menulose = document.getElementById("menulose");
                menulose.style.display = "block";//mostramos el menú de derrota creado en el html con el boostrap
                
                //limpiamos todo los clearTimeSetout y intervals
                clearTimeout(idtimeout);
                //limpiar los intervalos para que no sigan consumiento memoria
                clearInterval(iaRed);
                clearInterval(iaPink);
                clearInterval(iaSky);
                clearInterval(iaYellow);
                //limpiamos eventos para que no se pueda mover el pacman
                document.removeEventListener("keyup", accionarPausa);
                document.removeEventListener('keydown',teclasPacman);
                
                cancelAnimationFrame(idanimacion);//cancelamos la animación
                subirDatosJugador();//subir datos de la puntución al localstorage
                
               } else {
                return //si no ha sido pillado salimos de la función
               }
            } 

        }
    
}
//está función es si el pacman no le queda puntos sobre el tablero
function pacmanGana() {
    
    
    if (puntos.length==0) {
        //creación del menú:
        //texto del rectangulo donde se va mostrar el menú de ganador:
        puntuacionwin = document.getElementById("puntuacion_win");
        puntuacionwin.innerHTML=pacman.puntuacion;

        //crear menú sobre el canvas de victoria
        
        if (!pacman.win) {//para que no se vuelva un bucle 
            menuwin = document.getElementById("menuwin"); // buscamos el elemento del menú win para mostrarlo
            menuwin.style.display = "block";//mostramos el el menú
            pacman.win=true;//cambiamos el valor por true por el cual las otras partes del código saben que ha ganado si es ncesario pararlo
            musicapacmanwin.currentTime=0;//inicializamos a 0 la musica para reproducirlo
            musicapacmanwin.play();//reproducimos la música
        }
        

        //limpiar los intervalos para que no sigan consumiento memoria
        clearInterval(iaRed);
        clearInterval(iaPink);
        clearInterval(iaSky);
        clearInterval(iaYellow);
        //limpiamos los eventos que hay por que no es necesario que se mueva el pacman y del pausa no tiene sentido 
        document.removeEventListener("keyup", accionarPausa);
        document.removeEventListener('keydown',teclasPacman);
        //cancelamos la animación actual para que se pare tanto el pacman como otros 
        cancelAnimationFrame(idanimacion);
        
    } 
    
    
}


//para ver si colisiono con un punto y además guardar la puntuación con un promise
function colisionPunto () {
    return new Promise((resolve,reject)=>{
        for (let i = 0; i < puntos.length; i++) {//recorremos el array de puntos donde están sus pocesiones
            if (pacman.positionx < puntos[i].x + puntos[i].width &&
                pacman.positionx + pacman.tamanoy > puntos[i].x &&
                pacman.positiony < puntos[i].y + puntos[i].height &&
                pacman.tamanoy + pacman.positiony > puntos[i].y) {//comprobamos si hubo colisión con algún punto algoritmo de colisión de cuadrado
                pacman.puntuacion += 1;//sumamos +1 si hubo colisión
                puntos.splice(i,1)//eliminamos el punto del mapa
            }
            
        }
    });
}
//aquí va tener la función que activa el escuchador
function pausaTecla () {
    document.addEventListener("keyup", accionarPausa);//donde vamos a saber si se ha pulsado esc
}
//aquí va tener la acción para el escuchador
function accionarPausa (event) {
    if (event.keyCode==27) {
         //crear el menú de pausa
         menuwin = document.getElementById("pausa");
         menuwin.style.display = "block";
         clearTimeout(idtimeout); //limpiamos el timeout para el contador
         
 
         //limpiar los intervalos para que no sigan consumiento memoria
         clearInterval(iaRed);
         clearInterval(iaPink);
         clearInterval(iaSky);
         clearInterval(iaYellow);
         //limpiamos los eventos de tecla del pacman
         document.removeEventListener('keydown',teclasPacman);
         //cancelamos la animación
         cancelAnimationFrame(idanimacion);
        event.stopPropagation();//evitamos de propagación de eventos extras que puede suponer sobbre el canvas
    }
    
}

function moverPacman () {
    

// Mover al jugador con las teclas de flecha y detectar colisiones con los muros
document.addEventListener("keydown", teclasPacman);
}
function teclasPacman(event) {//está función se encarga de mover el pacman sumando su ubicación 
    event.stopPropagation(); //por si acaso hay un evento adicional que se utiliza para evitar otros eventos en futuras mejoras
    if (event.keyCode === 37) {//el código 37 significa que es la flecha de la izquierda
        pacman.src = "pacman_image/Pacman_left.svg"//imagen del pacman a la izquierda
        pacman.positionx -= 10;//restamos -10 por que debe avanzar a la izquierda
    } else if (event.keyCode === 38) {//el código 38 significa que es la flecha de arriba
        pacman.src = "pacman_image/Pacman_up.svg"//imagen del pacman hacia arriba
        pacman.positiony -= 10;//restamos -10 por que debe avanzar hacia arriba
    } else if (event.keyCode === 39) {//el código 39 significa que es la flecha de la derecha
        pacman.src = "pacman_image/Pacman_right.svg"//imagen del pacman hacia a la derecha
        pacman.positionx += 10;//sumamos +10 por que debe avanzar a la derecha
    } else if (event.keyCode === 40) {//el código 40 significa que es la flecha de abajo
        pacman.src = "pacman_image/Pacman_down.svg"//imagen del pacman hacia abajo
        pacman.positiony += 10;//sumamos +10 por que debe avanzar hacia abajo
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
            if (pacman.positionx > 590) {
                // aquí es por que ha llegado el limite del mapa entonces lo ponemos de nuevo en el comienzo como efecto de teletransportación 
                if (event.keyCode === 39) {//comrpobamos si sigue presionando la tecla si es así que haga el teltrasporte
                    pacman.positionx = 0;
                }
            }
            if (pacman.positionx < 0) {//comrpobamos si sigue presionando la tecla si es así que haga el teltrasporte
                // aquí es por que ha llegado el limite del mapa entonces lo ponemos de nuevo en al final como efecto de teletransportación
                if (event.keyCode === 37) {
                    pacman.positionx = 580;
                }
            }
        }
    }
    event.preventDefault(); //para evitar que haga scroll con las flechitas mientras juguemos
}