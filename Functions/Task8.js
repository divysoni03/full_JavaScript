// -> Problem 8: Find the Greatest Common Divisor (GCD)
// Statement: Write a named function 'gcd' that takes two numbers as arguments and returns their greatest common divisor. Also, write an expression function 'gcdExpression' that does the same.

function GCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(GCD(36, 60)); 
