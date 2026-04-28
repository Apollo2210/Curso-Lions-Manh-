

let numeros = [10, 15, 22, 37, 40, 51, 60];
let contadorImpares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
        contadorImpares++; }
    }
    console.log("Quantidade de números ímpares encontrados: " + contadorImpares);