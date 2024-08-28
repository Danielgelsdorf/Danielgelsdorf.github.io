export function enviarDados(form) {
    if (form.querySelector("#tipo").value === "produto") {
        let produto = {
            img: form.querySelector("#img").value,
            nome: form.querySelector("#nome").value,
            descricao: form.querySelector("#descricao").value,
            preco: form.querySelector("#preco").value
        };
        let produtos = JSON.parse(localStorage.getItem("produtos"));
        if(produtos === null) produtos = [];
        produtos.push(produto);
        localStorage.setItem("produtos", JSON.stringify(produtos));
        alert('Produto adicionado com sucesso!');
    } else {
        let servico = {
            img: form.querySelector("#img").value,
            nome: form.querySelector("#nome").value,
            descricao: form.querySelector("#descricao").value,
            preco: form.querySelector("#preco").value
        };
        let servicos = JSON.parse(localStorage.getItem("servicos"));
        if(servicos === null) servicos = [];
        servicos.push(servico);
        localStorage.setItem("servicos", JSON.stringify(servicos));
        alert('Serviço adicionado com sucesso!');
    }
    window.location.href = '../index.html';
}