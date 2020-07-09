class Interfaz{
    constructor() {

        //Instanciar la api para tenerla como propiedad
        this.api = new API();

        //Crear los markers con layerGroup;
        this.markers = new L.layerGroup();
        // Iniciar el mapa
        this.mapa = this.inicializarMapa();

   }

   inicializarMapa() {
        // Inicializar y obtener la propiedad del mapa
        const map = L.map('mapa').setView([19.390519, -99.3739778], 4);
        const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + enlaceMapa + ' Contributors',
            maxZoom: 18,
            }).addTo(map);
        return map;

   }

    mostrarEstablecimientos(){
        this.api.obtenerDatosAPI()
            .then((datos) =>{
                const resultadoDirecciones = datos.respuestaJSON.results;
                //Ejecutar la funcion para mostrar los pines
                this.mostrarPines(resultadoDirecciones);
            })
    }
 
    mostrarPines(datos){
        //Limpiar los markers (Siempre se limpian antes de mandarlos a llamar)
        this.markers.clearLayers();
        
        console.log(datos);
        //Recorrer la respuesta extrayendo solo los valores que se necesitan
        datos.forEach((datos)=>{
            const {latitude, longitude, calle, regular, premium} = datos;

            //Convertir los datos de string a float
            const latitud = parseFloat(latitude);
            const longitud = parseFloat(longitude);

            //Agregar un POPUP
            const contenidopopUP = L.popup()
                                        .setContent(`
                                        <p>La direccion es: ${calle}</p>
                                        <p><b>Regular : $ ${regular}</b></p>
                                        <p><b>Regular : $ ${premium}</b></p>
                                        `);

            //Agregar el PIN
            const marker = new L.marker([latitud,longitud]).bindPopup(contenidopopUP);

            //Lo agrega al grupo de layers
            this.markers.addLayer(marker);
        });

        //Muestra los markers al mapa
        this.markers.addTo(this.mapa);
        
    }

    obtenerSugerencias(busquedaInput){
        this.api.obtenerDatosAPI()
            .then((datos) => {
                //obtiene los resultados
               const busqueda = datos.respuestaJSON.results;

               //Enviar el JSON y la busqueda para el filtrado
               this.filtrarBusqueda(busqueda,busquedaInput);
            })
    }

    //Filtrar las sugerencias
    filtrarBusqueda(resultados, busqueda){

    //Filtrar con .filter
    let resultadoFiltrado = resultados.filter((resultado) => resultado.calle.indexOf(busqueda) !== -1);
    console.log(resultadoFiltrado);
    
    //mostrar los pines
    this.mostrarPines(resultadoFiltrado)
    }
}