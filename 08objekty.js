//vytváření objektů
let user = new Object(); //takto nepoužívat
console.log(user);
let student = {}
console.log(student);


//vytváření neprázdých objektů
let person = {
    firstName: "Robert",
    lastName: "Knobloch",
    age: 17,
    sex: "male"
}

console.log(person);

//přístup k hodnotám objeku
console.log(person.firstName);

//přidání dvojice klíče: hodnota
person.job = "CEO";

console.log(person);

person["favorite club"] = "NRW Club VIP ++"

console.log(person);

//přístup k hodnotám objektud
console.log(person["favorite club"])

//dynamický klíč
let key = "favorite color";
person[key] = "red"

console.log(person[key]); //hranatá závorka je bezpečnější

//vymazání dvojice klíč: hodnota
delete person["age"] // delete person.age
console.log(person);

//testování přítomnosti vlastnosti, klíče (key, property)
console.log("favorite club" in person);  //true nebo false vrátí
console.log("age" in person); // true nebo false

//interace přes objekt
//iterace přes klíč
for (let klíč in person){
    console.log(klíč);
}

//interace přes hodnoty
for (let klíč in person){
    console.log((person[klíč]))
}

//interace před dvojice klíč: hodnota
for (let klíč in person){
    console.log(klíč + ": " + person[klíč])
}
