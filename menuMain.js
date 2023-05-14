//aquí es para castear según las opciones del menú
irmenuwin = document.getElementById("irMenu_win");
irmenulose = document.getElementById("irMenu_lose");

function iniciarJuego () {
    menuPrincipal = document.getElementById("menuPrincipal");
    menuPrincipal.style.display ="none";
    canvas.style.display = "block";
    reiniciarJuego();
    
}
function seleccionDificultad (num) {
    switch (num) {
        //este es el nivel facil
        case 1:
            velocidadFantasma = 5;
            nivelDificultadvar="Fácil";
            break;
        //nivel normal:
        case 2:
            velocidadFantasma = 10;
            nivelDificultadvar="Normal";
        break;
        //nivel dificil
        case 3:
            velocidadFantasma = 10;
            intervaltime =50;
            nivelDificultadvar="Fumas Porros";
        break;

        default:
            velocidadFantasma = 10;
            break;
    }
}
irmenuwin.addEventListener('click',cargarMenuMain);
irmenulose.addEventListener('click',cargarMenuMain)

function cargarMenuMain (event) {
    menuPrincipal = document.getElementById("menuPrincipal");
    menuPrincipal.style.display ="block";
    canvas.style.display = "none";
    event.stopPropagation()
}