let carrinho = [10.50, 25.00, 5.75, 40.00, 18.75];
let somatotal = 0
for (let i = 0; i < carrinho.length; i++) {
    somaTotal += carrinho[i]; 
}

let valorMedio = somaTotal / carrinho.length;
console.log("Soma Total: R$ " + somaTotal.toFixed(2));
console.log("Valor Médio por Produto: R$ " + valorMedio.toFixed(2));