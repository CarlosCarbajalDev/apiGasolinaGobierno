const ui = new Interfaz();

document.addEventListener("DOMContentLoaded", ()=>{
    ui.mostrarEstablecimientos();
});

//Habilitar busqueda de establecimientos
const buscador = document.querySelector("#buscar input");

buscador.addEventListener("input",(e) =>{
    e.preventDefault();
    if(buscador.value.length>3){
        console.log(buscador.value);
        ui.obtenerSugerencias(buscador.value);
    } else{
        ui.mostrarEstablecimientos();
    }
});