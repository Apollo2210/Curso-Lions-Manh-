const prompt = require('prompt-sync')()
const atleta = {
nome:"Tiago",
peso:82,
meta:"Emagrecimento",
distancias:[32, 24, 10], 
selos:[]
}
const distanciahoje =26.1
console.log(" A distancia de hoje foi " + distanciahoje + "kM" )

const distanciaanterior = atleta.distancias[atleta.distancias.length -1]

atleta.distancias.push(distanciahoje);

const ds01 = atleta.distancias.slice(-3);
const soma = ds01.reduce((acc, curr) => acc + curr, 0);
const mediarecente = soma / ds01.length;


if (atleta.meta == "Emagrecimento" && mediarecente > 20) {
    atleta.peso -=1
 atleta.selos.push("Meta atingida")   
 console.log("Parabéns, " + atleta.nome + "! Você atingiu sua meta de emagrecimento e agora pesa " + atleta.peso + " kg.")
}



