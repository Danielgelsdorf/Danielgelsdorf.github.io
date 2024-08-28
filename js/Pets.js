export function redirectFormPet() {
    window.location.href = '../html/formCadastroPet.html';
}

const botao = document.getElementById("direct_cadastro_pet");
botao.addEventListener("click", redirectFormPet);