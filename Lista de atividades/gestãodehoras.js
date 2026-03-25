const prompt = require('prompt-sync')()
let ganho_por_hora = parseFloat(prompt(" Quanto voce ganha por hora? R: "))
let quantidade_hrs_extras = parseFloat(prompt(" Quantas horas extras voce fez? R: "))
let resultado = ganho_por_hora + quantidade_hrs_extras *1.5
console.log(resultado )
