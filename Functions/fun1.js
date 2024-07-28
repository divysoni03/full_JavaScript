/*
Functions in JS: A piece of code that structures the whole code into smaller blocks and more reusable units

basic syntax of function:

function functionName(parameters) {
    // function body
    // ...
}


we have total 4 categories of functions:
1. without return type and without arguments
2. without return type and with arguments
3. with return type and without arguments
4. with return type and with arguments


Types of Functions:

1. Name Function: support all categories
2. Expression Function: support all categories
3. Arrow Function: support all categories
4. Anonymous Function
5. IIFE Function: support all categories
6. Generator Function
7. Recursive Function
8. Callback Function
9. Higher-Order Function
10. getter-setter Function



*/
// -> Name Function

/*
//function declaration/definition
// function say() {
//     console.log("saying");
// }
function square(a) {
    // console.log(a**2);
    return a**2;
}

function add(a, b) {
    var c = a+b;
    console.log(c);
}

function say(message) {
    console.log(message);
}

//function calling
say("Hello")
console.log(square(12))
add(23, 45)


function say() {
    console.log("(～￣▽￣)～ ✨");
}

function addition(q, r) {
    console.log(q+r);
}

// addition(2, 32)

function return_gift() {
    return "O_O"
}

// var got_it = return_gift()
// console.warn(got_it);

function setBackup() {
    var input = confirm("Are you Free?")
    if(input) {
        console.log("You can come at anytime.");
    } else {
        console.log("Sorry No time.");
}
}

setBackup()
*/

//expression function
// var say_something = function() {
//     console.log("ㄟ( ▔, ▔ )ㄏ");
// }

// say_something();

// var sum = function(n1, n2) {
//     console.log(`Addition of ${n1} and ${n2} is ${n1+n2}`);
// }

// sum(2, 3);


// var avg = function(arr) {
//     let sum = 0;
//     for(let i of arr) {
//         sum += i;
//     }
//     return sum / arr.length;
// }
// console.log(avg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))