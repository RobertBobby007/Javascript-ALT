//Operátory

//Unární operátory
// +, -, ++, --, typeof, !
let x = 1
console.log(-x)

let y = "1"
//převod stringu na číslo (number)
let number = +y
console.log(typeof number)// -1

//Binární operátory
// let a = 1
// let b = 3
// console.log(a + b)

//Binární operátory:
// +, -, *, /, %, <, >, <=, >=, ==, ===, !=, !==, &&, ||, +=, -=, *=, /=, %=
console.log(0 === false)
// == porovnává hodnoty
// === porovnává hodnoty i datové typy

let text = "Ahoj" +  " světe!"
console.log(text)

console.log("1" + 2)
console.log(1 + "2")
console.log(2 + 2 + "1")
console.log("1" + 2 + 2)
console.log(2 + 3 * 6)

//Přiřazování proměnných
let a = 1
let b = 2
let c = 3 - (a = b + 1)

console.log(a, b, c)

let d, e, f
d = e = f = 2 + 2
console.log(d, e, f)

//modifikace hodnoty
// let m = 2
// m = m + 5
// m = m * 2
// console.log(m)

let m = 2
m += 5 //syntaktický cukr (syntax sugar)
m *= 2
console.log(m)

//Inkrementace a dekrementace (zvýšení a snížení)
let i = 1 //i jako inkrementace
i++ //increment nebo zvýšení
console.log(i)
i-- //decrement nebo snížení
console.log(i)

++i
console.log(i)
--i
console.log(i)

console.log(i++)
console.log(i)

console.log(++i)
console.log(--i)

console.log(i--)
console.log(i)

