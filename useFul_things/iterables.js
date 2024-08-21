// Iterable: it is an object that implements the iterable protocol, meaning it has a `symbol.iterator` method. this method returns an iterator, which is an object with a `next` method that return object with two properties: `value` and `done`.

// const arr = [1, 2, 3];

// for (const elem of arr) {
//     console.log(elem);
// }

// Optional Chaining (?.): It is a feature that allows you to safely access deeply nested properties of an object without having to explicitly check each level for `null` or `undefined`

// const user = {
//     fname: 'Divy',
//     lname: 'Soni',
//     address: {
//         city: "Gandhinagar",
//         state: "Gujarat",
//         country: "India"
//     }
// }

// console.log(user);
// console.log(user.gender);

// -> calling objects
// const user = { 
//     profile: {
//         name: 'Dhairya',
//     } 
// };

// console.log(user.profile?.name);
// console.log(user.profile?.city);


// -> calling methods
// const obj = {
//     greet: () => 'Hello'
// };

// console.log(obj.greet?.());
// console.log(obj.farewell?.());

// -> array index
// const data = [1, 2, 3]
// console.log(data[2].toFixed);

// Object Assign: assign new properties to an existing object or to a new object

// var obj = {
//     fname: "Sophia",
//     lname: "Robinson"
// }
// console.log(obj);

// var newObj = Object.assign({}, obj, {age: 20});
// console.log(newObj);

// Object.assign(obj, {age:20, gender: "female"})
// console.log(obj);

// Sets

// var arr = [11,12,13,14,15,11,12,13,14,18];
// console.log(arr);

// var mySet = new Set(arr);
// console.log(mySet);

// mySet.add('entry')
// console.log(mySet.has(13));
// mySet.forEach(val => {
//     console.log(val);
// })

// console.log(mySet.size);
// console.log(mySet.delete(13));

// mySet.clear()
// console.log(mySet.entries());
// console.log(mySet.keys());
// console.log(mySet.values());

// Maps

const map = new Map();

map.set('name', 'Maggie Sherman');
map.set(42, 'The Answer');
map.set(true, 'Boolean key');
map.set({a: 1}, 'Object key');

console.log(map);

// console.log(map.get('name'));
// console.log(map.get(42));
// console.log(map.get(true));

// console.log(map.has(true));
// map.delete(42)
// map.forEach((value, key) => {
//     console.log(`${key} - ${value}`);
// })

// for (let [k, v] of map) {
//     console.log(`${k} - ${v}`);
// }

// console.log(map.entries());
// console.log(map.keys());
// console.log(map.values());