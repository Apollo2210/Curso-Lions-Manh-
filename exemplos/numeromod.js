const Prompt = require('prompt-sync') ()
let numero01 = parseFloat(Prompt(" Digite um numero "))
if (numero01 == 0 ) {
   console.log (" O numero que voce digitou é 0 ")
}
else if (numero01 % 2 ==0 ) {
   console.log("o numero que voce digitou é par" )
}
else {
console.log(" O numero que voce digitou é impar ")
}