
let pets = JSON.parse(localStorage.getItem("pets"));
if (pets === null) pets = [];

function criarTabelaPets(objeto, container, storage) {
    objeto.forEach((obj, index) => {
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <td>${obj.nome}</td>
            <td>${obj.raca}</td>
            <td>${obj.comportamento}</td>
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
//achando a tabela de pets
const tabelaPets = document.getElementById('tabela-pets');
if (pets.length > 0) {
    criarTabelaPets(pets, tabelaPets, "pets");
}
