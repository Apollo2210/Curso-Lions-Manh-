const prompt = require('prompt-sync')()
let nome = prompt(" Qual o nome de sua empresa ? R: ")
let custo = parseFloat(prompt(" Digite o custo do projeto em R$ : "))

let filaprojetos = []
 let cliente = {

    empresa:nome,
    valor:custo,  }
filaprojetos.push (cliente)
let prazo = prompt(" O projeto tem prazo de entrega urgente? s/n ?  ")



if (filaprojetos[0].valor > 3000 && prazo === "s" ) {

    filaprojetos[0].valor = filaprojetos[0].valor *1.15
    console.log(" O projeto teve um custo adicional de R$ "+ filaprojetos[0].valor)

}

else {
     console.log(" O projeto não teve custo adicional ")

}