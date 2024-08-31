// Methods in JS

// Methods are functions that are associated with an object. They are defined within the object and can perform actions using the object's properties

// const car = {
//     brand: 'Toyota',
//     model: 'Corolla',
//     startEngine: function() {
//         console.log(`${this.brand} ${this.model}'s engine started.`);
//     }
// }

// car.startEngine();
// --------------------------------------------------------------------------------------------

// This keyword & Window Object

// The `this` keyword refer to the object that is currently calling the function. It's a way to access the properties of an object from within its methods.

// Global context: Refers to the global scope which is `window` in browsers.
// Object context: Refers to the object itself (calling object).

// console.log(this);  //refers to the global object (window in browsers)

// const person = {
//     name: "John",
//     sayName: function() {
//         console.log(this);
//     }
// };

// person.sayName();
// --------------------------------------------------------------------------------------------

// Call, Apply, Bind Method
// These methods are used to explicitly set the value of `this`.
// -> `call`: Calls a function with a specific `this` value and arguments passed individually.
// -> `apply`: Similar to `call`, but arguments are passed as an array
// -> `bind`: Returns a new function where `this` is bound to a specific object.

// function greet(greeting, punctuation) {
//     console.log(`${greeting}, ${this.name}${punctuation}`);
// }

// const person = { name: "Dhairya" };

// greet.call(person, 'Hello', '!');
// greet.apply(person, ['Hi', '.']);

// const boundGreet = greet.bind(person);
// boundGreet('Good morning', '!!');
// --------------------------------------------------------------------------------------------

// Some Warning
// ============================================================================================


// 'use strict';

// -> Global `this` in Strict Mode: In strict mode, `this` is `undefined` in the global scope instead of the window object.

// function showThis() {
//     console.log(this);
// }

// showThis();

// -> Arrow Functions and `this`: Arrow functions don't have their own `this`. They inherit `this` from the surrounding scope.

// without strict mode this will get used from lexical scope
// with strict mode this will get used from surrounding scope

// function Outer() {
//     this.value = 1;

//     //Regular Function
//     this.regularFunction = function() {
//         console.log(this.value);    // `this` refers to `Outer` function
//     }

//     //Arrow Function
//     this.arrowFunction = function() {
//         // in case of strict mode `this` refers to surrounding scope (Outer)
//         console.log(this.value);    // `this` still refers to `Outer` function
//     }
// }

// const obj = new Outer();
// obj.regularFunction();
// obj.arrowFunction();
// --------------------------------------------------------------------------------------------

// -> Callback Function: Be cautious when passing callback methods as callbacks, as they may lose their `this` context.

// var obj = {
//     value: 2,
//     showValue: function() {
//         console.log(this.value);
//     },
//     delayedShow: function() {
//         setTimeout(function() {
//             console.log(this.value);    // `undefined`, strict mode has no global `this`
//         }.bind(this), 1000);   // `bind(this)` is needed to retain the context
//     },
// };

// obj.showValue();
// obj.delayedShow();
// --------------------------------------------------------------------------------------------

// Factory functions & discuss some memory related problems.
// A factory function is a type of function that returns a new object each time it is called.

// function createPerson(name) {
//     return {
//         name: name,
//         greet() {
//             console.log(`Hi, I am ${name}`);
//         }
//     }
// }

// const person1 = createPerson('Tom');
// const person2 = createPerson('Jerry');

// person1.greet();
// person2.greet();

// First Solution to that problem

function greet() {
    console.log(`Hi, I am ${this.name}`);
}

function createPerson(name) {
    return {
        name: name,
        greet: greet,
    }
}

const person1 = createPerson('Tom');
const person2 = createPerson('Jerry');

person1.greet();
person2.greet();


// --------------------------------------------------------------------------------------------