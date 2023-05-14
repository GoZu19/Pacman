//puntuación del juego:
function puntuacion () {
    contextcanvas.font = "20px Arial";
    contextcanvas.fillStyle = "#FFFFFF"
    contextcanvas.fillText("Puntuación: "+pacman.puntuacion, 400, 35);
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
cargarJuego();

moverPacman();

// Bucle del juego
function gameLoop() {
    // Limpiar el canvas
    contextcanvas.clearRect(0, 0, canvas.width, canvas.height);
    
    //pintar los puntos
    drawPoints();
    //hacer aparecer el pacma
    pacman.onload();
    //pintar los muros
    drawWalls();
        // Llamar al bucle del juego otra vez
    
     
     //cargar la puntuación
     puntuacion(); 
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
   
    var idanimacion = requestAnimationFrame(gameLoop);
}
gameLoop();