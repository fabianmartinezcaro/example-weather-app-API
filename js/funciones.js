import { formulario, pais, ciudad } from "./selectores.js";
import UI from "./classes/UI.js";

const ui = new UI();

export function validarFormulario(evento){
    evento.preventDefault();

    if(ciudad === '' || pais.selectedIndex === 0){
        ui.mostrarAlerta(formulario, 'Los campos son obligatorios...', 'error');
        return;
    }

    ui.mostrarAlerta(formulario, 'Buscando...', 'correcto')

}