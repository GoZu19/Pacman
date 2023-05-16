
iniciado=false;
//almacenar los intervalos del juego de cada ia
iaYellow =0;
iaSky = 0;
iaRed = 0;
iaPink = 0;
//mostrar puntuación del juego:
function puntuacion () {
    contextcanvas.font = "20px Arial";
    contextcanvas.fillStyle = "#FFFFFF"
    contextcanvas.fillText("Puntuación: "+pacman.puntuacion, 450, 35);//pintamos la puntuación
}
//para mostrar en la pantalla que nivel de dificultad esta
function mostrarDificultad () {
    contextcanvas.font = "20px Arial";
    contextcanvas.fillStyle = "#FFFFFF"
    contextcanvas.fillText("Nivel de dificultad: "+nivelDificultadvar, 150, 35); //pintamos el nivel de dificultad
}
//para mostrar la opción de pausa:
function mostrarOpcionPausa () {
    contextcanvas.font = "20px Arial";
    contextcanvas.fillStyle = "#FFFFFF"
    contextcanvas.fillText("para pausar el juego - presiona esc", 190, 590);
}
function cargarJuego () {
    //cargar el pacman
    pacman.onload();

    //cargar fantastmas:
    //fantasma rojo
    ghostRed.onload();
    iaRed=ghostRed.ia();
    //fantasma rosada:
    ghostPink.onload();
    iaPink=ghostPink.ia();
    //fantasma celeste:
    ghostSky.onload();
    iaSky=ghostSky.ia();
    //fantasma amarillo:
    ghostYellow.onload();
    iaYellow=ghostYellow.ia();

}

//para reiniciar la partida
function reiniciarJuego () {
    musicapacmanstart.currentTime=0; //colocarlo 0 musica de comienzo de juego
    musicapacmanstart.play()//reproducirlo
    
    //reiniciar los valores del pacman:
    pacman.positionx = 290;
    pacman.positiony = 300;
    pacman.puntuacion=0;
    pacman.pillado=false;
    pacman.win=false;
    pacman.src = "pacman_image/Pacman_right.svg";
    //reiniciar los valores de los fantasmas
    //fantasma rojo:
    ghostRed.positionx = 280;
    ghostRed.positiony = 250;
    ghostRed.pospx = 280;
    ghostRed.pospy = 250;
    //fantasma rosada
    ghostPink.positionx = 300;
    ghostPink.positiony = 250;
    ghostPink.pospx = 300;
    ghostPink.pospy = 250;
    //fantasma celeste:
    ghostSky.positionx = 320;
    ghostSky.positiony = 250;
    ghostSky.pospx = 320;
    ghostSky.pospy = 250;
    //fantasma yellow:
    ghostYellow.positionx = 260;
    ghostYellow.positiony = 250;
    ghostYellow.pospx = 260;
    ghostYellow.pospy = 250;
    puntos = crearPuntos();
    //cerrar el Menú del juego:
    menulose = document.getElementById("menulose");
    menulose.style.display = "none";
    
    //vover cargar el juego:
    
    iniciado =false;
    cancelAnimationFrame(idanimacion) //cancelamos por si acaso la animación del juego
    idanimacion = requestAnimationFrame(gameLoop); //volvemos a ejecutar la animación del juego
   //esto lo hago para evitar problemas, con esto he podido solucionar un problema que me encontrado que creo que era  por el orden de ejecución o no se pero el contador segui ejecutandose internamente en el AnimationFrame
   //y cuando volvia a pasar comenzaba en 2 y rapidamente se colocaba a 0 con esto me aseguro si no lo hahecho correctamente que lo haga y si lo hace
    
}
//función para continuar la partida:
function continuar () {
    musicapacmanstart.currentTime=0;//colocar a 0 musica de comienzo de juego
    musicapacmanstart.play()//reproducirlo
    //reiniciar los valores del pacman:
    pacman.positionx = 290;
    pacman.positiony = 300;
    pacman.pillado =false;
    pacman.win=false;
    pacman.src = "pacman_image/Pacman_right.svg";
    //reiniciar los valores de los fantasmas
    //fantasma rojo:
    ghostRed.positionx = 280;
    ghostRed.positiony = 250;
    ghostRed.pospx = 280;
    ghostRed.pospy = 250;
    //fantasma rosada
    ghostPink.positionx = 300;
    ghostPink.positiony = 250;
    ghostPink.pospx = 300;
    ghostPink.pospy = 250;
    //fantasma celeste:
    ghostSky.positionx = 320;
    ghostSky.positiony = 250;
    ghostSky.pospx = 320;
    ghostSky.pospy = 250;
    //fantasma yellow:
    ghostYellow.positionx = 260;
    ghostYellow.positiony = 250;
    ghostYellow.pospx = 260;
    ghostYellow.pospy = 250;
    puntos = crearPuntos();
    //cerrar el Menú del juego:
    menuwin = document.getElementById("menuwin");
    menuwin.style.display = "none";
    
    //vover cargar el juego:
    iniciado =false;
    cancelAnimationFrame(idanimacion)
    idanimacion = requestAnimationFrame(gameLoop);
    
}
function reanudar () {
    //cerrar el Menú de pausa:
    menuwin = document.getElementById("pausa");
    menuwin.style.display = "none";
    
    //vover cargar el juego:
    iniciado =false;
    cancelAnimationFrame(idanimacion)//cancelamos por si acaso la animación del juego
    idanimacion = requestAnimationFrame(gameLoop); //volvemos a ejecutar la animación del juego
    //esto lo hago para evitar problemas, con esto he podido solucionar un problema que me encontrado que creo que era  por el orden de ejecución o no se pero el contador segui ejecutandose internamente en el AnimationFrame
   //y cuando volvia a pasar comenzaba en 2 y rapidamente se colocaba a 0 con esto me aseguro si no lo hahecho correctamente que lo haga y si lo hace
}



// Bucle del juego
function gameLoop() {
    // Limpiar el canvas
    
    contextcanvas.clearRect(0, 0, canvas.width, canvas.height);
    //comprobar si el pacman ha ganado:
    pacmanGana()
    //pintar los puntos
    drawPoints();
    //hacer aparecer el pacma
    pacman.onload();
    //pintar los muros
    drawWalls();
    //cargar el mensaje de opción pausa:
    mostrarOpcionPausa()
    //cargar la puntuación
    puntuacion(); 
    //mostrar dificultad:
    mostrarDificultad();
    //hacer aparecer los fantasmas:
    //fantasma rojo:
    ghostRed.onload();
    //fantasma rosada:
    ghostPink.onload();
    //fantasma celetes:
    ghostSky.onload();
    //fantasma amarillo:
    ghostYellow.onload();
    //comprobar puntuación del jugador
    //está en pacman.js
    colisionPunto();
    //comprobar si el pacman le han pillado está en pacman.js:
    fantasmaPillaPacman();
    

    
    //la cuenta hacia atras el juego me aseguro que no entre nuevamente con el iniciado, además no empieza ejecutar el juego hasta que no llega la cuenta a 0
    if(cuentaAtras >= 0 && !iniciado){
        
        contextcanvas.font = "190px Arial";
        contextcanvas.fillStyle = "purple";
        contextcanvas.textAlign = "center";
        contextcanvas.fillText(cuentaAtras, canvas.width / 2, canvas.height / 2);
        --cuentaAtras
        idtimeout=setTimeout( gameLoop, 1000);//vuelvo ejecutar el bucle para que siga siendo la cuenta hacia atras pero se ejecuta cada 1 segundo
        
    }else{
        if (!iniciado) {
            cuentaAtras=3
            clearTimeout(idtimeout)//limpio el timeout de la cuenta atras
            //esto es para ver si ya está iniciado para no iniciar para no generar mucho setIntervals
            pausaTecla();
            cargarJuego();
            moverPacman();
            iniciado=true;
            gameLoop()
        }
        idanimacion = requestAnimationFrame(gameLoop);//ejecutamos el juego
        
    }
    
}
