//cargar el pacman
pacman.onload();
//cargar fantastmas:
//fantasma rojo
ghostRed.onload();
ghostRed.ia();
//fantasma rosada:
ghostPink.onload();
ghostPink.ia();
//fantasma celeste:
ghostSky.onload();
ghostSky.ia();
//fantasma amarillo:
ghostYellow.onload();
ghostYellow.ia();



// Bucle del juego
function gameLoop() {
    // Limpiar el canvas
    contextcanvas.clearRect(0, 0, canvas.width, canvas.height);

    //hacer aparecer el pacma
    pacman.onload();

    //hacer aparecer los fantasmas:
    //fantasma rojo:
    ghostRed.onload();
    //fantasma rosada:
    ghostPink.onload();
    //fantasma celetes:
    ghostSky.onload();
    //fantasma amarillo:
    ghostYellow.onload();

    drawWalls()
        // Llamar al bucle del juego otra vez
    requestAnimationFrame(gameLoop);
}
gameLoop();