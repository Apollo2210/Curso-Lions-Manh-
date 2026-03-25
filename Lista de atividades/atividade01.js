const prompt = require('prompt-sync')()
let custoProdução = parseFloat(prompt("digite o custo de produção "))
let venda = parseFloat(prompt("digite a venda " ))
let lucro = venda - custoProdução

if (lucro < 500) {
      console.log(" Atenção: Margem de lucro perigosamente baixa " )
    }    
else { console.log("Margem de lucro saudável: R$:" + lucro) }