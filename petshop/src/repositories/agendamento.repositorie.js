import agendamento from "../models/agendamento.js";

async function criar(dadosAgendamento) {
return agendamento.create(dadosAgendamento);

}
const AgendamentoRepository = {

    criar
};
export default AgendamentoRepository