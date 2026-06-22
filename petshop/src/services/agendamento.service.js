import AgendamentoRepository from "../repositories/agendamento.repositorie";

async function cadastrar({nomePet,especie, nomeDono,telefoneDono,servico, data, valor,especie,servico}) {

    let valor = 0;
    if (especie == "Cão") {
      switch (servico) {
        case "Banho":
          valor = 50;
          break;
        case "Tosa":
          valor = 60;
          break;
        case "Banho e Tosa":
          valor = 100;
          break;
        default:
          console.log("Serviço inválido!");
          break;
      }
    }

    if (especie == "Gato") {
      switch (servico) {
        case "Banho":
          valor = 60;
          break;
        case "Tosa":
          valor = 70;
          break;
        case "Banho e Tosa":
          valor = 110;
          break;
        default:
          console.log("Serviço inválido!");
          break;
      }
    }

    if (especie == "Outro") {
      switch (servico) {
        case "Banho":
          valor = 40;
          break;
        case "Tosa":
          valor = 50;
          break;
        case "Banho e Tosa":
          valor = 80;
          break;
        default:
          console.log("Serviço inválido!");
          break;
      }
    }
    
}

 const novoAgendamento = AgendamentoRepository.criar({
      nomePet,
      especie,
      nomeDono,
      telefoneDono,
      servico,
      data,
      valor,
    });
return AgendamentoService;

const AgendamentoService = {
    cadastrar
};



export default AgendamentoService;
