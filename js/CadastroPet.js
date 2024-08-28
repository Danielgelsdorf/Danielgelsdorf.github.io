export function salvarPet(form) {
    let pet = {
        nome: form.querySelector("#nome").value,
        tipo: form.querySelector("#tipo").value,
        raca: form.querySelector("#raca").value,
        comportamento: form.querySelector("#comportamento").value
    };
    let pets = JSON.parse(localStorage.getItem("pets"));
    if (pets === null) pets = [];
    pets.push(pet);
    localStorage.setItem("pets", JSON.stringify(pets));
    alert('Pet adicionado com sucesso!');
    window.location.href = '../html/meus_pets.html';   
}