import { formulario } from "../selectores.js"
import { buscarClima } from "../funciones.js";

export default class App{

    constructor() {
        this.initApp();
    }

    initApp(){

        document.addEventListener('DOMContentLoaded', () => {
            formulario.addEventListener('submit', buscarClima);
        })

    }
}