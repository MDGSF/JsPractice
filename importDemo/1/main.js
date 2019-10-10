const { Animal, Person } = require("./module.js");
const Student = require("./oneclass.js");
const { Add, Sub } = require("./mulfunc.js");
const mulfuncs = require("./mulfunc2.js");

const animal = new Animal();
const person = new Person();
const student = new Student();

console.log(animal);
console.log(person);
console.log(student);

console.log('1 + 2 =', Add(1, 2));
console.log('1 - 2 =', Sub(1, 2));

console.log(mulfuncs.equal(1, 1));
console.log(mulfuncs.notEqual(1, 1));
