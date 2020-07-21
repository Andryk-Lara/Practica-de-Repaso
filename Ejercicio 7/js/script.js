let texto = prompt('Ingrese un texto para unirlo');
let textos = texto.split(' ');
let textoUnido = '';
for (let i = 0; i < textos.length; i++) {
    textoUnido += textos[i]; 
}
console.log(textoUnido);
