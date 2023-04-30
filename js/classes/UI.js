import { relleno, resultado } from "../selectores.js";
import { ciudad } from "../selectores.js";

export default class UI{

    mostrarClima(temperatura, min, max, ciudad){
        
        const divClima = document.createElement('DIV');
        divClima.classList.add('text-center');
        relleno.remove();

        divClima.innerHTML = `
            <p class="text-2xl text-white font-bold">Ciudad: ${ciudad}</p>
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

    mostrarSpinner(){
        this.limpiarHTML()
        const spinner = document.createElement('div');
        spinner.innerHTML = `
            <div class="sk-fading-circle">
                <div class="sk-circle1 sk-circle"></div>
                <div class="sk-circle2 sk-circle"></div>
                <div class="sk-circle3 sk-circle"></div>
                <div class="sk-circle4 sk-circle"></div>
                <div class="sk-circle5 sk-circle"></div>
                <div class="sk-circle6 sk-circle"></div>
                <div class="sk-circle7 sk-circle"></div>
                <div class="sk-circle8 sk-circle"></div>
                <div class="sk-circle9 sk-circle"></div>
                <div class="sk-circle10 sk-circle"></div>
                <div class="sk-circle11 sk-circle"></div>
                <div class="sk-circle12 sk-circle"></div>
            </div>
        `
        resultado.appendChild(spinner);

    }

    limpiarHTML(){
        while(resultado.firstChild){
            resultado.removeChild(resultado.firstChild);
        }
    }

}