function cadastro() {
    window.location.href = 'html/form_adicionar_produto_servico.html';
}

function reservaServico(){
    window.location.href = 'html/AgendarServicos.html';
}
function reservaProduto(){
    window.location.href = 'html/AgendarProdutos.html';
}

const botao = document.getElementById("reservar_produto");
botao.addEventListener("click", reservaProduto);

const botaoServico = document.getElementById("reservar_servico");
botaoServico.addEventListener("click", reservaServico);