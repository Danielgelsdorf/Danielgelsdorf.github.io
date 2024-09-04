let chaveProtudos = "produtos";
let chavePets = "pets";
let chaveServico = "servicos";
let chavePessoas = "pessoas";
function cadastro() {
    window.location.href = 'html/form_adicionar_produto_servico.html';
}

function reservaServico() {
    let listaPets = JSON.parse(localStorage.getItem(chavePets));
    let  listaServicos = JSON.parse(localStorage.getItem(chaveServico));
    if (listaServicos.length > 0 && listaPets.length > 0) {
        window.location.href = 'html/AgendarServicos.html';
    } else {
        alert("sem pet ou serviço cadastrado");
    }
}
function reservaProduto() {
    let listaProdutos= JSON.parse(localStorage.getItem(chaveProtudos));
    let listaPessoas= JSON.parse(localStorage.getItem(chavePessoas));
    if (listaPessoas.length > 0 && listaProdutos.length > 0) {
        window.location.href = 'html/AgendarProdutos.html';
    } else {
        alert("Pessoa ou produto não cadastrado.")
    }
}

const botao = document.getElementById("reservar_produto");
botao.addEventListener("click", reservaProduto);

const botaoServico = document.getElementById("reservar_servico");
botaoServico.addEventListener("click", reservaServico);