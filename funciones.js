document.addEventListener('DOMContentLoaded', () => {
    const res = document.getElementById('resultado');
    let botonActual = ''; //hace referencia al primer boton que oprimiremos
    let botonAnterior = ''; //hace referencia al segundo boton que oprimiremos
    let operacion = '';

    // estas son las funciones flecha para las operaciones
    const sumar = () => {
        operacion = '+';//asigna la operacion a mi variable operacion dependiendo que de clic
        botonAnterior = botonActual;// se actualiza para que no se repita el numero
        botonActual = '';
    };

    const restar = () => {
        operacion = '-';
        botonAnterior = botonActual;
        botonActual = '';
    };

    const multiplicar = () => {
        operacion = 'x';
        botonAnterior = botonActual;
        botonActual = '';
    };

    const dividir = () => {
        operacion = '/';
        botonAnterior = botonActual;
        botonActual = '';
    };

    // funcion flecha para la operacion
    const calcular = () => {
        let resultado = 0;
        const numeroActual = parseFloat(botonActual);
        const numeroAnterior = parseFloat(botonAnterior);

        switch (operacion) {
            case '+':
                resultado = numeroAnterior + numeroActual;
                break;
            case '-':
                resultado = numeroAnterior - numeroActual;
                break;
            case 'x':
                resultado = numeroAnterior * numeroActual;
                break;
            case '/':
                resultado = numeroAnterior / numeroActual;
                break;
            default:
                resultado = numeroActual;
        }

        botonActual = resultado.toString();
        botonAnterior = '';
        operacion = '';
        actualizarResultado();
    };

    //funcion flecha para actualizar mi resultado
    const actualizarResultado = () => {
        res.textContent = botonActual;//pone el resultado en mi contenedor de respuesta
    };

    //eventlistener para determinar que operacion se dio clic 
    document.getElementById('sum').addEventListener('click', sumar);
    document.getElementById('rest').addEventListener('click', restar);
    document.getElementById('multi').addEventListener('click', multiplicar);
    document.getElementById('div').addEventListener('click', dividir);

    document.getElementById('igual').addEventListener('click', calcular);

    //eventlistener para borrar 
    document.getElementById('Delete').addEventListener('click', () => {
        botonActual = '';
        botonAnterior = '';
        operacion = '';
        actualizarResultado();
    });

    //funcion para extraer los numeros de los botones que escogio el usuario
    const numeros = document.querySelectorAll('.numero');
    numeros.forEach((numero) => {
        numero.addEventListener('click', () => {
            botonActual += numero.value;
            actualizarResultado();
        });
    });
});






//usar funciones flecha con event listener
