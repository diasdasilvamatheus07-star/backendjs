// DEMOSTRAÇÃO DO DOM

console.log("script.js carregado!");

// TROCA DE PAGINA
const botoesMenu = document.querySelectorAll("nav button");
const paginas = document.querySelectorAll(".pagina");

botoesMenu.forEach((botao) => {
    botao.addEventListener("click", () => {
        // Qual pagina este botao quer mostrar? (vem do data-pagina no HTML)
        const idDaPagina = botao.dataset.pagina;

        // Esconde todas as paginas e tira o destaque de todos os botoes
        paginas.forEach((pagina) => pagina.classList.remove("visivel"));
        botoesMenu.forEach((b) => b.classList.remove("ativo"));

        // Mostra só a página e tira o destaque de todos os botões
        document.querySelector("#" + idDaPagina).classList.add("visivel");
        botao.classList.add("ativo");

        console.log("Mostrando a página:", idDaPagina)
    });
});

// Alterar texto e estilo
const titulo = document.querySelector("#titulo");
const paragrafos = document.querySelectorAll(".texto");

// Muda o texto e a cor do titulo
document.querySelector("#btn-mudar-titulo").addEventListener("click", () => {
    titulo.textContent = "Título mudado pelo JavaScript!";
    titulo.computedStyleMap.color = "#780606";
});

// Passa todos os paragrafos para maiusculo
document.querySelector("#btn-maiusculas").addEventListener("click", () => {
    paragrafos.forEach((p) => {
        p.textContent = p.textContent.toUpperCase();
    });
});

// Liga e desliga uma classe css
document.querySelector("#btn-destaque").addEventListener("click", () => {
    paragrafos.forEach((p) => p.classList.toggle("destaque"));
});

// Modo escuro: liga desliga a classe "escuro" no body
const  botoeEscuro = document.querySelector("#btn-escuro");
botaoEscuro.addEventListener("click", () => {
    document.body.classList.toggle("escuro");

    // Muda o texto do botao conforme o modo atual
    if (document.body.classList.contains("escuro")) {
        botoeEscuro.textContent = "Modo claro";
    } else {
        botaoEscuro.textContent = "Modo escuro";
    }
});

// criar e remover elementos
const lista = document.querySelector("#lista"); 
const cores = ["vermelho", "verde", "azul", "amarelo", "roxo", "laranja"];
let proximaCor = 0; 

function adicionarCor(nomeDaCor) { 
    const item = document.createElement("li"); // cria o elemento li
    item.textContent = nomeDaCor; // preenche o texto com o nome da cor
    
    // Cada item ganha seu próprio botão de remover 
    const botaoRemover = document.createElement("button"); 
    botaoRemover.textContent = "Remover"; 
    
    botaoRemover.addEventListener("click", () => { 
        item.remove(); 
    }); // Corrigido: Removido o extra '});' que causava erro de sintaxe
    
    item.appendChild(botaoRemover); // Corrigido: 'appendChildd' para 'appendChild'
    lista.appendChild(item);
}

adicionarCor("vermelho");
adicionarCor("verde");
adicionarCor("azul");
proximaCor = 3;

document.querySelector("#btn-adionar").addEventListener("click", () => {
    adicionarCor(cores[proximaCor % cores.length]);
    proximaCor++;
});

document.querySelector("#btn-limpar").addEventListener("click", () => {
    lista.innerHTML = "";
});
// Ler oque o usuario digita
const campoNome = document.querySelector("#campo-nome");
const saudacao = document.querySelector("#saudacao");
const contador = document.querySelector("#contador");

// O evento input dispara a cada letra digitada
campoNome.addEventListener('input', () => {
  const nome = campoNome.value.trim();

  if (nome === '') {
    saudacao.textContent = 'Digite algo no campo acima.';
  } else {
    saudacao.textContent = `Olá, ${nome}!`;
  }

  contador.textContent = `Letras: ${campoNome.value.length}`;
});

