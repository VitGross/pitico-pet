document.getElementById("cadastro-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtendo os dados do formulário
    const nome = document.getElementById("quest-nome").value;
    const email = document.getElementById("quest-email").value;
    const telefone = document.getElementById("quest-telefone").value;
    const endereco = document.getElementById("quest-endereco").value;
    const pet = document.getElementById("quest-pet").value;
    const pet2 = document.getElementById("quest-pet2").value;
    const site = document.getElementById("quest-site").value;
    const coment = document.getElementById("quest-coment").value;
    const classi = document.getElementById("quest-classi").value;

    // Criando um resumo dos dados
    const resultado = `
        <h2><strong>CADASTRO ENVIADO</strong>, muito obrigado pela colaboração!</h2>
        `;

    // Exibindo o resultado
    document.getElementById("resultado").innerHTML = resultado;
});