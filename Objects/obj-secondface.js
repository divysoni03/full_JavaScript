// spread op, destructuring, computed props

// var library = {
//     book1: {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     book2: {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     book3: {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }
// };

// spread operator
// var book1 = {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     readingStatus: true
// }
// console.log({...library});


//destructuring
// var {book1:val, ...others} = library
// console.log(val.author);

// console.log(others.book2.title);

// var myObj = {
//     fname: "Divy",
//     lname: "Soni",
//     age: 78,
//     gender: "Male",
//     address: {
//         city: "GNR",
//         state: "GUJ",
//         country: "IN",
//     },
// }

// console.log({...myObj});


// var {fname:fn, lname:ln, ...newObj} = myObj
// console.log(fn, ln, newObj.age);
// console.log(newObj.address);

// var {address:{city}} = myObj
// console.log(city);

//Computed Props
var key1 = "fname"
var key2 = "lname"
var key3 = "age"
var key4 = "gender"
var key5 = "address"


var person = {
    [key1]: "Ronak",
    [key2]: "Patel",
    [key3]: 23,
    [key4]: "Male",
    [key5]: "IN",
}

console.log(person);