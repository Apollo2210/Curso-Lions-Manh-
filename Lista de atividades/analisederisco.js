const prompt = require('prompt-sync')()
let salario = parseFloat(prompt(" Qual é o seu salario ? R: "))
let parcela = parseFloat(prompt(" Qual é o valor da sua parcela? R: "))
let restrição = prompt("O cliente possui restrição no nome ? S/N ")
 let conta = salario/0.30

if (parcela <= conta && restrição == "N") {
 console.log(" credito aprovado ")   
}

else { (parcela >conta && restrição == "S")
 console.log(" Credito negado ")


}