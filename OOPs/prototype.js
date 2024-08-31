/* 
`__proto__`: A property that references the prototype of the object, from which it inherits methods and properties.

`[[prototype]]`: An internal property that the javascript engine uses it to look up properties and methods in the prototype chain.

*/

// const parent = { greet() { console.log('Hello!'); } };
// const child = Object.create(parent);    //true

// console.log(child.__proto__ === parent);
// child.greet();

/*
const grandParents = { wisdom: 'Ancient Knowledge', recipe: 'Traditional Dish' };
const parents = Object.create(grandParents);
parents.modernKnowledge = 'New Techniques';

const child = Object.create(parents);
child.newSkills = 'Innovative Methods';

console.log(child.__proto__ === parents);
console.log(child.__proto__.__proto__ === grandParents);

console.log(child.wisdom);
console.log(child.newSkills);
*/

// -------------------------------------------------------------------------
// Use Prototype

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.greet = function() {
//     console.log(`Hello, my name is ${this.name}`);
// }

// const person1 = new Person('Tom');
// const person2 = new Person('Jerry');

// person1.greet();
// person2.greet();
// -------------------------------------------------------------------------
// new Keyword

// `new` keyword does the following 4 things:
// 1. Creates a new object.
// 2. Sets the prototype of the new object to the prototype of the constructor function.
// 3. Binds this inside the constructor function to the new object.
// 4. Returns the new object, unless the constructor function returns its own object.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Annie', 21);
console.log(person1);