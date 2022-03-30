/// задание№ 1

function countBasketPrice(arr) {
    const basket = [{
            cost: 100,
            name: 'пояс'
        },
        {
            cost: 200,
            name: 'кроссовки'
        },
        {
            cost: 300,
            name: 'кепка'
        },
        {
            cost: 400,
            name: 'джинсы'
        },
        {
            cost: 500,
            name: 'куртка'
        },
        {
            cost: 600,
            name: 'брелок'
        }
    ]
    return arr.reduce((a, b) => a + b.cost, 0)
}
console.log(countBasketPrice(basket))



// задание№ 2

function convertNumb(numb) {

    let str = String(numb)
    str = str.split('').reverse('')

    const obj = {
        'единицы': str[0],
        'десятки': str[1],
        'сотни': str[2]
    }
    if (numb > 999) {
        console.log('Ошибка!')
        return {}
    } else { return obj }

}
console.log(convertNumb())