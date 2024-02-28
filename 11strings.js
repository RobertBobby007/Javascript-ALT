//strings
//UFT-16

let single= 'single-quoted';
let double = 'double-quoted';

let backticks = 'backticks';

//special znaky
"/n" //nový řádek
"/r" //carriage return
"/t" //tabulator

let text = "Ahoj\\ jak se míš"
console.log(text)

let shorttext = "\tAhoj"

console.log(shorttext.length)

let phoneNumber = "+420778004131"

console.log(phoneNumber[0])

//iterace
for(let char of phoneNumber){
    console.log(char)
}

//změna znaku - stringy jsou nezaměnné
phoneNumber[1] = "3"

console.log(phoneNumber)

newPhoneNumber = phoneNumber.slice(0, 1) + "3" + phoneNumber.slice(2)
console.log(newPhoneNumber)

//vyhledávání podřetězců
let str = "ahoj, jak se máš. Já dobře??"
console.log(str.indexOf("?"))// ukáže kde se nachází
console.log(str.indexOf("?", 5))

//přítomnost podřetězce
console.log(str.includes("?"))
console.log(str.includes("-"))

//hledání od konce
console.log(str.lastIndexOf("?"))

//končí to na
console.log(phoneNumber.endsWith("4"))

//končí to na
console.log(str.endsWith("?"))

//kouskování se záporným číslem
console.log(str.slice(-7))

//subs, substing, ale zadávám delku
let pozdrav = "ahojky"
console.log(pozdrav.substring(0, 6))

//porovnání
console.log("A" < "B")
console.log("Č" < "Z")
console.log("C" < "A")

//převod na velká a malá písmena
console.log("a" < "C".toLowerCase())
console.log("a".toLowerCase() < "C".toLowerCase())


