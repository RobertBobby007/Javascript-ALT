let massage = "ČAU dětska"
let phrase = massage;
phrase = "Zdar"

console.log(massage)
console.log(phrase)

let user =  {
    name: "Robert",
    age: 17
}

let admin = user;
admin.name = "Petr"

console.log(user.name)
console.log(admin.name)

//reference na objekt

console.log(user === admin)

//klonování a kopírování objektů
const original = {
    "statement": "Mapy.cz is the best"
}

//... je spread operátor, který rozbalí objekt do jednotlivých hodnot klíču a hodnot
const clone = {...original}

clone.statement = "hate google maps"

console.log(original.statement);
console.log(clone.statement);

//spojování objektů
let person = {
    "name": "Robert"
}

let job = {
    "job": "Mapy"
}

let age = {
    "age": "17"
}

let personMerged =
    {...person,...job,...age}

//poslední přepisuje předchozí
console.log(personMerged);

