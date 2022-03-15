const body = document.querySelector('body')

console.log(body)

const cells = document.querySelectorAll('.cell');

function bgChange() {
    const rdCol = 'red'
    document.body.styleXO.backgroundColor = rdCol
}

cells.addEventListener('click', bgChange)