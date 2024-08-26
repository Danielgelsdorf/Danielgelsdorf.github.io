import{produtos, servicos} from "./form.js"
// Função para criar uma linha da tabela a partir de um objeto

export function criarLinha(objeto) {
    const novaLinha = document.createElement('tr');
    for (const propriedade in objeto) {
        const novaCelula = document.createElement('td');
        novaCelula.textContent = objeto[propriedade];
        novaLinha.appendChild(novaCelula);
        const celulaBotao = document.createElement('td');
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.classList.add('btn-remover');     // Adiciona uma classe para estilizar o botão
        // Adicionando um evento de clique ao botão
        botaoRemover.addEventListener('click', () => {
            novaLinha.remove(); // Remove a linha inteira quando o botão é clicado
        });
        celulaBotao.appendChild(botaoRemover);
        novaLinha.appendChild(celulaBotao);
    }
    return novaLinha;
}
//achando a tabela produtos
const tabelaProdutos = document.getElementById('tabela-produtos');
console.log("produtos: ", produtos);
if (produtos.length > 0) {
    console.log("produtos: ", produtos);
    
    produtos.forEach(produto => {
        tabelaProdutos.appendChild(criarLinha(produto));
    });
}
//achando a tabela de servicos
const tabelaServicos = document.getElementById('tabela-servicos');

if (servicos.length > 0) {
    servicos.forEach(servico => {
        tabelaServicos.appendChild(criarLinha(servico));
    });
}

