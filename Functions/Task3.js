// -> Problem 3: Check if a Number is Even or Odd
// Statement: Write a named function 'isEven' that takes a number as an argument and returns 'true' if the number is even, otherwise 'false'. Also, write an expression function 'isOdd' that takes a number as an argument and returns 'true' if the number is odd, otherwise 'false'.

function checkNum(num) {
    return (num%2==0);
}

console.log(checkNum(5));