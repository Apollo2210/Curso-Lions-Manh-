const prompt = require ('prompt-sync')()
let distanciapercorrida = parseFloat(prompt(" Qual foi a distancia percorrida ? "))
let quantidadedecombustivel = parseFloat(prompt(" Qual foi a quantidade de combustível gasto ? "))
  
let calculo = distanciapercorrida / quantidadedecombustivel 

if (calculo > 10) {

    console.log(" Consumo dentro dos padrões ")
    
}

else { 
console.log(" Consumo fora dos padrões, agendar uma revisão ") }