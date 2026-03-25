const prompt = require('prompt-sync')()
let quantidadeatual = parseFloat(prompt(" Qual a quantidade atual desse produto? R:"))
let quantidademínima = parseFloat(prompt(" Qual a quantidade mínima desse produto ? R: "))

if   (quantidadeatual >= quantidademínima)
    { console.log(" Estoque regularizado ")
}


else {
    console.log(" Atenção: estoque baixo ")


}