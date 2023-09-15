let form = document.getElementById('formulario')
let bodyTable = document.querySelector('tbody')
let tabela = document.getElementById('tabelaContatos')
let nome = document.getElementById('inputNome')
let tel = document.getElementById('inputTel')
let listaContato = ''
let arrayNomes = []
let arrayTel = []

form.addEventListener('submit', function(e){
    e.preventDefault()
    criaContato()
    insereContato()
})

function criaContato(){
    let contatos

    if(arrayNomes.includes(nome.value) && arrayTel.includes(tel.value))
        alert(`O contato ${nome.value} já está cadastrado com esse número!`)
    else{

        arrayNomes.push(nome.value)
        arrayTel.push(tel.value)

        contatos = '<tr>'
        contatos += `<td>${nome.value}</td>`
        contatos += `<td>${tel.value}</td>`
        contatos += '</tr>'
    
        listaContato += contatos
    }
}

function insereContato(){
    bodyTable.innerHTML = listaContato
    nome.value = ''
    tel.value = ''
}


