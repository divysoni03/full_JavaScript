// -> Problem 2: Find the Maximum of Three Numbers
// Statement: Write a named function 'findMax' that takes three numbers as arguments and returns the maximum of the three. Also, write an expression function 'findMin' that takes three numbers as arguments and returns the minimum of the three.

function maxNumber(a,b,c) {
    if(a>b) {
        return a>c ? a : c;
    }
    else {
        return b>c ? b : c;
    }
}

console.log(maxNumber(1,2,7));
console.log(maxNumber(5,2,1));
console.log(maxNumber(5,9,10));