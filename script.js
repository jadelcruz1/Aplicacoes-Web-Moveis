// Função para calcular saudação com base na hora
function saudacao() {
    const horaAtual = new Date().getHours();
    if (horaAtual >= 6 && horaAtual < 12) {
        return "Bom dia";
    } else if (horaAtual >= 12 && horaAtual < 18) {
        return "Boa tarde";
    } else {
        return "Boa noite";
    }
}

// Função que captura o nome, mostra o modal e exibe a mensagem personalizada
document.querySelector("button").addEventListener("click", function (event) {
    event.preventDefault(); // Impede o envio do formulário
    
    // Captura os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    
    // Validação para garantir que todos os campos foram preenchidos
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return; // Impede a execução do restante da função
    }
    
    // Validação de e-mail: verificar se contém o símbolo "@" 
    if (!email.includes('@')) {
        alert("E-mail inválido. Por favor, insira um e-mail válido.");
        return; // Impede a execução do restante da função
    }
    
    // Cria a saudação com base no horário
    const mensagemSaudacao = saudacao();
    
    // A mensagem do modal com o nome e saudação
    const mensagemModal = `${mensagemSaudacao}, ${nome}. Sua mensagem foi recebida. Em breve entraremos em contato! Obrigado!`;
    
    // Atualiza o conteúdo do modal com a mensagem personalizada
    document.getElementById("modalMessage").textContent = mensagemModal;
    
    // Exibe o modal
    document.getElementById("successModal").style.display = "flex";
    
    // Limpar os campos do formulário após o envio
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
});

// Fechar o modal e atualizar a página ou limpar os campos
document.querySelector(".modal-button").addEventListener("click", function() {
    // Esconde o modal
    document.getElementById("successModal").style.display = "none";
    
    // Opcional: Atualiza a página (se você preferir recarregar a página após o envio)
    // location.reload(); // Descomente se quiser recarregar a página

    // Ou limpa os campos do formulário após fechar o modal
    // document.getElementById("nome").value = "";
    // document.getElementById("email").value = "";
    // document.getElementById("mensagem").value = "";
});
