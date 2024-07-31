// Hoisting : 

// console.log(val);   //ref error
// val = 12

// console.log(val);   //undefined
// var val = 12

// console.log(val);   //ref error
// let val = 12

// val = 12
// console.log(val);   //variable is hoisted
// var val;


Hoisting();

function Hoisting() {
    console.log("This is hoisting supported function");
}

//expression, anonymous, arrow are not hoisted fns

// var Hoisting = function() {
//     console.log("This is hoisting supported function");
// }

// var Hoisting = () => {
//     console.log("This is hoisting supported function");
// }

// lexical scope.
// block scope vs function scope

// {
//     let a = 23;
//     console.log(a);
// }

// function abc() {
//     let a = 23;
//     console.log(a);
// }
// abc();
// console.log(a);

var n1 = 100;

function add(n1) {
    var n2 = 10;
    function inner() {
        var val = 20;
        console.log("inner val 1:", val);
        console.log("inner val 2:", n2);
    }
    inner();
    console.log("inner val 1:", val);
    console.log("inner val 2:", n2);
}

add(n1);