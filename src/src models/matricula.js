import mongoose from "mongoose";
const matriculaSchema = new mongoose.Schema({
    nomePessoa: {
type:String,
required:[true," O nome da Pessoa é obrigatorio "]

    },
idade: {
type: Number,
required:[true, " A idade dessa pessoa é obrigatoria "]
},

modalidade: {

type: String,
required:[true, "  A modalidade deve ser obrigatoria "],
enum: {
values: [ "Musculação", "Funcional", "Dança" ],
message: [" Escolha uma das modalidades acima "]
}
},

plano: {
type:String,

}























}),

