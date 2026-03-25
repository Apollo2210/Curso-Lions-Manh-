const prompt = require('prompt-sync')()

let nomedocachorro = prompt(" Qual o nome do seu cachorro ? R: ")

let raçadocachorro = prompt(" Qual a raça do seu cachorro ? R: ")

let anosdoseucachorro = parseFloat(prompt(" Quantos anos o seu cachorro tem ? R: "))

let paciente = {
    nome:nomedocachorro, 
    raça:raçadocachorro,
    idade:anosdoseucachorro} 

if (paciente.idade > 8 ) {
    console.log(" o paciente já é um senior e precisa de exames de rotina ")
    
}
else {
    console.log("Paciente na idade regular ")

    

}