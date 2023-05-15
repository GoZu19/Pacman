//se fuerza al comienzo que este cargado como none para que este oculto
historial = document.getElementById("historial");
historial.style.display ="none";
//para actualizar datos del localstorage al array
function actualizarDatos () {
    
    arrayjson =localStorage.getItem("puntaje");
    array = JSON.parse(arrayjson);
    if (array==null) {//con esto compruebo si no hay nada para definirle aquí una array
        array=[]
    }
    return array; //devuelvo la array actualizado o como nuevo si no hubiera en local storage
}
// para cargar datos del array al localstorage
function cargarDatos (array) {
    arrayjson = JSON.stringify(array);
    localStorage.setItem("puntaje",arrayjson);//lo guardo como puntaje
}
//está función pinta los datos que hemos pasado nosotros
function pintarDatos (array) {
    divhistorial = document.getElementById("datosHistorial");//el div donde va cargar todos los puntajes
    divhistorial.innerHTML ='';//limpio el historial si por que cualquier cosa antes como historial o texto diciendo quen o hay datos
    //aquí ordeno el resultado de las array de manerea descendente 
    array.sort(function(a,b){
        return b.puntaje-a.puntaje;//utilizo la resta para definir negativo y positivo según el orden
    });

    //en este bucle lo que hago recorro todo el array del localstorage y creo unos div ul li según cada puntaje para asignarles clases de boostrap para que quede super guapos
    for (let index = 0; index < array.length; index++) {
        let div = document.createElement("div"); //creamos todos los elementos que necesitamos para pintar
        div.setAttribute("class","d-flex justify-content-center"); //asignamos las clases de boostrap para hacerlo mas cookie
        let ul = document.createElement("ul");//creamos el elemento ul
        ul.setAttribute("class","list-group list-group-horizontal");//asignamos sus clases que se veran de modo vertical los li
        let li_puntaje = document.createElement("li");
        li_puntaje.setAttribute("class","list-group-item li_puntuacion");
        let li_fecha = document.createElement("li");
        li_fecha.setAttribute("class","list-group-item li_puntuacion");

        //añadir datos:
        li_puntaje.innerHTML=array[index].puntaje; //cargamos el contenido del elemento del array que va tener puntaje y fecha del puntaje
        li_fecha.innerHTML=array[index].fecha;

        //los colocamos en el html
        divhistorial.appendChild(div);//asignamos al div del historial para que vayan cargando
        div.appendChild(ul);
        ul.appendChild(li_puntaje);
        ul.appendChild(li_fecha);
    }
}
//en está función lo que suele hacer es cargar el historial según si hay elementos utilizando promesas por que tiene que ir a buscarlo en el almacenamiento del navegador
function cargarHistorial () {
    return new Promise((resolve,reject)=>{ //generamos la promesa
        array = actualizarDatos();//actualizamos los datos si nuestra array está desactualizada
        if (array!=null && array.length!= 0  ) { // comprobamos si por si acaso no está vacía y miramos que no sea 0 su contenido es decir que no tenga contenido
            pintarDatos(array);//si entramos aquí es por que no está vacía y pintamos según la array  actualizada
        }else{
            reject("No hay datos");// y si no inicializamos como reject que no hay datos para devolverlo
        }
    });
}
//función donde mostrará el historial, haciendolo block y menú principal cerrandolo es decir haciendole un none
function mostrarHistorialCargado () {
    menuPrincipal = document.getElementById("menuPrincipal");
    menuPrincipal.style.display ="none";//ocultamos el menú principal
    historial.style.display ="block";//mostramos el historial
    cargarHistorial().catch((result)=>{//comprobamos si entro aquí si no hay datos
    divhistorial = document.getElementById("datosHistorial");
    divhistorial.innerHTML = result;//le ponemos los datos si es catch
    })   
}
//asignamos listiner del botón del menú donde se muestra el historial
historialbtn = document.getElementById("historialbtn");
historialbtn.addEventListener("click",mostrarHistorialCargado)//pasamos la función que hicimos arriba
/* función de subir datos lo que tenga actualmente el pacman*/
async function subirDatosJugador(){
    array = actualizarDatos(); //actualizamos los datos del localStorage al array
    fechaActual = new Date();//obtenemos la fecha actual para guardar

    // obtener los días para colocarlo en el array
    dia = fechaActual.getDate();
    mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0, por eso sumo 1
    ano = fechaActual.getFullYear();
    horas = fechaActual.getHours();
    minutos = fechaActual.getMinutes();
    if (minutos<10) {//aquí comprobamos si es menor por que nos devuelve sin un 0 adelante 
        minutos = '0'+minutos;//aquí agrego el 0 adelante si menor que 10
    }
    // Formatear la fecha como deseado (en este caso, dd/mm/yyyy a las HH:MM)
    fechaFormateada = dia + '/' + mes + '/' + ano + " a las: "+horas+":"+minutos;

    //creamos el objeto que tendrá que guardar la fecha y la puntuación:
    guardarPuntuacion={
        puntaje:pacman.puntuacion,
        fecha:fechaFormateada
    }
    //guardamos la puntuación
    array.push(guardarPuntuacion);
    //cargamos al localStorage
    cargarDatos(array);
}