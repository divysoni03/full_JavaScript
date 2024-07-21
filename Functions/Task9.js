// -> Problem 9: Calculate the Fibonacci Sequence
// Statement: Write a named function 'fibonacci' that takes a number 'n' as an argument and returns the first 'n' numbers in the Fibonacci sequence. Also, write an expression function 'fibonacciExpression' that does the same.

function fibonacci(n) {
    if(n === 0 ) return 0;
    else if(n === 1) return 1;
    else return fibonacci(n-1) + fibonacci(n-2); 
}

for(let i=0;i<=10;i++) {
    console.log(fibonacci(i), ", ");
}