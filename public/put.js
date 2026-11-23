function buscarDados() {
    var cpf = document.getElementById('identificadorCPF').value

    fetch('/pessoas')
        .then(resposta => resposta.json())
        .then(dados => {
            let pessoaEncontrada = dados.find(pessoa => pessoa.cpf == cpf)

            if (pessoaEncontrada) {
                document.getElementById('identificador').value = pessoaEncontrada.id
                document.getElementById('identificadorCPF').value = pessoaEncontrada.cpf
                document.getElementById('nomeAtualizar').value = pessoaEncontrada.nome
                document.getElementById('sobrenome').value = pessoaEncontrada.sobrenome
                document.getElementById('cep').value = pessoaEncontrada.cep
                document.getElementById('endereço').value = pessoaEncontrada.endereço
                document.getElementById('telefone').value = pessoaEncontrada.telefone
                document.getElementById('senha').value = pessoaEncontrada.senha
                document.getElementById('username').value = pessoaEncontrada.username

                // Só preenche se o campo 'cidade' existir no put.html
                var campoCidade = document.getElementById('cidade')
                if (campoCidade) {
                    campoCidade.value = pessoaEncontrada.cidade || ''
                }
            } else {
                alert("Pessoa não encontrada")
            }
        })
}

function atualizarDados() {
    var id = document.getElementById('identificador').value
    var cpf = document.getElementById('identificadorCPF').value
    var nome = document.getElementById('nomeAtualizar').value
    var sobrenome = document.getElementById('sobrenome').value
    var cep = document.getElementById('cep').value
    var endereço = document.getElementById('endereço').value
    var telefone = document.getElementById('telefone').value
    var senha = document.getElementById('senha').value
    var username = document.getElementById('username').value
    
    var campoCidade = document.getElementById('cidade')
    var cidade = campoCidade ? campoCidade.value : ''

    if (!id) {
        alert("Busque um CPF válido antes de atualizar.")
        return
    }

    fetch(`/pessoas/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            sobrenome: sobrenome,
            cpf: cpf,
            endereço: endereço,
            cidade: cidade,
            cep: cep,
            telefone: telefone,
            senha: senha,
            username: username
        })
    })
    .then(resposta => resposta.json())
    .then(() => {
        alert("Dados atualizados com sucesso!")
    })
}