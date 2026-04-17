import numeros from "./numeros.js";

let soma = 0;
let index = 0;
function calcularMedia() {
  numeros.forEach((num) => {
    soma = soma + num;
    index++
  });
  return soma / index

}

export default calcularMedia;
