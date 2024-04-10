//JSON - JavaScript Object Notstion
//stralizace objektů - způsob jak zapsat
let student = {
    "name": "Pepa",
    "lastname": "Chocholatka",
    "age": 16,
    "courses": ["swimm", "Czech", "History"],

    parents: [
        {
            name: "Pepa",
            lastname: "Chocholatka"
        },
        {
          name: "Jana",
          lastname: "Chocolatková"
        }
    ]
}

console.log(JSON.stringify(student))

//ze stringu object
let str = '{"Brand":"Škoda", "type":"Skala", "colour""Blue"}'
console.log(str)

let porsche = JSON.parse(str)
console.log(Škoda)
console.log(Škoda.type)
