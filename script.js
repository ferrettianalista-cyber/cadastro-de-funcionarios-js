const botao = document.getElementById("cadastrar");

botao.addEventListener("click", function() {

    const nome = document.getElementById("nome").value;
    const cargo = document.getElementById("cargo").value;

    document.getElementById("resultado").innerHTML =
        "Nome: " + nome + "<br>Cargo: " + cargo;

});