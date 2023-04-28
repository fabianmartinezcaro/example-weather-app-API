export default class UI{

    mostrarAlerta(contenedor, mensaje, tipo){

        const mensajeAlerta = document.createElement('P');
        let condicionCumplida = false;

        if(tipo === 'error'){
            mensajeAlerta.classList.add('bg-red-100', 'py-2', 'px-2', 'my-4', 'text-red-700', 'text-center');
            mensajeAlerta.textContent = mensaje;
            condicionCumplida = true;

        }else{
            mensajeAlerta.classList.add('bg-green-100', 'py-2', 'px-2', 'my-4', 'text-green-700', 'text-center');
            mensajeAlerta.textContent = mensaje;
            condicionCumplida = true;
        }

        contenedor.appendChild(mensajeAlerta);

        setTimeout(() => {
            mensajeAlerta.remove();
        }, 3000);

    }

}