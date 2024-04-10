try{
    console.log("Ahoj")
    bla
} catch (err){
    console.log("Nastala chyba")

console.log(typeof err)
console.log(err.name) //jméno chyby
console.log(err.message) //chybová hláška
console.log(err.stack)
console.log("Nastala chyba!!")
}

let json = '{"bad":json}'

try{
    let user = JSON.parse(json)
    console.log(user.name)
}catch(err){
    console.log("špatný formát")
    console.log(err.name)
    console.log(err.message)
}

//throw
// let massage = "Vlastní chyba"
// let error = new TypeError(massage)
//
// throw error

//try...catch..finally
//finally je volitelné

try{
    bla
} catch (err){
    bla
} finally {
    console.log("Vždy se spustí")
}
