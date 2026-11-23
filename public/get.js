fetch('http://localhost:3000/pessoas')
    .then(resposta => resposta.json())
    .then(dados => {
        var tabelaCorpo = document.getElementById('tabela-corpo')

        dados.forEach(objeto => {
            var tr = document.createElement('tr')
            
            var tdNome = document.createElement('td')
            var tdSobrenome = document.createElement('td') 
            var tdCPF = document.createElement('td')
            var tdCidade = document.createElement('td')
            var tdCep = document.createElement('td')
            var tdEndereço = document.createElement('td')
            var tdTelefone = document.createElement('td')

            // Preenche as células
            tdNome.innerText = objeto.nome
            tdSobrenome.innerText = objeto.sobrenome
            tdCPF.innerText = objeto.cpf
            tdCidade.innerText = objeto.cidade
            tdCep.innerText = objeto.cep
            tdEndereço.innerText = objeto.endereço
            tdTelefone.innerText = objeto.telefone

            // Adiciona na mesma ordem do <thead> do get.html
            tr.appendChild(tdNome)
            tr.appendChild(tdSobrenome)
            tr.appendChild(tdCPF)
            tr.appendChild(tdCidade)
            tr.appendChild(tdCep)
            tr.appendChild(tdEndereço)
            tr.appendChild(tdTelefone)

            tabelaCorpo.appendChild(tr)
        })
    })