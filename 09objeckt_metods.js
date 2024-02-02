// objektovéé metody

// metody jsou funkce, které jsou součástí objektu

const user = {
  'name': 'Robert',
  'age': 17,
  sayHello() {
    console.log('Hello');
  },
    getAge() {
      return this.age
    },
    show(){
      return this
    }
};

user.sayHi = function() {
  console.log("ahoooj" + this.name + "?");
};

user.sayHi()
user.sayHello()
console.log(user.getAge())
console.log(user.show())
