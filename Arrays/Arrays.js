/*
Arrays:
> When we want to store multiple data of same data type, there we can use arrays
> Array can be accessed via index (starts from 0).

*/
// var students = []   // Empty Array

// students[0] = "Tanvi"
// students[1] = "Smit"
// students[2] = "Dhairya S"
// students[3] = "Dhairya Patel"

// console.log(students);
// console.log(Array.isArray(students), students.length);

// marks = [90, 56, 34, 67]

// for (let i = 0; i < students.length; i++) {
//     console.log(`Name: ${students[i]} -> Marks: ${marks[i]}`);
// }

//traverse -> print/access array elements -> for each loop

// students.forEach(ele => {
//     console.log(ele);
// });

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

// console.log(veggies.pop()); //remove last
// console.log(veggies.shift()); //remove first
// console.log(veggies.unshift("new element")); //add element at start

// console.log(veggies.slice(0, 5));
// console.log(veggies.splice(0, 5, "new element 1", "new element 2", "new element 3"));

// var arr = []
// veggies.fill(10, 2, 5);
// console.log(veggies[5], veggies);

// console.log(veggies.toString());

// console.log(veggies.at(10));

// var arr = [0, 1]
// console.log(arr.concat(veggies));
