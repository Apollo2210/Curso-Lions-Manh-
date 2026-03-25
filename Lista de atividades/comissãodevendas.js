const prompt = require('prompt-sync')()
let valordevendas = parseFloat(prompt(" Digite a quantidade de vendas que fez no mês ? "))


if (valordevendas >= 20000) {
    let extra = 0.05 * valordevendas
    console.log(" A sua comissão foi " + extra + " R$ " )

}
else {
    let extra2 = 0.02 * valordevendas
    console.log(" A sua comissao foi " + extra2 + " R$ " )
}
