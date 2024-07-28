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

// 2. Create a function `calculateArea(length, width)` that calculates the area of a rectangle. If only `length` is provided, assume it's a square and calculate the area accordingly.

// 3. Define a function `printMessage(message = "No message provided")` that prints a given message. If no message is provided, it should print "No message provided".

// 4. Implement a function `sum(a, b = 0)` that returns the sum of two numbers. If only one number is provided, assume the second number is 0.

// ### Rest Parameters:
// 5. Create a function `sumAll(...numbers)` that sums all the numbers passed to it as arguments and returns the result.

// 6. Define a function `multiply(multiplier, ...numbers)` that multiplies a given `multiplier` with all the numbers provided after it and returns an array of the results.

// 7. Write a function `mergeArrays(...arrays)` that merges multiple arrays into a single array and returns it.

// 8. Implement a function `logArguments(...args)` that logs all the arguments passed to it.

// ### Combined Practice:
// 9. Develop a function `calculateAverage(...numbers)` that calculates and returns the average of all the numbers passed to it. If no numbers are provided, return 0.

// 10. Write a function `formatDate(day, month, year = new Date().getFullYear())` that formats and returns a date string in `DD/MM/YYYY` format using the given day, month, and year parameters. If year is not provided, default to the current year.



//Parameter Destructuring

function All(n1=10, n2, ...rest) {
    console.log(n1);
    console.log(n2);
    console.log(rest);

    const [val1, val2] = rest;
    console.log(val1);
    console.log(val2);
}

All(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// ### Parameter Destructuring:
// 1. Write a function `sum` that takes an object `{ a, b }` as a parameter using destructuring and returns the sum of `a` and `b`.
// 2. Explain how you can use parameter destructuring to swap two variables `x` and `y` without using a temporary variable.
// 3. Create a function `printUser` that takes an object `{ name, age }` and logs `"Name: <name>, Age: <age>"` using destructuring in the function parameter.
// 4. Write a function `getFullName` that takes an object `{ firstName, lastName }` as an argument using destructuring and returns the full name as a string.
// 5. Implement a function `getConfig` that accepts an object `{ url, method }` and logs `"Request to <url> using method <method>"` using parameter destructuring.