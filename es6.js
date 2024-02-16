
const alunos = [
    { nome: 'Beatriz', nota: 10 },
    { nome: 'Antonio', nota: 1 },
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 7 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Carlos', nota: 4 }
];

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);

console.log('Alunos aprovados:');
console.log(alunosAprovados);
