// con el new Image le doy propiedas a una image pero aún no está en el canvas
const pacman = new Image();
//le digo donde va estar en que sitio de x, en una imagen no puede tener atributos de x o y si fuera creación de figura y no una imagen si
//aquí le digo 
pacman.positionx = 300;
pacman.positiony = 300;
pacman.tamanox = 20;
pacman.tamanoy = 20.5;
pacman.src = "pacman_image/Pacman_right.svg"
pacman.onload = function() {
    
    
    contextcanvas.drawImage(pacman, pacman.positionx, pacman.positiony );

}
