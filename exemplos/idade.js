const prompt= require('prompt-sync')()
const Anoatual = 2026
const nome = prompt (" Qual é o seu nome ? ")
let idade2 = parseInt (prompt("Qual a sua idade? "))

let aniversario = prompt("ele fez aniversario (s/n)" )


if (aniversario == "s") {
 let resultado01 = Anoatual - idade2

    console.log(" Parabéns pelo seu aniversario" + nome + "voce tem " + resultado01 + " anos de idade " ) 
} else { 
    let resultado02 = Anoatual - idade2 -1 
    console.log(" Infelizmente voce ainda nao fez aniversario " + nome + " voce nasceu em " + resultado02 )
}
