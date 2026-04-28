let texto = "JavaScript é Incrível!";
let vogais = "aeiouáéíóúâêîôûãõ"; // Incluímos acentos por segurança
let contadorConsoantes = 0;
let textoMinusculo = texto.toLowerCase();

for (let i = 0; i < textoMinusculo.length; i++) {
    let caractere = textoMinusculo[i];
    if (caractere >= 'a' && caractere <= 'z') {
        if (!vogais.includes(caractere)) {
            contadorConsoantes++;
        }
    }
}
console.log("Total de consoantes: " + contadorConsoantes);