// задание№ 2 
const basket = [100, 200, 300, 400, 500, 6]

function countBasketPrice(arr) {
    return arr.reduce((acc, price) => acc + price, 0)
}
console.log(countBasketPrice(basket))

// задание№ 3
for (let i = 0; i <= 9; i++)
    console.log(i)

// задание№ 4
let i = 'x'
let a = 0
while (a <= 20) {
    console.log(i += 'x')
    a++
    a++
    a++
    a++