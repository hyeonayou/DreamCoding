/* 선언 해주는 것이 좋음 . 상식적인 범위 내에서 
자바스크립트 사용을 할 수 있게 됨  */
"use strict";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name}: hello!`);
  }
}
const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
