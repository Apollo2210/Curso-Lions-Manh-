const prompt = require("prompt-sync")();
function CadastrarPaciente() {
  let nomeDog = prompt(" Qual o Nome do Seu Cachorro ? ");
  let RaçadoDog = prompt(" Qual é a raça do seu Cachorro ");
  let IdadedoDog = Number(prompt(" Quantos anos o seu cachorro tem ? "));
  return {
   
    Nome: nomeDog,
    Raça: RaçadoDog,
    Idade: IdadedoDog,
  };
}
let paciente1 = CadastrarPaciente();

if (paciente1.Idade > 8) {
  console.log(" Paciente em idade senior, necessita de exames ");
}

else {
    console.log("Paciente na idade regular ")
}