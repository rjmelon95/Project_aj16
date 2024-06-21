function cadastrar() {
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const employment = document.getElementById('employment').value;

    if (name && birthdate && cpf && email && employment) {
        alert(`Nome: ${name}\nData de nascimento: ${birthdate}\nCPF: ${cpf}\nEmail: ${email}\nSituação Profissional: ${employment}`);
        // Aqui vamos adicionar a lógica para processar o cadastro, como uma chamada AJAX para o servidor
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function voltar() {
    window.location.href = 'login.html'; // Redireciona para a tela de login, ajuste conforme necessário
}
