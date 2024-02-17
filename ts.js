function idade(anoNascimento, anoAtual) {
    var idadeVerdadeira = anoAtual - anoNascimento;
    console.log("A idade verdadeira é:", idadeVerdadeira);
    return idadeVerdadeira;
}
function saudacao(nome) {
    var mensagemSaudacao = "Olá " + nome;
    console.log(mensagemSaudacao);
    return mensagemSaudacao;
}
var idadeCalculada = idade(1999, 2024);
var mensagem = saudacao("Sdney");
