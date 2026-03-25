const prompt = require("prompt-sync")();

console.log(" Os Generos em cartaz são: Ação, Terror, Animação e Comédia");

const generosf = prompt(
  " Qual genero de filme você deseja assistir hoje ? R: "
);

switch (generosf) {
  case "Ação":
    console.log(" Ação Sala01")
    break;

   case "terror":
   console.log(" Terror Sala02 ")
   break;
 
   case "Animação":
    console.log(" Animação Sala03 ")
    break;

    case "Comédia":
  console.log(" Comédia Sala 04 ")
  break;



  default:

}
