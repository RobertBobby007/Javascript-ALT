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
