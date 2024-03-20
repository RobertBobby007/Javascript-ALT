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

