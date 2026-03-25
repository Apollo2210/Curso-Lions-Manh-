const prompt = require('prompt-sync')()

let ntamanhos = [10, 15, 12 ]

let vendidasP = parseInt(prompt(" Quantas camisetas P foram vendidas ? R: "));

ntamanhos[0] = ntamanhos[0] - vendidasP

if (ntamanhos[0] < 5) {
  
    console.log(" Alerta: estoque do tamanho P está critico ")
}

else { 

    console.log(" Estoque do tamanho P está normal ")
}