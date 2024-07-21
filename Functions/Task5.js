// -> Problem 5: Calculate the Factorial of a Number
// Statement: Write a named function 'factorial' that takes a number as an argument and returns its factorial. Also, write an expression function 'factorialExpression' that does the same.

//named function
function factorial (n) {
    if(n == 0) return 1; 
    return n*factorial(n-1);
}

//expression function
var factorialExpression = function(n) {
    if(n==0) return 1;
    return n*factorialExpression(n-1);
}

console.log(factorial(5));
console.log(factorialExpression(5));