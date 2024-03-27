let year =1998
if (year == 1998) {
    console.log ("v tomto roce se něco stalo")
}

if (year == 1998) console.log("v tomto roce se něcooo stalooo")

if (""){ // prazdný string je false
    console.log("nicc")
}
else{
    console.log("toto se vypíše")
}

let condition = (year == 1998)
if (condition){
    console.log("v tomto roce se něco stalo")
}

let age = 16
if (age < 18){
    console.log("nemuzeš pít alkohol")
}
else if (age < 0){
    console.log("neplatný věk")
}
else if (age < 120){
    console.log("z ktetŕe jsi planety")
}
else{
    console.log("mužeš pít alkohol")
}

//ternání operátor ?
// syntaxe podmínky ? pravdivá_hodnota : nepravdivá_hodnota

let accessAllowed = (age > 18) ? "můžeš" : "nemůže do klubu"
console.log(accessAllowed)