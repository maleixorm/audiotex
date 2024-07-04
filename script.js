// Selecionando os elementos do HTML
const selecaoVoz = document.querySelector("#selecao-voz");
const entradaTexto = document.querySelector("#entrada-texto");
const botaoOuvir = document.querySelector("#ouvir-btn");
const botaoBaixarTexto = document.querySelector("#baixar-texto-btn");
const uploadArquivo = document.querySelector("#upload-arquivo");

// Iniciando a API de vozes
const fala = new SpeechSynthesisUtterance();
let vozesDisponiveis = [];

// Preenchendo o Select
const atualizarValores = () => {
    vozesDisponiveis = window.speechSynthesis.getVoices();
    fala.voice = vozesDisponiveis[0];
    vozesDisponiveis.forEach((voz, index) => {
        const opcao = document.createElement("option");
        opcao.value = index;
        opcao.textContent = voz.name;
        selecaoVoz.appendChild(opcao);
    });
};

window.speechSynthesis.onvoiceschanged = atualizarValores;