let num = parseFloat(prompt('Ingrese un numero'));

if (num <= 1){
    console.log('El numero no es primo');
} else if (num % 2 == 0) {
    if (num == 2){
        console.log('El numero es primo');
    }else{
        console.log('El numero no es primo');
    }    
} else if (num % 3 == 0) {
    if (num == 3){
        console.log('El numero es primo');
    }else{
        console.log('El numero no es primo');
    }    
} else if (num % 5 == 0) {
    if (num == 5){
        console.log('El numero es primo');
    }else{
        console.log('El numero no es primo');
    }    
} else if (num % 7 == 0) {
    if (num == 7){
        console.log('El numero es primo');
    }else{
        console.log('El numero no es primo');
    }    
} else {
    console.log('El numero es primo');
}








