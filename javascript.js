const btnEntrar = document.getElementById("btnEntrar");
const mensagem = document.getElementById("mensagem");

btnEntrar.addEventListener("click", function () {
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (usuario === "" || senha === "") {
        mensagem.textContent = "Preencha todos os campos";
        return;
    }

    mensagem.textContent = "Login realizado com sucesso";
});
