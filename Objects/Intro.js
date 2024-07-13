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

// 2. bracket Notation// An object is an unordered collection of key-value pairs where each pair is called property.

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

// for (const prop in person) {
//     console.log(prop);
// }


// const movies = {
//     names : ["Movie 1", "Movie 2", "Movie 3", "Movie 4"],
//     ratings : [6.7, 6.7, 8.7, 7],
//     releaseYear : [1990, 1997, 2005, 2020]
// }

// console.log(movies);


// for (const idx in movies) {   //props
//     console.log(movies[idx]);
    // for (const val of movies[idx]) {  //values
    //     console.log(val);
    // }
// } 

var shoppingCart = [
    { name: "Milk", quantity: 2, price: 33 },
    { name: "Bread", quantity: 1, price: 40 },
    { name: "Dahi", quantity: 12, price: 23 }
];

var total = 0
for (const i of shoppingCart) {
    total += (i.quantity * i.price)
    // console.log(i.quantity + " " + i.price + " -> " + i.quantity * i.price);
}

console.log(total);
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