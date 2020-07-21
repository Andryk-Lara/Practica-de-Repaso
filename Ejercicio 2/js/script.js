let numero = parseFloat(prompt('Digite un numero'));
let numerosAsumar = [];
let sumatoria = 0
for(let i = 1; i <= numero; i++) {
    numerosAsumar.push(i);
}
for (let j = 0; j < numerosAsumar.length; j++) {
    sumatoria += numerosAsumar[j]; 
}
console.log(sumatoria);

