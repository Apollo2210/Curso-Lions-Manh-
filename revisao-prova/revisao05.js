let frase = "Programar é muito legal";
// 2. Criamos uma variável vazia para guardar o resultado final
let fraseSemEspacos = "";

// 3. Percorremos cada caractere da frase original
for (let i = 0; i < frase.length; i++) {
    
    // 4. Verificamos se o caractere atual NÃO é um espaço em branco
    if (frase[i] !== " ") {
        
        // 5. Se não for espaço, "colamos" ele na nossa nova string
        fraseSemEspacos += frase[i];
    }
}

// 6. Exibimos a frase prontinha
console.log("Resultado: " + fraseSemEspacos);