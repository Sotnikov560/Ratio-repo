const body = document.querySelector('body')

console.log(body)
console.dir(body)

const cells = document.querySelectorAll('.cell')
console.log(cells)
console.dir(cells)

const keyPressHandle = (e) => {
    console.log(e)
    console.log('ты нажал ', e.key)
    if (e.key === 'Enter') {
        console.log('ты точно нажал enter')
    }
}

body.addEventListener('keydown', keyPressHandle)