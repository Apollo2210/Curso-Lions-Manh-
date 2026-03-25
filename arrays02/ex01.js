const prompt = require('prompt-sync')()
let carrinhodecompra = {}
let nome = prompt(" Qual é o seu nome ? R: ")
let assinatura = prompt(" Qual é o seu tipo de assinatura? R: ")
 

let produto01 = parseFloat(prompt(" Qual é o valor do produto 01? "))
let produto02 = parseFloat(prompt(" Qual é o valor do produto 02? "))
let produto03 = parseFloat(prompt(" Qual é o valor do produto 03? "))

carrinhodecompra.produto01 = produto01
carrinhodecompra.produto02 = produto02
carrinhodecompra.produto03 = produto03
carrinhodecompra.assinatura = assinatura
carrinhodecompra.nome = nome

let soma = parseFloat(produto01) + parseFloat(produto02) + parseFloat(produto03)



if (soma > 200 && assinatura == "premium") {
    console.log(" Oba você ganhou um frete gratis por ser premium !")
}

else if (soma > 200 && assinatura == "basic") {
    console.log(" Você ganhou um desconto de 10% por ser basic !")
}

else {
    console.log(" Que pena, você não ganhou nenhum desconto :( ")
}