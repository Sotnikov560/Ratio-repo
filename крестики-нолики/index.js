const cells = document.getElementById('area')
let move = 0 //переменная отвечающая за ход(типо кто ходит: крестики или нолики)
cells.addEventListener('click', e => {
    if (e.target.className == 'cell') {
        console.log(e.target)
    }
})