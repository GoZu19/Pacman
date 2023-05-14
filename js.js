
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
    contextcanvas.fillText("Puntuación: "+pacman.puntuacion, 450, 35);
}
//para mostrar en la pantalla que nivel de dificultad esta
function mostrarDificultad () {
    contextcanvas.font = "20px Arial";
    contextcanvas.fillStyle = "#FFFFFF"
    contextcanvas.fillText("Nivel de dificultad: "+nivelDificultadvar, 150, 35);
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
    //reiniciar los valores del pacman:
    pacman.positionx = 290;
    pacman.positiony = 300;
    pacman.puntuacion=0;
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
    cuentaAtras =3;
    gameLoop();
   
    
}
//función para continuar la partida:
function continuar () {
    //reiniciar los valores del pacman:
    pacman.positionx = 290;
    pacman.positiony = 300;
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
    cuentaAtras =3
    gameLoop();
    
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
        // Llamar al bucle del juego otra vez
    
    
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
    

    
    //la cuenta hacia atras el juego
    if(cuentaAtras >= 0){
        
        contextcanvas.font = "190px Arial";
        contextcanvas.fillStyle = "purple";
        contextcanvas.textAlign = "center";
        contextcanvas.fillText(cuentaAtras, canvas.width / 2, canvas.height / 2);
        cuentaAtras-=1
        setTimeout( gameLoop, 1000);
        
    }else{
        if (!iniciado) {
        
            //esto es para ver si ya está iniciado para no iniciar para no generar mucho setIntervals
            cargarJuego();
            moverPacman();
            iniciado=true;
            
        }
        
        idanimacion = requestAnimationFrame(gameLoop);
    }
}
