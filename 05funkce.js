// function jmenofunkce(parametr1, parametr2)

function sum(a, b){
    return a + b;
}

//volání funkce
console.log(sum(1, 2));

function product(a = 1, b = 1){
    return a * b
}
 console.log(product())

//lokální a globální proměné
//lokalní

function getCircleArea(radius){
    const PI = 3.1415
    return PI * radius ** 2
}

console.log(getCircleArea(1))
//console.log(PI)

let PI = 3.1415 //globální promněné

function getCircleArea2(radius){
    PI = 3.14
    return PI * radius **2
}

console.log(getCircleArea2(1))
console.log(PI)