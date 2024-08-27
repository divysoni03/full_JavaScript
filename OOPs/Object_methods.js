/*
let person = {
    firstname: 'Vedant',
    lastname: 'Thakkar',
    // greet: function () {
    //     console.log('Hello!');
    // },
    // greet() {   //ES6
    //     console.log('Hello!');
    // },
    a: this == window,  //this here is in global context
    getFullName() {
        return this.firstname + ' ' + this.lastname //this here is in local context
    }
}
// person.gender = "male";
// person.greet = function () {
//     console.log('Hello!');
// }
// person.greet();
console.log(person.getFullName());
*/
// let counter = {
//     count: 0,
//     next: function() {
//         return ++this.count;
//     },
// };

// console.log(counter.next());

this.color = "Red";
console.log(window.color);
// this.color = "Red";
// console.log(window.color);

// --------------------------------------------------------------------
// How to create multiple objects using function

// function All(fname, lname) {
//     var user = {};
//     user.firstName = fname;
//     user.lastName = lname;
//     user.greet = function() {
//         console.log(`Hello, your name is ${user.firstName} ${user.lastName}.`);
//     }
//     return user;
// }

// var obj = All("Willie", "Owen");
// var obj1 = All("Caleb", "Greer");

// console.log(obj);
// console.log(obj1);

// obj.greet();
// obj1.greet();

var AllMethods = {
    greet : function() {
        console.log(`Hello, your name is ${this.firstName} ${this.lastName}.`);
    },

    hello: function() {
        console.log(`Hello, ${this.lastName}`);
    }
}

function All(fname, lname) {
    var user = Object.create(AllMethods);
    user.firstName = fname;
    user.lastName = lname;
    return user;
}

var obj2 = All("Dhairya", "Patel");
var obj3 = All("Divy", "Soni");

console.log(obj2);
console.log(obj3);

obj2.greet();
obj3.greet();

obj2.hello();
obj3.hello();