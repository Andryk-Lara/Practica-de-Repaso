const numeroAdivinar = 23;
let numeroIngresado = parseInt(prompt('Trata de adivinar el numero, ¡está entre el 1 y el 100!'));

if (numeroIngresado > 100){
    console.error('El número que ingresaste no está entre 1 y 100');
} else if (numeroIngresado < 1){
    console.error('El número que ingresaste no está entre 1 y 100');
} else {
    while (numeroIngresado != numeroAdivinar){
        if ( numeroIngresado < numeroAdivinar){
            console.log('El numero es mayor');
            numeroIngresado = prompt('Trata de adivinar el numero, ¡está entre el 1 y el 100!');
        }else if (numeroIngresado > numeroAdivinar) {
            console.log('El numero es menor');
            numeroIngresado = prompt('Trata de adivinar el numero, ¡está entre el 1 y el 100!');
        }
    }
    console.log('¡ACERTASTE!');
    
}        
