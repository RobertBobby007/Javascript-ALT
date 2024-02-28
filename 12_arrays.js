//vytváření
let arr = [] //prázdné pole
//let arr2 = new Array() //takto nepoužívat

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

//iterace přes pole
for (let i = 0; i <fruits.length; i++){
    console.log(fruits[i])
}

//iterace 2. způsob
for (let ovoce of fruits){
    console.log((ovoce))
}

//smazání array
fruits.length = 2
console.log(fruits)

//vicedimenzionální pole
let matrix = [
    [1, 2 , 3],
    [4, 5, 6]
]

console.log(matrix[1][1])

//další metody
let numbers = [1, 2, 3 ,4]
numbers.splice(2, 1) //maže prvek od nějakého prvku
console.log(numbers)

//slice
let numbers2 = numbers.slice(0, 2)
console.log(numbers2)

//concat - spojení dvou poli
let pets = ["dog", "cat"]
let wild = ["lion", "tiger"]
let all = pets.concat(wild)
console.log(all)

//forEach
all.forEach((
    item, index, array) => console.log(item, index, array))

    all.forEach((item) => console.log(item))

//vyhledánání v poli a filtrace
let order0fLion = all.indexOf("lion")
console.log(order0fLion)

//testování přítomnosti prvku
console.log(all.includes("liom"))
console.log(all.includes("bear"))

//filtrce
let threeLettersAnimals = all.filter((animal) => animal.length === 3)
console.log(threeLettersAnimals)

//map - transformace
let upperCaseAnimals = all.map((animal) => animal.toUpperCase())
console.log(upperCaseAnimals)

//sort
all.sort()
console.log(all)

//reverse
all.reverse()
console.log(all)

//split
let sentence = "hello, how are you?"
let words = sentence.split("")
console.log(words)

//join
words[0] = "Hi"
let newSentence = words.join(" ")
console.log(newSentence)
