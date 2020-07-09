class API {
    async obtenerDatosAPI(){
        //Para obtner todos los datos de las distintas paginas de la api
        const totalResultados = 200;
        
        const urlApi = `https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${totalResultados}`;
        const datos = await fetch(urlApi);

        const respuestaJSON = await datos.json();

        return {respuestaJSON};
    }
}