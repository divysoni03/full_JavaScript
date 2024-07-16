/*
Arrays:
> When we want to store multiple data of same data type, there we can use arrays
> Array can be accessed via index (starts from 0).

*/
var students = []   // Empty Array

students[0] = "Tanvi"
students[1] = "Smit"
students[2] = "Dhairya S"
students[3] = "Dhairya Patel"

// console.log(students);
// console.log(Array.isArray(students), students.length);

marks = [90, 56, 34, 67]

for (let i = 0; i < students.length; i++) {
    console.log(`Name: ${students[i]} -> Marks: ${marks[i]}`);
}

//traverse -> print/access array elements -> for each loop

students.forEach(ele => {
    console.log(ele);
});

// marks.forEach(m => {
//     console.log(m);
// })

// in JS array may have data that belongs to multiple data type 

// var arr = [12, 23, 4.23, 45.23, "name", "another name"]

// console.log(arr);

// ----------------------------------------------------------------------------------

// Array methods

var veggies = [
    "Bitter Gourd (Karela)",
    "Bottle Gourd (Lauki)",
    "Ridge Gourd (Turai)",
    "Snake Gourd (Galka)",
    "Pointed Gourd (Parwal)",
    "Drumstick (Moringa)",
    "Taro Root (Arbi)",
    "Elephant Foot Yam (Suran)",
    "Ash Gourd (Petha)",
    "Ivy Gourd (Tindora)",
    "Fenugreek Leaves (Methi)",
    "Amaranth Leaves (Patra)",
    "Colocasia Leaves (Arbi ke Patte)",
    "Beet Greens (Chukandar ke Patte)",
    "Mustard Greens (Sarson)",
    "Radish Greens (Mooli ke Patte)",
    "Spinach (Palak)",
    "Fenugreek Seeds Sprouts (Methi Dana)",
    "Cluster Beans (Gawar Phali)",
    "French Beans",
    "Yardlong Beans (Bora)",
    "Broad Beans (Sem)",
    "Green Peas (Matar)",
    "Corn (Makai)",
    "Bamboo Shoots (Karil)",
    "Jackfruit (Kathal)",
    "Raw Banana (Kachcha Kela)",
    "Green Papaya (Kachcha Papita)",
    "Indian Gooseberry (Amla)",
    "Curry Leaves (Kadi Patta)",
    "Raw Mango (Keri)",
    "Sponge Gourd (Nenua)",
    "Brinjal (Baingan)",
    "Lady Finger (Bhindi)",
    "Cabbage (Patta Gobi)",
    "Cauliflower (Phool Gobi)",
    "Radish (Mooli)",
    "Turnip (Shalgam)",
    "Carrot (Gajar)",
    "Tomato (Tamatar)"
]

// console.log(veggies);

// console.log(`Length: ${ veggies.length }`);

// var ret = veggies.push("New Element", "new element 1")
// console.log(ret);

// console.log(veggies.push("element 1","element 2","...")); // pushes new element into array from behind
// console.log(veggies.pop()); //remove last
// console.log(veggies.shift()); //remove first
// console.log(veggies.unshift("new element")); //add element at start

// console.log(veggies.slice(0, 5)); // makes a new array containing only array element within the range given into parameter
// console.log(veggies.splice(0, 5, "new element 1", "new element 2", "new element 3")); // we can add elements manually which will stored into the array at first

// var arr = []
// veggies.fill(10, 2, 5);
// console.log(veggies[5], veggies);

// console.log(veggies.toString());

// console.log(veggies.at(10));

// var arr = [0, 1]
// console.log(arr.concat(veggies));

// var a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// console.log(a.copyWithin(5, 0, 3));

// ... spread operator
// console.log(...a);

// str = ""
// for (let i = 0; i < a.length; i++) {
//     str = str + a[i] + " ";    
// }

// console.log(str);
// a = ['a', 'b', 'c', 'd', 'e']
// b = ['f', 'g', 'h', 'i', 'j']

// var arr = [1, 2, ...a, 9, 10, ...b, 11, [23.2, 34.3, 45.4, 56.5, 67.6]]
// console.log(arr);

// foreach
// arr.forEach(i => {
//     document.write(i + "<br>");
// })

// for in: iterate over all the properties of an array
// for (const i in arr) {
//     console.log(arr[i].etc);
// }

// for of: iterate over the values in the array
// for (const i of arr) {
//     console.log(i);
// }


// Const array 

// const _arr = ["Smit", 'Dhairya_S', "Divy", "Yug", 'Tanvi', 'Dhairya_P', 'Dhruvi', "Nand"];

// console.log(_arr);

// _arr.push("abcd");
// _arr[1] = "Blueberry";

// console.log(_arr);

// Array Destructuring

const fruits = ['apple', 'banana', 'cherry', 'orange']

// basic destructuring
// const [first, second, third] = fruits

// skipping items
// const [first, , second, third] = fruits

// default values
// const [, , , , fourth='default'] = fruits

// using rest syntax
// const [fruit_1, ...restFruits] = fruits

// nested dest...
// const [first, [idx0, idx1, idx2, ...idxr]] = fruits 

//combining with const
// const [first, second, third] = fruits

// first = 'aple'
// console.log(first);