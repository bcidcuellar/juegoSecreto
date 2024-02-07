let numSecreto = 0; //  generar num Aleatorio
let numIntentos = 0;    //  contador para num Intentos
let listaNumAleatorios = [];    // no repetir numeros
let numMaximo = 3;

// funcion para asiganr texto a las etiquetas
function asignarTextoElemento(etiqueta, texto) {
    let elementoHTML = document.querySelector(etiqueta);
    elementoHTML.innerHTML = texto;
    return;
}

// funcion para verificar intentos
function verificarIntento() {
    
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numSecreto);
    console.log(numeroUsuario);
    console.log(numeroUsuario === numSecreto);
    if (numeroUsuario === numSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${numIntentos} ${(numIntentos === 1) ? 'intento' : 'intentos'}! Felicidades!!!`);
        document.getElementById('botonReiniciar').removeAttribute('disabled');

    } else {
        //  usuario no acierta el numero
        if (numeroUsuario > numSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor.');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor.');
        }

        numIntentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

// generación numero aleatorio
function generarNumAleatorio() {
    let numGenerado = Math.floor(Math.random() * numMaximo) + 1;
    // Si numero generado está inlcuido en la lista agregar otro.

    //  Si ya se generaron todos los números dentro del rango:
    if (listaNumAleatorios.length == numMaximo) {
        asignarTextoElemento('p', `Ya se generaron todos los números posibles. Fin del Juego!`);
    } else {
        if (listaNumAleatorios.includes(numGenerado) == true) {
            return generarNumAleatorio();
        } else {
            listaNumAleatorios.push(numGenerado);
            return numGenerado;
    
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego Número Secreto!');    // asignacion a H1
    asignarTextoElemento('p', `Selecciona un número entre el 1 y el ${numMaximo}: `); //  asigancion a p
    numSecreto = generarNumAleatorio();
    console.log(numSecreto);
    intentos = 1;

}

function reiniciarJuego() {
    //  Hacer un reset
    limpiarCaja();

    /*  Indicar mensaje intervalo de número y el título
        generar el num secreto
        Inicializar el número de Intentos
    */
    condicionesIniciales(); 

    //  Deshanilitar el botón nuevo juego
    document.querySelector('#botonReiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();
