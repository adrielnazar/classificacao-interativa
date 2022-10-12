let estrelas = 0
let botao = []
botao[0] = document.getElementById('estrela1')
botao[1] = document.getElementById('estrela2')
botao[2] = document.getElementById('estrela3')
botao[3] = document.getElementById('estrela4')
botao[4] = document.getElementById('estrela5')


function apagar() {
    for (let n = 0; n < botao.length; n++) {
        botao[n].classList.remove("selecionado")
        botao[n].classList.add("selecionar")
        
    }
}

function estrela1() {
    apagar()
    botao[0].classList.add("selecionado")
    botao[0].classList.remove("selecionar")
    estrelas = 1
}

function estrela2() {
    apagar()
    botao[1].classList.add("selecionado")
    botao[1].classList.remove("selecionar")
    estrelas = 2
}

function estrela3() {
    apagar()
    botao[2].classList.add("selecionado")
    botao[2].classList.remove("selecionar")
    estrelas = 3
}

function estrela4() {
    apagar()
    botao[3].classList.add("selecionado")
    botao[3].classList.remove("selecionar")
    
    estrelas = 4
}

function estrela5() {
    apagar()
    botao[4].classList.add("selecionado")
    botao[4].classList.remove("selecionar")
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