window.onload = function choosePlayer() {
    let vez = document.querySelector('.infocorpo')
    let numbers = Math.floor(2 * Math.random())
    if (numbers === 0) {
        vez.innerHTML = 'X'
    } else {
        vez.innerHTML = 'O'
    }
}



let key = []

function iniciarJogo() {
    document.querySelectorAll('.item').forEach(item => {
        key.push({
            clicado: false,
            elemento: item,
            quemClicou: '',
            jogando: true
        })
    })


    key.forEach(campo => {
        campo.elemento.addEventListener('click', function(item) {
            Playing()
            console.log(campo)
            if (campo.clicado == true) {
                console.log("Item já foi clicado")
                return
            }

            campo.clicado = true


            if (key.jogando === false) {
                console.log('acabou essa merda')
                key.clicado = false
                return
            }

            campo.jogando = false



            let it = item.target
            let body = document.querySelector('.infocorpo').innerHTML


            if (body === 'X') {
                it.innerHTML = 'X'
            } else if (body === 'O') {
                it.innerHTML = 'O'
            }


            if (body === 'X') {
                document.querySelector('.infocorpo').innerHTML = 'O'
            } else if (body === 'O') {
                document.querySelector('.infocorpo').innerHTML = 'X'
            }

            EndGame()


        })

    })

}


iniciarJogo()



function EndGame() {
    let item = document.querySelectorAll('.item')

    var matriz = [  [1,2,3],
                    [4,5,6],
                    [7,8,9],
                    [1,4,7],
                    [2,5,8],
                    [3,6,9] ];
                    console.log(matriz)


    //Na proxima atualização do codigo irei fazer de uma maneira melhor :)
    if (item[0].innerHTML === 'X' && item[1].innerHTML === 'X' && item[2].innerHTML === 'X') {
        document.querySelector('.resultado').innerHTML = 'X'
    } else if (item[0].innerHTML === 'O' && item[1].innerHTML === 'O' && item[2].innerHTML === 'O') {
        document.querySelector('.resultado').innerHTML = 'O'
    } else if (item[3].innerHTML === 'X' && item[4].innerHTML === 'X' && item[5].innerHTML === 'X') {
        document.querySelector('.resultado').innerHTML = 'X'
    } else if (item[3].innerHTML === 'O' && item[4].innerHTML === 'O' && item[5].innerHTML === 'O') {
        document.querySelector('.resultado').innerHTML = 'O'
    } else if (item[6].innerHTML === 'X' && item[7].innerHTML === 'X' && item[8].innerHTML === 'X') {
        document.querySelector('.resultado').innerHTML = 'X'
    } else if (item[6].innerHTML === 'O' && item[7].innerHTML === 'O' && item[8].innerHTML === 'O') {
        document.querySelector('.resultado').innerHTML = 'O'
    } else if (item[0].innerHTML === 'X' && item[3].innerHTML === 'X' && item[6].innerHTML === 'X') {
        document.querySelector('.resultado').innerHTML = 'X'
    } else if (item[0].innerHTML === 'O' && item[3].innerHTML === 'O' && item[6].innerHTML === 'O') {
        document.querySelector('.resultado').innerHTML = 'O'
    } else if (item[1].innerHTML === 'X' && item[4].innerHTML === 'X' && item[7].innerHTML === 'X') {
        document.querySelector('.resultado').innerHTML = 'X'
    } else if (item[1].innerHTML === 'O' && item[4].innerHTML === 'O' && item[7].innerHTML === 'O') {
        document.querySelector('.resultado').innerHTML = 'O'
    } else if (item[2].innerHTML === 'X' && item[5].innerHTML === 'X' && item[8].innerHTML === 'X') {
        document.querySelector('.resultado').innerHTML = 'X'
    } else if (item[2].innerHTML === 'O' && item[5].innerHTML === 'O' && item[8].innerHTML === 'O') {
        document.querySelector('.resultado').innerHTML = 'O'
    } else if (item[1].innerHTML === 'O' && item[4].innerHTML === 'O' && item[7].innerHTML === 'O') {
        document.querySelector('.resultado').innerHTML = 'O'
    } else if (item[0].innerHTML === 'X' && item[4].innerHTML === 'X' && item[8].innerHTML === 'X') {
        document.querySelector('.resultado').innerHTML = 'X'
    } else if (item[0].innerHTML === 'O' && item[4].innerHTML === 'O' && item[8].innerHTML === 'O') {
        document.querySelector('.resultado').innerHTML = 'O'
    } else if (item[2].innerHTML === 'X' && item[4].innerHTML === 'X' && item[6].innerHTML === 'X') {
        document.querySelector('.resultado').innerHTML = 'X'
    } else if (item[2].innerHTML === 'O' && item[4].innerHTML === 'O' && item[6].innerHTML === 'O') {
        document.querySelector('.resultado').innerHTML = 'O'
    } else if (item[0].innerHTML !== '' && item[1].innerHTML !== '' && item[2].innerHTML !== '' && item[3].innerHTML !== '' && item[4].innerHTML !== '' && item[5].innerHTML !== '' && item[6].innerHTML !== '' && item[7].innerHTML !== '' && item[8].innerHTML !== '') {
        document.querySelector('.resultado').innerHTML = 'Velha!'
    }
}

function Playing() {
    let Winner = document.querySelector('.resultado').innerHTML
    let item = document.querySelectorAll('.item')

    if (Winner === '--') {
        jogando = true
    } else if (Winner === 'X') {
        StopPlaying()
    } else if (Winner === 'O') {
        StopPlaying()
    }
}


//não deixar clicar
function StopPlaying() {
    key.jogando = false
    key.clicado = false
}

//reset
document.querySelector('.reset').addEventListener('click', () => {
    document.querySelectorAll('.item').forEach((element) => {
        element.innerHTML = ''
    })

    key.clicado = false
    key = []

   location.reload()

    document.querySelector('.resultado').innerHTML = '--'
    
    iniciarJogo()
})