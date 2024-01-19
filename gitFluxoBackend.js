const user = document.getElementById("user");
const password = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert(`Cadastrado(a) com sucesso.\n\nUsername ou email: ${user.value}\nSenha: ${password.value}`);

});