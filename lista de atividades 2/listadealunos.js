const prompt = require('prompt-sync')();
let alunos = ['João, Matheus'];
let novoaluno = prompt(" Qual o nome do terceiro aluno ? ");
alunos.push (novoaluno);


if (alunos.length = 3) {
   console.log(" Turma formada com sucesso! Alunos: " + alunos ) 
}