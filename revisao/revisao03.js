let numeros = [25, 8, 42, 3, 17, 50];
let menorValor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menorValor) {
        menorValor = numeros[i]; }
    }
    console.log("O menor valor da lista é: " + menorValor);