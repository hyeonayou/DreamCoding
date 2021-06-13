"use strict";

const name = "ellie";
const age = 4;
print(name, age);

const obj1 = new Object();

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

// 6. for..in vs for..of

for (key in ellie) {
  console.log(key);
}
