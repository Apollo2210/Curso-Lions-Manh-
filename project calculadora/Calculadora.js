import promptSync from "prompt-sync";

const prompt = promptSync();

import conta_divisao from "./divisao.js"

import conta_adicao from "./adição.js"

import conta_multiplicação from "./multiplicação.js"

import conta_subtração from "./subtração.js"

import conta_porcentagem from "./porcentagem.js"
import Adição from "./adição.js";

let resultado = 0
let numero = 0

let escolha = 0

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
    
       numero = parseFloat(prompt("Qual numero você deseja adicionar ? R: "))
      resultado = conta_adicao(resultado,numero)
      console.log(resultado);
    break;
    
    case 2:
        conta_divisao()
    break;
    
    case 3: 
        conta_multiplicação()
    break;

    case 4: 
        conta_subtração()
    break;

    case 5: 
        conta_porcentagem()
    break;

    default: 
    console.log(" Seleção Indisponivel tente outro número de 1 até 5 ou 0 para sair ")
        break;
}} while (escolha !== 0);