//vytváření
let arr = [] //prázdné pole
let arr2 = new Array() //takto nepoužívat

let fruits = ["apple", "babank", 1]

console.log(fruits)

//přístup k hodnotám
console.log(fruits[0])

//změna hodnoty
fruits[4] =  "kiwi"

console.log(fruits)

//smazat prvek
delete fruits[5]

console.log(typeof fruits[5])

//delka pole
console.log(fruits.length)

//přistup k poslednímu prvku
console.log(fruits[fruits.length - 1])
console.log(fruits.at(-1))

//smazání posledního prvku
let lastItem = fruits.pop()
console.log(fruits)
console.log(lastItem)

//přidání prvku na konec
fruits.push("pear")
console.log(fruits)

//smazání pravního prvku
let first = fruits.shift()
console.log(fruits)
console.log(first)

//pridání prvku na začátek
fruits.unshift("grape")
console.log(fruits)
