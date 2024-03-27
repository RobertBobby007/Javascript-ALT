//interace přes object
let person = {
    "firstname" : "Bob",
    "lastnmae" : "Black",
    "job" : "policie",
    "number" :58
}

//klíče
for (let key of Object.keys(person)){
    console.log(key)
}

for (let key in person){
    console.log(key)
}

//hodnoty
for (let value of Object.values(person)){
    console.log(value)
}

//dvojice (klíč, hodnota)
for (let dvojice of Object.entries(person)){
    console.log(dvojice)
}

for (let [key, value] of Object.entries(person)){
    console.log(key, value)
}

//transormace 20 array [[], []]
let Black= [
    ["firstname", "John"],
    ["lastname", "Black"],
    ["number", 8]
    ]

let BlackObj = Object.fromEntries(Black)
console.log(BlackObj)
