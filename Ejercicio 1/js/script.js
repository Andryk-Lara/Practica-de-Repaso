let año = parseInt(prompt('Ingrese un año'));

if (año % 4 == 0) {
    console.log('El año es bisiesto');
} else if (año % 400 == 0){
    console.log('El año es bisiesto');
} else if (año % 100 == 0) {
    console.log('El año no es bisiesto');
} else {
    console.log('El año no es bisiesto');
}