let pets = JSON.parse(localStorage.getItem("pets"));
let servicos = JSON.parse(localStorage.getItem("servicos"));
if (pets === null) pets = [];
if (servicos === null) servicos = [];

function criarOpcoes(select, dados) {
    dados.forEach(dado => {
        const option = document.createElement('option');
        option.value = dado.nome;
        option.text = dado.nome;
        select.appendChild(option);
    });
}

// Chamando a função para preencher as opções
const selectServico = document.getElementById('servico');
const selectPet = document.getElementById('pet');
criarOpcoes(selectServico, servicos);
criarOpcoes(selectPet, pets);

export function reservarServico(form) {
    let reserva = {
        data: form.querySelector("#data").value + ' '+form.querySelector("#hora").value,
        servico: form.querySelector("#servico").value,
        pet: form.querySelector("#pet").value
    };
    let ReservaServicos= JSON.parse(localStorage.getItem("reservaServico"));
    if (ReservaServicos=== null) ReservaServicos= [];
    ReservaServicos.push(reserva);
    localStorage.setItem("reservaServico", JSON.stringify(ReservaServicos));
    alert('Reserva feita  com sucesso!');
    window.location.href = '../html/reservas.html';   
}