let lineaTexto = prompt('Digite una linea de texto');
let cadenaInvertida = "";


for(let i = lineaTexto.length - 1; i >= 0; i--){
  //Voy añadiendo letras del final hacia adelante
    cadenaInvertida += lineaTexto[i];
    console.log(cadenaInvertida);
}
console.log(cadenaInvertida);