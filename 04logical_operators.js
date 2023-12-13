console.log(true && true)
console.log(true && false)
console.log(false && false)

console.log(true || true)
console.log(true || false)
console.log(false || false)

let hour = 8
if(hour < 10 || hour > 21){
    console.log("kancl je zavřenej")
}
else{
    console.log("kancl je otevřen")
}


//použití OR
let value1
let value2 = "" //berese jako false
let value3 = "ahoj"

console.log(value1)

console.log(value1||value2||value3)

//použití AND
let vek = 18
let hasDriverLicence = true

if(vek >= 18 && hasDriverLicence){
    console.log("mužeš legal řídit")
}
else {
    console.log("nemůžeš řídit legal")
}

//použití NOT
console.log(!true)