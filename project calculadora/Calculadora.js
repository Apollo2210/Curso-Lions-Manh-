import promptSync from "prompt-sync";

const prompt = promptSync();

import conta_divisao from "./divisao.js"

import conta_adicao from "./adição.js"

import conta_multiplicação from "./multiplicação.js"

import conta_subtração from "./subtração.js"

import conta_porcentagem from "./porcentagem.js"


let resultado = 0
let numero = 0

let escolha = 0
let contador =true
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
if(contador){
    resultado = parseFloat(prompt("digite o primeiro valor"))
    contador=false
}

switch (escolha) {
    case 1:
    
       numero = parseFloat(prompt("Qual numero você deseja adicionar ? R: "))
      resultado = conta_adicao(resultado,numero)
      console.log(resultado);
    break;
    
    case 2:
        
        numero = parseFloat(prompt(" Qual numero você deseja ? R: "))
        resultado =conta_divisao(resultado,numero)
        console.log(resultado);
    break;
    
    case 3: 
        numero = parseFloat(prompt("Qual numero você deseja ? R: "))
        resultado =conta_multiplicação(resultado,numero)
        console.log(resultado);
    break;

    case 4: 
        conta_subtração()
        numero = parseFloat(prompt(" Qual numero você deseja ? R: "))
        resultado= conta_subtração(resultado,numero)
        console.log(resultado);
    break;

    case 5: 
  numero = parseFloat(prompt(" Qual numero você deseja usar ? R: "))
  resultado = conta_porcentagem(resultado,numero)
  console.log(resultado);
    break;

    default: 
    console.log(" Seleção Indisponivel tente outro número de 1 até 5 ou 0 para sair ")
        break;
}} while (escolha !== 0);   
