const prompt = require("prompt-sync")();
cadastroonline = {
  nome: "Luiz",
  Valor: 50,
  quantidadedehamburguer: 3,
  Extra: []

};

let extra01 = prompt(" Digite qual será o seu primeiro adicional R: ")
let precoextra01 = parseFloat(prompt(" Digite o valor do seu primeiro adicional R:" + (extra01) ))
let extra02 = prompt(" Digite qual será o seu segundo adicional R: ")
let preçoextra02 = parseFloat(prompt(" Digite o valor do seu segundo adicional R:" + (extra02) ))
cadastroonline.Extra.push(extra01,extra02)
let subtotal = (cadastroonline.Valor + precoextra01 + preçoextra02)*cadastroonline.quantidadedehamburguer
let valortotal = subtotal;

if (cadastroonline.Extra.length ===2 && cadastroonline.quantidadedehamburguer >2 ) {
    let desconto = subtotal *0.20
    valortotal = subtotal - desconto
    console.log(" Os seus hamburguers receberam 20% de desconto, muito obrigado ")
    
}
console.table(cadastroonline)