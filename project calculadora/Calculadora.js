const prompt = require("prompt-sync")();

//Adição

let number = 0;
let number02 = 0;
let result = 0;
function Adição(number, number02) {
  number = parseFloat(prompt(" Digite um valor "));
  number02 = parseFloat(prompt(" Digite outro valor "));
  (result = number + number02)
}
Adição()
console.log(result) 


//divisao


let number03 = 0;
let number04 = 0;
let resultdivisao = 0;

function Divisão(number03, number04) {
number03 = parseFloat(prompt(" Digite um numero "))
number04 = parseFloat(prompt(" Digite outro valor "))
result = number03 / number04
}
Divisão()
console.log(result)


//multiplicação

let number05 = 0;
let number06 = 0;
let resultmult = 0;

function multiplicação(number05, number06) {
number05 = parseFloat(prompt(" digite um valor "))
number06 = parseFloat(prompt(" digite outro valor "))
resultmult = number05 * number06

}
multiplicação()
console.log(resultmult)

//subtração

let number07 = 0;
let number08 = 0;
let resultsubt = 0;

function subtração(number07,number08){
number07 = parseFloat(prompt(" Digite um valor "))
number08 = parseFloat(prompt(" Digite outro valor "))
resultsubt = number07 - number08
}
subtração()
console.log(resultsubt)


//porcentagem
let number09 = 0;
let number10 = 0;
let resultporc = 0;

function porcentagem( number09, number10) {
    number09 = parseFloat(prompt(" Digite um valor "))
    number10 = parseFloat(prompt(" Digite outro valor "))
    resultporc = (number09*number10) /100
}
//porcentagem()
//console.log(resultporc)

while (continuar){
console.log("---Seja Bem Vindo a Calculadora---");
console.log(" Qual opção você deseja usar ")
console.log(" 1-Adição ")
console.log(" 2-Divisão ")
console.log(" 3-Multiplicação ")
console.log(" 4-Subtração ")
console.log(" 5-Porcentagem ")
console.log(" 0-Sair")
let escolha = prompt(" Qual você deseja ? R: ")
}
switch (escolha) {
    case 1:
        Adição()
        break;
case 2:
    Divisão()

case 3: 
multiplicação()

case 4: 
subtração()

case 5: 
porcentagem()
    default: 
        break;
}