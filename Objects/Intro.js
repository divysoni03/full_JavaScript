// An object is an unordered collection of key-value pairs where each pair is called property.

// key : value -> property

var person = {
    fname : "Ricky",
    lname : "Barton",
    age : 56
}

// console.log(typeof person);
// console.log(person);

// Accessing Object Properties

// 1. using dot notation
// console.log(person.fname, person.age);

// 2. bracket Notation
// console.log(person["fname"]);

// How to modify/update property values

// 1. using dot notation
// person.fname = "Mattie";
// console.log(person);

// 2. bracket Notation
// person['lname'] = "Miles";
// console.log(person);


// adding new property

// 1. using dot notation
// person.country = "British Indian Ocean Territory"

// 2. bracket Notation
// person['email'] = "mujpo@iranet.tw"
// console.log(person);

// removing property

// 1. using dot notation
// delete person.country

// 2. bracket Notation
// delete person['email']

// delete person;  //invalid

// console.log(person);

// console.log('age' in person);
// console.log(person.country);    //undefined

for (const prop in person) {
    console.log(prop);
}