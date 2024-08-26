import { ProdutoModel } from "./model/ProdutoModel.js";
import { ServicoModel } from "./model/ServicoModel.js";

export const produtos = [];
export const servicos = [];

export function enviar(form){
    event.preventDefault(); // Impede o envio padrão do formulário
    form.preventDefault();
console.log("nome", form.nome.value);
}

export function enviarDados(form) {
    form.preventDefault();
    if (form.tipo.value === produto) {
        let produto = new ProdutoModel(form.img.value, form.nome.value, form.descricao.value, form.preco.value);
        console.log("produto:", produto);
        produtos.push(produto);
        alert('Produto adicionado com sucesso!');
        window.location.href = '..index.html';
    } else {
        let servico = new ServicoModel(form.img.value, form.nome.value, form.descricao.value, form.preco.value);
        servicos.push(servico);
        alert('Serviço adicionado com sucesso!');
    }
}