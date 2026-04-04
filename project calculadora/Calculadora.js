const prompt = require("prompt-sync")();

//Adição

let number = 0;
let number02 = 0;
let result = 0;
let escolha;
function Adição() {
  number = parseFloat(prompt(" Digite um valor "));
  number02 = parseFloat(prompt(" Digite outro valor "));
  result = number + number02
  console.log(`${number} + ${number02} = ${result}`);
}
//Adição()
//console.log(result) 


//divisao


function Divisão() {
let number03 = parseFloat(prompt(" Digite um numero "))
let number04 = parseFloat(prompt(" Digite outro valor "))
result = number03 / number04
console.log(`${number03} / ${number04} = ${result}`);
return
}
//Divisão()
//console.log(result)


//multiplicação


function multiplicação() {
let number05 = parseFloat(prompt(" digite um valor "))
let number06 = parseFloat(prompt(" digite outro valor "))
resultmult = number05 * number06
 console.log(`${number05} * ${number06} = ${resultmult}`);
}



//multiplicação()
//console.log(resultmult)

//subtração


let resultsubt = 0;

function subtração(){
let number07 = parseFloat(prompt(" Digite um valor "))
let number08 = parseFloat(prompt(" Digite outro valor "))
resultsubt = number07 - number08
console.log(`${number07} - ${number08} = ${resultsubt}`);
}
//subtração()
//console.log(resultsubt)


//porcentagem

let resultporc = 0;

function porcentagem() {
    let number09 = parseFloat(prompt(" Digite um valor "))
    let number10 = parseFloat(prompt(" Digite outro valor "))
    resultporc = (number09*number10) /100
    console.log(`${number09} % ${number10} = ${resultporc}`);
    console.log(`${number09} % ${number10} = ${resultporc}`); 
}
//porcentagem()
//console.log(resultporc)




do {
console.log("---Seja Bem Vindo a Calculadora---");
console.log(" Qual opção você deseja usar ")
console.log(" 1-Adição ")
console.log(" 2-Divisão ")
console.log(" 3-Multiplicação ")
console.log(" 4-Subtração ")
console.log(" 5-Porcentagem ")
console.log(" 0-Sair")



escolha = parseInt(prompt(" Qual você deseja ? R: "))

switch (escolha) {
    case 1:
        Adição()
    break;
    
    case 2:
        Divisão()
    break;
    
    case 3: 
        multiplicação()
    break;

    case 4: 
        subtração()
    break;

    case 5: 
        porcentagem()
    break;

    default: 
    console.log(" Seleção Indisponivel tente outro número de 1 até 5 ou 0 para sair ")
        break;
}} while (escolha !== 0);   