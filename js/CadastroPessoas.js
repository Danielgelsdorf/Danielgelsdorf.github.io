export function salvarPessoa(form) {
    const pessoa = {
        nome: form.nome.value,
        telefone: form.telefone.value,
        email: form.email.value,
        endereco: {
            cep: form.cep.value,
            numero: form.numero.value,
            complemento: form.complemento.value,
            bairro: form.bairro.value
        }
    };
    let pessoas = JSON.parse(localStorage.getItem("pessoas"));
    if (pessoas === null) pessoas = [];
    pessoas.push(pessoa);
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
    alert('Pessoa adicionado com sucesso!');
    window.location.href = '../index.html';
}