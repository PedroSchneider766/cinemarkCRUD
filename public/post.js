//Função para enviar os dados POST - CREATE
function enviarDados() {
    //Obter os valores dos campos informados pelo usuário
    var nome = document.getElementById('nome').value
    var sobrenome = document.getElementById('sobrenome').value
    var cpf = document.getElementById('cpfCadastro').value
    var endereço= document.getElementById('endereço').value
    var cidade= document.getElementById('cidade').value
    var cep= document.getElementById('cep').value
    var telefone = document.getElementById('telefone').value
     var senha = document.getElementById('senha').value
      var username= document.getElementById('username').value
    
    //Enviar um função que puxa o valor de uma API - FETCH
    fetch('http://localhost:3000/pessoas', {
        method: 'POST', //Metodo POST HTTP
        headers: {
            'Content-Type': 'application/json' //Tipo de conteudo enviado JSON
        },
        body: JSON.stringify({nome: nome,  cpf: cpf,endereço:endereço , cidade:cidade,cep:cep,telefone:telefone,
            senha:senha,username:username,sobrenome:sobrenome
        }) //Dados a serem enviados e convertidos
    })
    .then(resposta => resposta.json()) //Converte a resposta para JSON
}