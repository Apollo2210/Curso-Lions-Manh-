const prompt = require('prompt-sync')()
const passageiro = {
nome: "Luana",
histórico_de_viagens: {
    Destino1: "Estados_Unidos", 
    Milhas1: 34.000,
    Destino2: "Japão",
    Milhas2: 108.000,
    Destino3: "França",
    Milhas3: 50.564,
   Distancias_de_viagens:  10000 +  108.000 + 50.564 
}

}
const soma = passageiro.histórico_de_viagens.Distancias_de_viagens

if (soma > 5000) {
    passageiro.status = "premium"
    passageiro.histórico_de_viagens.Distancias_de_viagens = passageiro.histórico_de_viagens.Distancias_de_viagens -5000
    console.log("Parabéns você é um passageiro " + passageiro + " suas viagens somaram " + soma)
}

else {console.log(" faltam " + (soma - 5000) + "para atingir o premium" )
    
passageiro.status = "gold"

}
console.log(passageiro)