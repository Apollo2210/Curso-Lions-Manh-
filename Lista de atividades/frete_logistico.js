const prompt = require('prompt-sync')()
let distancia_ao_cliente = parseFloat(prompt(" Qual foi a distancia ate o cliente ? R: "))
let Urgencia = prompt(" essa entrega é urgente ? S/N ")
let taxafixa = 20
let quilometro = 1.50
let result = (distancia_ao_cliente + quilometro) + taxafixa


if (distancia_ao_cliente > 100 ||  Urgencia  === "s" ) {
    let txaextra = 15 + result
    console.log(" Houve uma taxa adicional por ser 100 km ou urgente " + txaextra + " R$ " )
}


else { 
     console.log(" Entrega Normal ")
}