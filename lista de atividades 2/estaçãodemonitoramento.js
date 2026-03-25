const prompt = require('prompt-sync')()
const estação = {
    id: "sensor01",
    local: "laboratorio",
    temperatura: []

}
let temperaturamanha = parseInt(prompt(" Qual era a temperatura da manhã? R:"))
let temperaturatarde = parseInt(prompt(" Qual era a temperatura da parte da tarde? R:"))
let temperaturanoite = parseInt(prompt(" Qual era a temperatura da parte da tarde? R:"))

estação.temperatura.push(temperaturamanha, temperaturatarde, temperaturanoite)
console.log(estação)

let variavel =  (estação.temperatura[0] + estação.temperatura[1] + estação.temperatura[2])/3

if (variavel >35) {
    estação.alerta = true
    console.log(" Alerta de temperatura elevada ")
    console.log(" PERIGO! Média de temperatura extrema " + variavel + " detectada no " + estação.local)
}


else {
estação.alerta = false
console.log(" Temperatura dentro da normalidade ")
}

