//funkce
// 1. způsob - funkce deklarovaná
function sum(a, b){
    return a +b
}

console.log(sum(1, -1))

//2. způsob - funkční výraz
let sum2 = function (a, b){
    return a + b
}
console.log(sum(1,-1))
console.log(sum2)
console.log(sum)

//let vytiskni = console.log
//vytiskni("ahoj")


//call back funkce
function ask(question, yes, no){
    if(age >= 18){
        yes()
    }
    else {
        no()
    }
}

function showOK(){
    console.log("OK, je ti víc jak 18")
}

function showCancel(){
    console.log("Cancel, není 18 xx")
}

let age = 18
ask("je ti 18?", showOK,showCancel)

//arrow funkce - anonymní funkce
let sum3 = (a, b) => a + b
console.log(sum3(1,-3))