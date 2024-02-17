
function idade(anoNascimento: number, anoAtual: number): number {
    const idadeVerdadeira = anoAtual - anoNascimento;
    console.log("A idade verdadeira é:", idadeVerdadeira);
    return idadeVerdadeira;
}

function saudacao(nome: string): string {
    const mensagemSaudacao = "Olá " + nome;
    console.log(mensagemSaudacao);
    return mensagemSaudacao;
}

const idadeCalculada = idade(1999, 2024);
const mensagem = saudacao("Sdney");

