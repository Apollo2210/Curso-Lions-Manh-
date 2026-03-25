const prompt = require("prompt-sync")();
const notasaluno = prompt(" Qual foi a sua Nota na prova ");

switch (true) {
  case (notasaluno >= 90 && notasaluno <= 100):
    console.log(" Parabéns você tirou a Nota Maxima ");

    break;
  case (notasaluno >= 80 && notasaluno <= 89):
    console.log(" Parabéns você tirou a nota B ");

    break;
  case (notasaluno >= 70 && notasaluno <= 79):
    console.log(" Parabéns você tirou a nota C ");

    break;
  case (notasaluno >= 60 && notasaluno <= 69):
    console.log(" Você tirou a nota D ");
    break;

  case (notasaluno >= 0 && notasaluno <= 59):
    console.log(" Você tirou a nota F ");

default:
    break;
}
