historial = document.getElementById("historial");
historial.style.display ="none";
//para actualizar datos del localstorage al array
function actualizarDatos () {
    arrayjson =localStorage.getItem("puntaje");
    array = JSON.parse(arrayjson);
    return array; 
}
// para cargar datos del array al localstorage
function cargarDatos (array) {
    arrayjson = JSON.stringify(array);
    localStorage.setItem("puntaje",arrayjson);
}
function pintarDatos (array) {
    divhistorial = document.getElementById("datosHistorial");
    divhistorial.innerHTML ="";
    array.sort(function(a,b){
        return a.puntaje - b.puntaje;
    });
    for (let index = 0; index < array.length; index++) {
        let ul = document.createElement("ul");
        ul.setAttribute("class","list-group list-group-horizontal");
        let li_puntaje = document.createElement(li);
        li_puntaje.setAttribute("class","list-group-item");
        let li_fecha = document.createElement(li);
        li_fecha.setAttribute("class","list-group-item");

        //añadir datos:
        li_puntaje.innerHTML=array[i].puntaje;
        li_fecha.innerHTML=array[i].fecha;

        divhistorial.appendChild(ul);
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