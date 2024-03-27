//vytvoření datového objektu
let now = new Date()
console.log(now) //vrací v ISO formátu

let sometime = new Date(0)
console.log(sometime) //ofiko začátek PC epochy

let Jan02_1970 = new Date(24*3600*1000) //čas v milisekundách
console.log(Jan02_1970)

let Nov31_1969 = new Date(-24*3600*1000)
console.log(Nov31_1969)

//zadání času v lidské podobě
let date = new Date(1998, 1, 28, 7, 35,2,3)
console.log(date)

//rok
console.log(date.getFullYear())

//měsíc
console.log(date.getMonth())

//DEN V MĚSÍCI
console.log(date.getDate())

//den v týdnu
console.log(date.getDay())

//časová pásma
let currentdate = new Date()
let options = {timeZone: "Europe/Prague"}

let currentTimeinnewyork = currentdate.toLocaleString("cs-CZ", options)
console.log(currentTimeinnewyork)


//parsovaní data
let isoTime = Date
