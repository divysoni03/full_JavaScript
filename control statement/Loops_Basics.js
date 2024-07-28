// > WAP to find power of a given number
// Output :--
// Enter number & Power :2
// 5
// Result of power : 32
let root = +prompt("Enter Root Number :");
let power = +prompt("Enter Power : ");
let ans =0;
for(let i =0;i<power;i++) {
    ans *= root;
}
console.log(`Power using loop,\nroot number : ${root},\npower number :${power},\nFInally ans : ${ans}`) ;



// > WAP to find factorial of a given number
// Output:--
// Enter the no:5
// The factorial is 120
let number = +prompt("Enter a number :");
let fact=1;
while (number > 0) {
    fact *= number--;
}
console.log(`Entered number :${number},\nFactorial : ${fact}`);

// > WAP check the no. Armstrong or not
// Output:--
// Enter one no.: 153
// It is armstrong no
let num = +prompt("Enter a 3 digit number :");
let temp = num;
let arms = 0;
while(temp != 0) {
    let rem = temp %10;
    arms += (rem*rem*rem);
    temp /=10;
}
if(num === arms){
    console.log(`Entered number ${num} is Armstrong Number.`);
}
else {
    console.log(`Entered number ${num} is not Armstrong number.`);
}

// > WAP to print whether no. is Palindrome or not
// Output :--
// Enter a no.: 1221
// palindrome no
var num1 = 1221;
let digits = num1.toString().split('');
let i = 0, j = digits.length - 1;

while (i < j) {
    let temp = digits[i];
    digits[i] = digits[j];
    digits[j] = temp;
    i++;
    j--;
}
console.log(digits.join('') === num1.toString() ? "Yes" : "No");


// > WAP to print Fibonacci Series
// Output:--
// 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,
let a =0,b=1;
console.log(a,", ",b, ", ");
for(let i=2;i<12;i++){
    let c = a+b;
    console.log(c, ", ");
    a= b;
    b= c;
}

// > WAP to find sum of digit.
// Output:-
// Enter a Number:15
// Sum of digits of a number:6
var number1 = prompt("Enter a number :"); 
let sum =0;
while(number1!==0) {
    sum += number1%10;
    number1/=10;
}
console.log("Sum : ", sum);

// > WAP to find sum of odd digit of entered digit.
// Output:-
// Enter a Number:1567
// Sum of Odd digits of a number:8



// Using While and Do While loop

// --------------------------------------
//            FOR LOOP
// --------------------------------------

// > WAP to print series as 1 + x^1 + x^2 + x^3 +x^4…..x^n
// Output:-
// Enter value of x and n: 2, 2
// Sum is 7.

// > WAP to print series as 1-3+5-7+9……n
// Output:- 
// Enter one value : 7
// Sum of series is 4

// > WAP to print series 1 + x! ………… n!
// Output :-
// Sum of all factorials is 153