let texto =  prompt('Ingrese un texto aleatorio')
let textoMinuscula = texto.toLowerCase();
let caracter = prompt('Ingrese un caracter aleatorio');
let caracterMinuscula
let vecesDelCaracter = 0

for (let i = 0; i < textoMinuscula.length; i++) {
    if(textoMinuscula.charAt(i) === caracter){
        vecesDelCaracter++;
    }
}
console.log(textoMinuscula)
console.log('El caracter',caracterMinuscula,'se encuentra:',vecesDelCaracter,'vez/veces.');