//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Armazenar no nomes.
let amigos = [];

// Adiciona o nome e envia o alerta.
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome a "ListaAmigos".
    amigos.push(nome);

    let lista = document.getElementById("listaAmigos");
    let item = document.createElement("li");
    item.textContent = nome;

    // Atualiza a lista exibida na tela.
    lista.appendChild(item);

    // Limpa o campo de entrada.
    input.value = "";
}
// Sortear amigo secreto aleatório.
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo para sortear. Adicione amigos primeiro.");
        return;
    }

    // Gerar um índice aleatório entre 0 e o tamanho do array de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}
