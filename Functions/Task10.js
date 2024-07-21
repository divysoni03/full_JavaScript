// -> Problem 10: Check if a Number is Prime
// Statement: Write a named function 'isPrime' that takes a number as an argument and returns 'true' if the number is prime, otherwise 'false'. Also, write an expression function 'isPrimeExpression' that does the same.

function checkPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for(let i=5;i*i<n/2;i+=6) {
        if(n%i === 0 || n%(i+2) ===0) {
            return false;
        }
    }
    return true;
}
console.log(checkPrime(4) ? "yes" : "No" );