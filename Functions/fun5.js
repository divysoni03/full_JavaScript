//Default Parameters

// function add(n1=0, n2=0) {
//     console.log(n1+n2);
// }
// add()   //default params
// add(2, 3)


//rest parameters

// var arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

// function fun(n1, n2, n3, n4, ...bakiData) {
//     console.log(n1);
//     console.log(n2);
//     console.log(n3);
//     console.log(n4);
//     console.log(bakiData);
// }

// fun(...arr)


// function add(...rest) {
//     var sum = 0;
//     for(const i of rest) {
//         sum += i;
//     }
//     console.log(sum);
// }

// add(1, 2, 3)

// ### Default Parameters:
// 1. Write a function `greet(name, greeting)` that takes a `name` and a `greeting` (both strings), and logs the greeting with the name. If no greeting is provided, default to "Hello".
// function greet(name, greeting="Hello") {
//     console.log(greeting," ",name);
// }
// greet("Divy", "congrats");

// 2. Create a function `calculateArea(length, width)` that calculates the area of a rectangle. If only `length` is provided, assume it's a square and calculate the area accordingly.
// function calculateArea(length, width=length) {
//     return length*width;
// }
// console.log(calculateArea(2,6)); // output : 12
// console.log(calculateArea(2)); // output : 4

// 3. Define a function `printMessage(message = "No message provided")` that prints a given message. If no message is provided, it should print "No message provided".
// function printMessage(msg = "No message provided.") {
//     console.log(msg);
// }
// printMessage("Hello from bob.");
// printMessage();

// 4. Implement a function `sum(a, b = 0)` that returns the sum of two numbers. If only one number is provided, assume the second number is 0.
// function sum(a, b=0) {
//     return a+b
// };
// console.log(sum(1,2));
// console.log(sum(5));




// ### Rest Parameters:



// 5. Create a function `sumAll(...numbers)` that sums all the numbers passed to it as arguments and returns the result.
// function sumAll(...num) {
//     let ans =0;
//     for(const i in num) {
//         ans += num[i];
//     }
//     return ans;
// }
// console.log(sumAll(1,2,3,4,5,6));

// 6. Define a function `multiply(multiplier, ...numbers)` that multiplies a given `multiplier` with all the numbers provided after it and returns an array of the results.
// function multiply(multiplier, ...num) {
//     for(const i of num) {
//         console.log(i*multiplier, ", ");
//     }
// }
// multiply(2, 1,2,3,4,5,6,7);

// 7. Write a function `mergeArrays(...arrays)` that merges multiple arrays into a single array and returns it.
// function mergeArrays(...arrays) {
//     let ans = [];
//     for (let i of arrays) {
//         ans = ans.concat(i);
//     }
//     return ans;
// }
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];
// console.log(mergeArrays(arr1, arr2, arr3));


// 8. Implement a function `logArguments(...args)` that logs all the arguments passed to it.
// function logArguments(...args) {
//     for(const i in args) {
//         console.log(i,".", args[i]);
//     }
// }
// let arg1 = "use phone";
// let arg2 = "go through stairs";
// let arg3 = "don't play games";
// logArguments(arg1, arg2, arg3);



// ### Combined Practice:
// 9. Develop a function `calculateAverage(...numbers)` that calculates and returns the average of all the numbers passed to it. If no numbers are provided, return 0.
// function calculateAverage(...num) {
//     if(num.length == 0) {
//         return 0;
//     }
//     else {
//         let sum = 0;
//         for(const i of num) {
//             sum+=i;
//         }
//         return (sum/num.length);
//     }
// }
// console.log(calculateAverage(2,2,4,4));

// 10. Write a function `formatDate(day, month, year = new Date().getFullYear())` that formats and returns a date string in `DD/MM/YYYY` format using the given day, month, and year parameters. If year is not provided, default to the current year.
// function formatDate(day, month, year = new Date().getFullYear()) {
//     return `${day}/${month}/${year}`;
// }
// console.log(formatDate(30,3));
// console.log(formatDate(30,3,2006));


//Parameter Destructuring

// function All(n1=10, n2, ...rest) {
//     console.log(n1);
//     console.log(n2);
//     console.log(rest);

//     const [val1, val2] = rest;
//     console.log(val1);
//     console.log(val2);
// }

// All(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


// --> tasks :

// ### Parameter Destructuring:
// 1. Write a function `sum` that takes an object `{ a, b }` as a parameter using destructuring and returns the sum of `a` and `b`.
// var obj = {
//     a:5,
//     b:10,
// }
// function sumOfObject({a, b}) {
//     return a+b;
// }
// console.log(sumOfObject(obj));


// 2. Explain how you can use parameter destructuring to swap two variables `x` and `y` without using a temporary variable.
// let array = [1,2];

// var [a,b] = array;
// console.log("Before Swapping : ",a,b);
// a = a+b; //1+2 ,a=3
// b = a-b; //3-2 ,b=1
// a = a-b; //3-1 ,a=2
// console.log("After Swapping :", a,b);

// 3. Create a function `printUser` that takes an object `{ name, age }` and logs `"Name: <name>, Age: <age>"` using destructuring in the function parameter.
// var obj = {
//     Name : "bob",
//     age : 18,
// }

// const {Name : nm, age : ag} = obj;
// console.log("Name : ", nm);
// console.log("age : ", ag);

// 4. Write a function `getFullName` that takes an object `{ firstName, lastName }` as an argument using destructuring and returns the full name as a string.
// var obj = {
//     firstName: "",
//     lastName: "",
// };
// function getFullName(obj) {
//     // obj.firstName = prompt("Enter First Name :");
//     // obj.lastName = prompt("Enter Last Name :");
//     obj.firstName = "bob";
//     obj.lastName = "champ";
// }

// getFullName(obj);
// const { firstName: _Fname, lastName: _Lname } = obj;
// console.log("First Name :", _Fname);
// console.log("Last Name :", _Lname);


// 5. Implement a function `getConfig` that accepts an object `{ url, method }` and logs `"Request to <url> using method <method>"` using parameter destructuring.
// var obj = {
//     url : "",
//     method : "",
// };

// function getConfig(obj) {
//     obj.url = "www.google.com";
//     obj.method = "Post";
// }

// getConfig(obj);
// const {url : _url, method : _method} = obj;

// console.log(`Request to ${_url} Using method ${_method}.`);