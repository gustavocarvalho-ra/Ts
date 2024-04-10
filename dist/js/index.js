"use strict";
// string, boolean, number
let x = 10;
const a = 121465;
x = 12;
console.log(a);
// inferencia x annotation
let y = 12; // inferencia
let z = 12; // annotation
// Tipos básicos
let firstName = 'Matheus';
let age = 20;
const isAdmin = true;
// String != string
console.log(firstName);
console.log(typeof firstName);
firstName = 'Pedro';
console.log(firstName);
// object 
const myNumber = [1, 2, 3];
console.log(myNumber);
console.log(myNumber.length);
myNumber.push(6);
console.log(myNumber);
// tuplas
let myTuple;
myTuple = [5, 'teste', ['a', 'b']];
console.log(myTuple);
// obj literals -> {prop: value}
const user = {
    name: 'Pedro', age: 18,
};
console.log(user);
console.log(user.name);
// any
let f = 0;
f = 'teste';
f = true;
f = [];
