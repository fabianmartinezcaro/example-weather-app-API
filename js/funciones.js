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

    fetch(URL)
        .then(resultado => {
            console.log(resultado)
            return resultado.json();
        })
        .then(data => {

            if(data.cod === '404'){
                ui.mostrarAlerta(formulario, 'Ciudad no encontrada, intente nuevamente...', 'error')
                return;
            }

            const temperatura = parseFloat(data.main.temp - 273.15).toFixed(0);
            const temp_minima = parseFloat(data.main.temp_min - 273.15).toFixed(0);
            const temp_maxima = parseFloat(data.main.temp_max - 273.15).toFixed(0);
            console.log('Formateadas: ',temperatura, temp_minima, temp_maxima);
            console.log('original: ',data.main.temp, data.main.temp_min, data.main.temp_max);

            ui.mostrarClima(temperatura, temp_minima, temp_maxima);

        })
        .catch(error => {
            ui.mostrarAlerta(formulario, 'No se pudo hacer la conexión a la API', error, 'error')
        })

}