//aquí es para castear según las opciones del menú y botones que vamos a utilizar
irmenuwin = document.getElementById("irMenu_win");
irmenulose = document.getElementById("irMenu_lose");
irmenuhistorial = document.getElementById("regresarMenuM_historial");
irmenuinstrucciones = document.getElementById("regresarMenuM_instruccion");
btn_instrucciones = document.getElementById("btn_instrucciones");
function iniciarJuego () {//aquí iniciamos el juego 
    menuPrincipal = document.getElementById("menuPrincipal");//casteamos el menú principal para ocultarlo y mostramos el canvas y ejecutamos la función de reiniciarJuego 
    menuPrincipal.style.display ="none";//ocultamos el menú principal
    canvas.style.display = "block";//mostramos el canvas
    reiniciarJuego();//utilizo está función por que basicamente limpia todo y reinicializa bien si ya existe, lo quería cambiar de nombre pero mi ide no permitia refactor sobre todos los js creados
    
}
//aquí está función está encargada según la dificultad que sea escogida por el usuasrio  pero hay que pasarle el número recibido se implementa en el html
function seleccionDificultad (num) {
    switch (num) {
        //este es el nivel facil
        case 1:
            velocidadFantasma = 5;//velocidad del fantasma que se mueve por cada movimiento según el intervalo
            intervaltime =75;//tiempo del intervalo para el movimiento del fantasma
            nivelDificultadvar="Fácil";//text del dificultad para mostrar en el canvas mientras estamos jugando
            break;
        //nivel normal:
        case 2:
            velocidadFantasma = 10;
            intervaltime =75;
            nivelDificultadvar="Normal";
        break;
        //nivel dificil
        case 3:
            velocidadFantasma = 10;//se mantiene lo mismo 
            intervaltime =50;//el intervalo es un poco más rápido de por si ya es mucho ahora este nivel seguro te encantará
            nivelDificultadvar="Fumas Porros";// el nombre del nivel viene por que al principio me salio un poco loco los fantasmas entonces me dijeron que parecia que se fumaron unos porros y ahí lo saque la idea
        break;

        default:
            velocidadFantasma = 10; //esto es por si acaso si llega escoger otra cosa que no sea ya sea por una nueva implementación i+d
            break;
    }
}
//casteos de eventos de click en los menús
irmenuwin.addEventListener('click',cargarMenuMain_win);
irmenulose.addEventListener('click',cargarMenuMain_lose)
irmenuhistorial.addEventListener('click',cargarMenuM_historial)
irmenuinstrucciones.addEventListener('click',cargarMenuM_instrucciones);
btn_instrucciones.addEventListener('click',mostrarInstrucciones)
//función que se encarga  mostrar el menú principal y desaparecer el menú lose y desaparecer el canvas para que solo se muestre el menú principal
function cargarMenuMain_lose (event) {
    menuPrincipal = document.getElementById("menuPrincipal");
    menuPrincipal.style.display ="block";
    canvas.style.display = "none";
    menulose = document.getElementById("menulose")
    menulose.style.display = "none";
    event.stopPropagation()
}
//función que se encarga  mostrar el menú principal y desaparecer el menú win y desaparecer el canvas para que solo se muestre el menú principal
function cargarMenuMain_win (event) {
    menuPrincipal = document.getElementById("menuPrincipal");
    menuPrincipal.style.display ="block";
    canvas.style.display = "none";
    menuwin = document.getElementById("menuwin")
    menuwin.style.display = "none";
    subirDatosJugador();
    event.stopPropagation()
}
//función que se encarga  mostrar el menú principal y desaparecer el historial y desaparecer el canvas para que solo se muestre el menú principal
function cargarMenuM_historial (event) {
    menuPrincipal = document.getElementById("menuPrincipal");
    menuPrincipal.style.display ="block";
    historial = document.getElementById("historial");
    historial.style.display = "none";
    event.stopPropagation()
}
//función que se encarga  mostrar el menú principal y desaparecer las instrucciones y desaparecer el canvas para que solo se muestre el menú principal
function cargarMenuM_instrucciones (event) {
    menuPrincipal = document.getElementById("menuPrincipal");
    menuPrincipal.style.display ="block";
    instrucciones = document.getElementById("instrucciones");
    instrucciones.style.display = "none";
    event.stopPropagation()
}
//función que se encarga  mostrar las instrucciones y desaparecer el menú principal 
function mostrarInstrucciones (event) {
    menuPrincipal = document.getElementById("menuPrincipal");
    menuPrincipal.style.display ="none";
    instrucciones = document.getElementById("instrucciones");
    instrucciones.style.display = "block";
    event.stopPropagation()
}
//función para cargar el menú principal estando desde el menú de pausa,haciendo desaparecer casí todo y solo cargar el menú princial y quitar algunos eventos y quitando el toast de boostrap
function cargarMenuM_pausa () {
    //ocultamos todo y mostramos el menú principal
    menuPrincipal = document.getElementById("menuPrincipal");
    menuPrincipal.style.display ="block";
    canvas.style.display = "none";
    menuwin = document.getElementById("pausa");
    menuwin.style.display = "none";
    subirDatosJugador();//cargamos datos del jugador auto guardado
    salirToast.classList.remove("show");//quitamos la clase show que es el que permite accionar el toast
    document.removeEventListener("keyup", accionarPausa);//quitamos el evento
}
/* opcion toast  */
function toastSalir () {//está función es para mostrar el toast
    salirToast = document.getElementById("salirToast");//obtenemos el toast
    salirToast.classList.add("show");//añadimos su clase show que es una clase de boostrap para hacer visible
}