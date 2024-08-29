let pessoas=JSON.parse(localStorage.getItem("pessoas"));
let produtos=JSON.parse(localStorage.getItem("produtos"));
if (pessoas === null) pessoas= [];
if (produtos=== null) produtos = [];

function criarOpcoes(select, dados) {
    dados.forEach(dado => {
        const option = document.createElement('option');
        option.value = dado.nome;
        option.text = dado.nome;
        select.appendChild(option);
    });
}

// Chamando a função para preencher as opções
const selectProdutos= document.getElementById('select_produto');
const selectPessoas= document.getElementById('pessoa');
criarOpcoes(selectPessoas, pessoas);
criarOpcoes(selectProdutos, produtos);

export function reservarProduto(form) {
    let reserva = {
        data: form.querySelector("#data").value +' '+ form.querySelector("#hora").value,
        produto: form.querySelector("#select_produto").value,
        pessoa: form.querySelector("#pessoa").value
    };
    let ReservaProdutos= JSON.parse(localStorage.getItem("reservaProduto"));
    if (ReservaProdutos=== null) ReservaProdutos= [];
    ReservaProdutos.push(reserva);
    localStorage.setItem("reservaProduto", JSON.stringify(ReservaProdutos));
    alert('Reserva feita  com sucesso!');
    window.location.href = '../html/reservas.html';   
}