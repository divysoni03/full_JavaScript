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