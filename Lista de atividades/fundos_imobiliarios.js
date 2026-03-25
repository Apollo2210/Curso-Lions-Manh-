const prompt = require('prompt-sync')();
let quantidade = parseFloat(prompt(" Digite a quantidade de cotas por gentileza "))
let rendimento = parseFloat(prompt(" Digite o seu rendimento por gentileza "))
let calculo = quantidade * rendimento

if(calculo>=100){
    console.log(" Você já tem saldo suficiente para comprar uma nova cota e reinvestir! ")
}
else {
    console.log("Rendimento recebido R$:" + calculo + " Acumule mais para reinvestir. ")
} 

