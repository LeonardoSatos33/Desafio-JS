window.addEventListener('load', start)

function handleEnviar(){
    event.preventDefault()
    var medicamento = document.getElementById("medicamento")
    var preço = document.getElementById("preço")
    var h1 = document.querySelector("h1")

    var lista = document.getElementById("lista")

    var novoItem = document.createElement('li')
    novoItem.textContent = "Medicamento = " + medicamento.value + " R$"+ preço.value
   

    lista.appendChild(novoItem)
}