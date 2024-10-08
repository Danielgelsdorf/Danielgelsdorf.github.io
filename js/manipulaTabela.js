let produtos = JSON.parse(localStorage.getItem("produtos"));
let servicos = JSON.parse(localStorage.getItem("servicos"));

if (produtos === null) produtos = [];
if (servicos === null) servicos = [];

// Função para criar uma linha da tabela a partir de um objeto

function criarLinha(objeto, container, storage) {
    objeto.forEach((obj, index) => {
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <td><img src="${obj.img}" alt="${obj.nome}"></td>
            <td>${obj.descricao}</td>
            <td>${obj.preco}</td>
        `;
        const celulaBotao = document.createElement('td');
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.classList.add('btn-remover');     // Adiciona uma classe para estilizar o botão
        // Adicionando um evento de clique ao botão
        botaoRemover.addEventListener('click', () => {

            objeto.splice(index, 1);
            localStorage.setItem(storage, JSON.stringify(objeto));
            novaLinha.remove(); // Remove a linha inteira quando o botão é clicado
        });
        celulaBotao.appendChild(botaoRemover);
        novaLinha.appendChild(celulaBotao);
        container.appendChild(novaLinha);
    });
}
//achando a tabela produtos
const tabelaProdutos = document.getElementById('tabela-produtos');
if (produtos.length > 0) {
    criarLinha(produtos, tabelaProdutos, "produtos");
}
//achando a tabela de servicos
const tabelaServicos = document.getElementById('tabela-servicos');
if (servicos.length > 0) {
    criarLinha(servicos, tabelaServicos, "servicos");
}