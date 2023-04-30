import { relleno, resultado } from "../selectores.js";
import { pais, ciudad } from "../selectores.js";

export default class UI{

    mostrarClima(temperatura, min, max){
        
        this.limpiarHTML();
        const divClima = document.createElement('DIV');
        divClima.classList.add('text-center');
        relleno.remove();

        divClima.innerHTML = `
            <p class="text-2xl text-white font-bold">${ciudad.value}</p>
            <p class="text-4xl text-white font-bold">${temperatura}°C</p>
            <p class="font-light text-white text-lg">Temperatura mínima: ${min}°C</p>
            <p class="font-light text-white text-lg">Temperatura máxima: ${max}°C</p>
        `;
        
        resultado.appendChild(divClima);

    }

    mostrarAlerta(contenedor, mensaje, tipo){

        const alerta = document.querySelector('.alerta');

        if(!alerta){
            const mensajeAlerta = document.createElement('P');
            let condicionCumplida = false;

            if(tipo === 'error'){
                mensajeAlerta.classList.add('alerta', 'bg-red-100', 'py-2', 'px-2', 'my-4', 'text-red-700', 'text-center');
                mensajeAlerta.textContent = mensaje;
                condicionCumplida = true;

            }

            contenedor.appendChild(mensajeAlerta);

            setTimeout(() => {
                mensajeAlerta.remove();
            }, 3000);
        }

    }

    limpiarHTML(){
        while(resultado.firstChild){
            resultado.removeChild(resultado.firstChild);
        }
    }

}