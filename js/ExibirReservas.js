let reservaServicos = JSON.parse(localStorage.getItem("reservaServico"));

let reservaProdutos = JSON.parse(localStorage.getItem("reservaProduto"));
//console.log("tamanho das reservas:", reservaProdutos.leng, reservaServicos.leng);
if (reservaProdutos === null) reservaProdutos = [];
if (reservaServicos === null) reservaServicos = [];
function ExibirProduto(objeto, container, storage) {
    objeto.forEach((obj, index) => {
        const novaLinha = document.createElement('tr');
        //const dataHora = new Date(obj.data);
        //const dataFormatada = `${dataHora.getFullYear()}-${dataHora.getMonth() + 1}-${dataHora.getDate()} ${dataHora.getHours()}:${dataHora.getMinutes()}`;
        novaLinha.innerHTML = `
            <td>${obj.produto}</td>
            <td>${obj.pessoa}</td>
            <td>${obj.data}</td>
        `;
        const celulaBotao = document.createElement('td');
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Finalizar reserva';
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

function ExibirReservaServicos(objeto, container, storage) {
    objeto.forEach((obj, index) => {
        const novaLinha = document.createElement('tr');
        const dataHora = new Date(obj.data);
        const dataFormatada = `${dataHora.getFullYear()}-${dataHora.getMonth() + 1}-${dataHora.getDate()} ${dataHora.getHours()}:${dataHora.getMinutes()}`;
        novaLinha.innerHTML = `
            <td>${obj.servico}</td>
            <td>${obj.pet}</td>
            <td>${dataFormatada}</td>
        `;
        const celulaBotao = document.createElement('td');
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Finalizar reserva';
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
const tabelaReservaServico = document.getElementById("tabela-servicos-reservas");
ExibirReservaServicos(reservaServicos, tabelaReservaServico, 'reservaServico');
const tabelaReservaProduto = document.getElementById("tabela-produtos-reservas");
ExibirProduto(reservaProdutos, tabelaReservaProduto, "reservaProduto");