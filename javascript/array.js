"use strict";

// Array

// 1. Declaration

const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position

const fruits = ["사과", "바나나"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

console.clear();
//3. Looping over an array
// print all fruits

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});

fruits.forEach((fruit) => console.log(fruit));
console.clear();
// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push("딸기", "복숭아");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging : 앞에서 데이터 넣기
fruits.unshift("딸기", "키위");
console.log(fruits);

// shift : remove an item to the benigging : 앞에서 데이터 뺴기
fruits.shift();
fruits.shift();
console.log(fruits);

////////// 앞에서 데이터를 넣고 빼려면 오른 쪽 데이터들을 한 칸씩 오른쪽으로
////////// 옮겨야하기 때문에 느리다.   =>  < big O >

// splice: remove an item by index position =? 원하는 인덱스의 데이터를 삭제
fruits.push("딸기", "키위", "체리");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);

// combine two arrays => 합치기

const fruits2 = ["키위", "망고"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.clear();
// 5. Searching
// indexOF: find the index  => 중복 된 인덱스 중 첫 번째 인덱스 값 출력
console.log(fruits);
console.log(fruits.indexOf("딸기"));
console.log(fruits.indexOf("사과"));

// lastindexOf:  => 중복 된 인덱스 중 마지막 인덱스 값 출력
