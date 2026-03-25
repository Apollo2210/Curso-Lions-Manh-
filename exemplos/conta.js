const prompt = require ('prompt-sync')();
let valor01 = parseFloat(prompt("qual foi a sua nota da prova 01"))
let valor02 = parseFloat(prompt("Qual foi a sua nota da prova 02"))

let resultado = (valor01 * valor02) /2
console.log(" a sua media é " + resultado ) 