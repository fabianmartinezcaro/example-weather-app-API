import { formulario } from "../selectores.js"
import { validarFormulario } from "../funciones.js";

export default class App{
    constructor() {
        this.initApp();
    }

    initApp(){

        document.addEventListener('DOMContentLoaded', () => {
            formulario.addEventListener('submit', validarFormulario);
        })

    }
}