const prompt = require('prompt-sync')()
let valororiginaldocondominio = parseFloat(prompt(" Qual é o valor original do condominio ? "))
let diasdeatraso = parseFloat(prompt(" Quantos dias está atrasado o aluguel ? "))
let feriado = prompt(" O vencimento original caiu em um feriado ? s/n ")
let valorfinal = valororiginaldocondominio
let multa = valororiginaldocondominio *0.02

if (diasdeatraso != 0 ) {

    let atraso = diasdeatraso *1.00;
    valorfinal = valororiginaldocondominio + multa
if (feriado == "n" ) {
    valorfinal = diasdeatraso + valorfinal
    
}
}
console.log(valorfinal)