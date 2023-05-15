historial = document.getElementById("historial");
historial.style.display ="none";
//para actualizar datos del localstorage al array
function actualizarDatos () {
    
    arrayjson =localStorage.getItem("puntaje");
    array = JSON.parse(arrayjson);
    if (array==null) {
        array=[]
    }
    return array; 
}
// para cargar datos del array al localstorage
function cargarDatos (array) {
    arrayjson = JSON.stringify(array);
    localStorage.setItem("puntaje",arrayjson);
}
//está función pinta los datos
function pintarDatos (array) {
    divhistorial = document.getElementById("datosHistorial");
    divhistorial.innerHTML ='';
    array.sort(function(a,b){
        return b.puntaje-a.puntaje;
    });
    for (let index = 0; index < array.length; index++) {
        let div = document.createElement("div"); //creamos todos los elementos que necesitamos para pintar
        div.setAttribute("class","d-flex justify-content-center"); //asignamos las clases de boostrap para hacerlo mas cookie
        let ul = document.createElement("ul");
        ul.setAttribute("class","list-group list-group-horizontal");
        let li_puntaje = document.createElement("li");
        li_puntaje.setAttribute("class","list-group-item li_puntuacion");
        let li_fecha = document.createElement("li");
        li_fecha.setAttribute("class","list-group-item li_puntuacion");

        //añadir datos:
        li_puntaje.innerHTML=array[index].puntaje;
        li_fecha.innerHTML=array[index].fecha;

        //los colocamos en el html
        divhistorial.appendChild(div);
        div.appendChild(ul);
        ul.appendChild(li_puntaje);
        ul.appendChild(li_fecha);
    }
}

function cargarHistorial () {
    return new Promise((resolve,reject)=>{
        array = actualizarDatos();
        if (array!=null && array.length!= 0  ) {
            pintarDatos(array);
        }else{
            reject("No hay datos");
        }
    });
}
function mostrarHistorialCargado () {
    menuPrincipal = document.getElementById("menuPrincipal");
    menuPrincipal.style.display ="none";
    historial.style.display ="block";
    cargarHistorial().catch((result)=>{
    divhistorial = document.getElementById("datosHistorial");
    divhistorial.innerHTML = result;
    })   
}
historialbtn = document.getElementById("historialbtn");
historialbtn.addEventListener("click",mostrarHistorialCargado)
/* función de subir datos lo que tenga actualmente el pacman ya que el usuario ha abandonado*/
function subirDatosJugador(){
    array = actualizarDatos();
    fechaActual = new Date();

    // obtener los días para colocarlo en el array
    dia = fechaActual.getDate();
    mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0, por eso sumo 1
    ano = fechaActual.getFullYear();
    horas = fechaActual.getHours();
    minutos = fechaActual.getMinutes();
    if (minutos<10) {
        minutos = '0'+minutos;
    }
    // Formatear la fecha como deseado (en este caso, dd/mm/yyyy)
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