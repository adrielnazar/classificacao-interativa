let estrelas = 0
let botao1 = document.getElementById('estrela1')
let botao2 = document.getElementById('estrela2')
let botao3 = document.getElementById('estrela3')
let botao4 = document.getElementById('estrela4')
let botao5 = document.getElementById('estrela5')


function apagar() {
    botao1.style.background = '#7c879818'
    botao1.style.color = '#7c8798'
    botao2.style.background = '#7c879818'
    botao2.style.color = '#7c8798'
    botao3.style.background = '#7c879818'
    botao3.style.color = '#7c8798'
    botao4.style.background = '#7c879818'
    botao4.style.color = '#7c8798'
    botao5.style.background = '#7c879818'
    botao5.style.color = '#7c8798'
}

function estrela1() {
    apagar()
    botao1.style.background = 'orange'
    botao1.style.color = 'white'
    estrelas = 1
}

function estrela2() {
    apagar()
    botao2.style.background = 'orange'
    botao2.style.color = 'white'
    estrelas = 2
}

function estrela3() {
    apagar()
    botao3.style.background = 'orange'
    botao3.style.color = 'white'
    estrelas = 3
}

function estrela4() {
    apagar()
    botao4.style.background = 'orange'
    botao4.style.color = 'white'
    estrelas = 4
}

function estrela5() {
    apagar()
    botao5.style.background = 'orange'
    botao5.style.color = 'white'
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