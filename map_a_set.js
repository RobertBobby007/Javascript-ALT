//map
let obj = {
    "name" : "Robert",
    "age": 32
}

//vytvoření mapy
let map = new Map();

//nastavení klíče a hodnoty
map.set("name", "Robert")
map.set(true, "ano")

console.log(map)

//přístup k hodnotě (get)

console.log(map.get("name"))

console.log(map.name) //chová se jinak než u objektu
console.log(map["name"]) //chová se jinak než u objektu

//testování přtomnosti klíče
console.log(map.has("name"))
console.log(map.has("time"))

map.set("time", undefined)
console.log(map.has("time"))

//smazání klíče a hodonoty
map.delete("time")
console.log(map.has("time"))

//smazání všech klíčů a hodnot
map.clear()
console.log(map)

//velikost mapy
console.log(map.size)
console.log(map.length) //nefunguje, vrací underined

//iterace přes mapu
console.log(map.keys())
for (let key of map.keys){
    console.log(key)
}

//hodnoty
console.log(map.values())
for (let value of map.values()){
    console.log(value)
}

//klíče a hodnoty, dvojice, entries
console.log(map.entries())
for (let entry of map.entries()){
    console.log(entry)
    console.log(typeof entry)
}

for (let [key, value] of map.entries()){
    console.log(key, value)
    console.log(typeof key, typeof value)
}

//alternativní způsob vytváření
//z pole dvojic klíč:hodnota
let numbers = new Map([
    ["jedna", 1],
    ["dva", 2],
    ["tři", 3]
])

console.log(numbers)
//z objektu
let Deny = {
    "name": "SugarDeny",
    "age": 25
}

let SugarDenyMap = new Map(Object.entries(Deny))
console.log(SugarDenyMap)

let weirdMap = new Map()
weirdMap.set(true, "ano")
console.log(weirdMap)

//převedení mapy na objekt

console.log(Object.fromEntries(weirdMap))

//set - množina
//prvek se může vyskytovat jen jednou

//vytvoření množiny
let mnozina = new Set()
console.log(mnozina)

//přidání prvků do množiny
mnozina.add(1)
console.log(mnozina)

mnozina.add(1) //co se stane
console.log(mnozina)

//ověření přítomnosti - has)
console.log(mnozina.has(1))
console.log(mnozina)

mnozina.add(1)
mnozina.add(2)
mnozina.add(3)
console.log(mnozina)

mnozina.add([4, 5])

// hromadne vytvoreni
let mnozina2 = new Set([1,2,3,4,5,6])
console.log()

// sjednoceni, prunik, rozdil, symetricky rozdil
let A = new Set([1,2,3,4])
let B = new Set([3,4,5,6])

let sjednoceni = A.union(B)
console.log(sjednoceni)
