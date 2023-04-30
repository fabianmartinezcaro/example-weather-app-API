import { formulario, pais, ciudad } from "./selectores.js";
import UI from "./classes/UI.js";

const ui = new UI();

export function buscarClima(evento){
    evento.preventDefault();

    if(ciudad.value === '' || pais.value === ''){
        ui.mostrarAlerta(formulario, 'Los campos son obligatorios...', 'error');
        return;
    }

    consultarAPI(ciudad.value, pais.value);
    

}

function consultarAPI(ciudad, pais){

    const appID = '8ca42e97086a1c25fc0d3608c0ad65b9';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

    ui.mostrarSpinner();

    fetch(URL)
        .then(resultado => {
            return resultado.json();
        })
        .then(data => {

            ui.limpiarHTML();

            if(data.cod === '404'){
                ui.mostrarAlerta(formulario, 'Ciudad no encontrada, intente nuevamente...', 'error')
                return;
            }

            const nombre_ciudad = data.name;
            const temperatura = parseInt(data.main.temp - 273.15);
            const temp_minima = parseInt(data.main.temp_min - 273.15);
            const temp_maxima = parseInt(data.main.temp_max - 273.15);

            ui.mostrarClima(temperatura, temp_minima, temp_maxima, nombre_ciudad);

        })
        .catch(error => {
            ui.mostrarAlerta(formulario, 'No se pudo hacer la conexión a la API', error, 'error')
        })

}