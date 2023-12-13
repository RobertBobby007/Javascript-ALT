let a = null
let b = "něco"

let result  = a ?? b


console.log(result)

let user

console.log(user ?? "Anonym uživatel")

//porovnání s logickém NEBO (||)
let c = null
let d = "Ahoj"

console.log(c || d)

//kdy nebo funguje špatně

let castka = 0
let vychozicastka = 100

if(castka === 0){
    console.log(castka)
}
else {
    console.log(castka || vychozicastka)
}
console.log(castka || vychozicastka)

//textovej
let text = ""
let defaultText = "Ahoj"

console.log(text || defaultText)