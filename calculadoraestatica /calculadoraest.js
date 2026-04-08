import PromptSync from "prompt-sync";
const prompt = PromptSync()

import numeros from "./numeros.js";
import adicionarNumero from "./adicionarNumero.js";
import removerNumero from "./removernumeros.js";
import calcularMedia from "./media.js";
import calcularMediana from "./mediana.js";

let operaçao = 1
let num = 0
while (operaçao!=0) {
console.log(" Qual operação você deseja utilizar?\n[1] - Adicionar Número\n [2] - Remover Número\n [3] - Listar Numeros\n [4] - Calcular Média\n [5] - Calcular Mediana\n [0] - Fechar Programa ");

operaçao = parseInt(prompt(" R: ")) 
console.log(numeros);
switch (operaçao) {
case 1:
    console.log(" Qual você deseja usar ? ");
    num = parseFloat(prompt(" R: "))
    adicionarNumero(num)
break;
case 2:
    removerNumero()
break
case 3:
    console.log(numeros);
    break
    
case 4: 
calcularMedia()
console.log(`A media é ${calcularMedia()}`);
break

case 5:
numeros.sort((a,b) => a - b)   
console.log(`A mediana é ${calcularMediana()}`);
break
case 0: 
console.log(" Programa encerrando ");
break
default:
    break

}


}