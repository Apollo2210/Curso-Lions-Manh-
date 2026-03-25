const prompt = require('prompt-sync')()
let horasestimadas = parseFloat(prompt("quantas horas eram estimadas? "))
let ong = prompt("o cliente é uma ong s/n ? ")
const valor_da_hora = 45
let resultado = horasestimadas * valor_da_hora

if (resultado>5000 && ong === "s") { 
resultado = resultado *0.90
console.log(" O valor da hora com desconto é " + resultado)
    }
 else {
    console.log(" o valor sem o desconto é " + resultado) 
}   