const prompt = require('prompt-sync')()
let prova01 = parseFloat(prompt(" digite a nota da prova 01 R:" ))
let prova02 = parseFloat(prompt("Digite a nota da prova 02 R: "))
let variavel = [] 
variavel.push(prova01)
variavel.push(prova02)
let notas = ( variavel[0]+ variavel [1])/2
console.log(" a media da prova é " + notas ) 