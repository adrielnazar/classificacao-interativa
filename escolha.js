let estrelas = 0
let botao1 = document.getElementById('estrela1')
let botao2 = document.getElementById('estrela2')
let botao3 = document.getElementById('estrela3')
let botao4 = document.getElementById('estrela4')
let botao5 = document.getElementById('estrela5')


function apagar() {
    botao1.classList.remove("selecionado")
    botao1.classList.add("selecionar")
    botao2.classList.remove("selecionado")
    botao2.classList.add("selecionar")
    botao3.classList.remove("selecionado")
    botao3.classList.add("selecionar")
    botao4.classList.remove("selecionado")
    botao4.classList.add("selecionar")
    botao5.classList.remove("selecionado")
    botao5.classList.add("selecionar")
}

function estrela1() {
    apagar()
    botao1.classList.add("selecionado")
    botao1.classList.remove("selecionar")
    estrelas = 1
}

function estrela2() {
    apagar()
    botao2.classList.add("selecionado")
    botao2.classList.remove("selecionar")
    estrelas = 2
}

function estrela3() {
    apagar()
    botao3.classList.add("selecionado")
    botao3.classList.remove("selecionar")
    estrelas = 3
}

function estrela4() {
    apagar()
    botao4.classList.add("selecionado")
    botao4.classList.remove("selecionar")
    
    estrelas = 4
}

function estrela5() {
    apagar()
    botao5.classList.add("selecionado")
    botao5.classList.remove("selecionar")
    estrelas = 5
}



function enviar() {
    if (estrelas <= 0) {
        window.alert('Selecione uma opção')
    } else {
        let resposta = document.getElementById('resposta')
        selecao = document.getElementById('selecao')
        resultado = document.getElementById('resultado')
        selecao.style.display = 'none'
        resultado.style.display = 'block'
        resposta.innerHTML = `You selected ${estrelas} out of 5`
    }
}