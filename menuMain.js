//aquí es para castear según las opciones del menú
irmenuwin = document.getElementById("irMenu_win");
irmenulose = document.getElementById("irMenu_lose");
irmenuhistorial = document.getElementById("regresarMenuM_historial");
irmenuinstrucciones = document.getElementById("regresarMenuM_instruccion");
btn_instrucciones = document.getElementById("btn_instrucciones");
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
            intervaltime =75;
            nivelDificultadvar="Fácil";
            break;
        //nivel normal:
        case 2:
            velocidadFantasma = 10;
            intervaltime =75;
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
irmenuhistorial.addEventListener('click',cargarMenuM_historial)
irmenuinstrucciones.addEventListener('click',cargarMenuM_instrucciones);
btn_instrucciones.addEventListener('click',mostrarInstrucciones)
function cargarMenuMain (event) {
    menuPrincipal = document.getElementById("menuPrincipal");
    menuPrincipal.style.display ="block";
    canvas.style.display = "none";
    event.stopPropagation()
}
function cargarMenuM_historial (event) {
    menuPrincipal = document.getElementById("menuPrincipal");
    menuPrincipal.style.display ="block";
    historial = document.getElementById("historial");
    historial.style.display = "none";
    event.stopPropagation()
}
function cargarMenuM_instrucciones (event) {
    menuPrincipal = document.getElementById("menuPrincipal");
    menuPrincipal.style.display ="block";
    instrucciones = document.getElementById("instrucciones");
    instrucciones.style.display = "none";
    event.stopPropagation()
}
function mostrarInstrucciones (event) {
    menuPrincipal = document.getElementById("menuPrincipal");
    menuPrincipal.style.display ="none";
    instrucciones = document.getElementById("instrucciones");
    instrucciones.style.display = "block";
    event.stopPropagation()
}
function cargarMenuM_pausa () {
    menuPrincipal = document.getElementById("menuPrincipal");
    menuPrincipal.style.display ="block";
    canvas.style.display = "none";
    menuwin = document.getElementById("pausa");
    menuwin.style.display = "none";
    subirDatosJugador();
    salirToast.classList.remove("show");
    document.removeEventListener("keyup", accionarPausa);
}
/* opcion toast  */
function toastSalir () {
    salirToast = document.getElementById("salirToast");
    salirToast.classList.add("show");
}