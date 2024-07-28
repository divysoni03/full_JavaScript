// armstrong number using recursion

// var num = +prompt("Enter a number : ");

//recursion function

// function armstrong (num) {
//     if(num ===0) return 0;

//     const digit = num%10;
//     return digit**3 + armstrong(parseInt(num/10));
// }
// function isArmstrong(num) {
//     return armstrong(num) === num;
// }

// console.log(isArmstrong(153)? "Yes" : "No");

//Recursive Functions: A function which calls itself again and again

// function factorial(n) {
//     if(n <= 1) return 1;
//     return n * factorial(n-1);
// }

// console.log(factorial(7));

// Armstrong Number : 153

// 1^3 + 5^3 + 3^3
// 1 + 125 + 27 = 153

// {
//     //block scope
// }

// function armstrong(num) {
//     if(num==0) return 0;

//     const digit = num % 10;
//     return Math.pow(digit, 3) + armstrong(parseInt(num/10));
// }

// function isArmstrong(num) {
//     return armstrong(num) === num;
// }

// console.log(isArmstrong(153));


//callback function: pass other functions in tht params

function add(n1, n2) {
    console.log("Addition is", n1+n2);
}

function sub(n1, n2) {
    console.log("Subtraction is", n1-n2);
}

// function fun(callback) { //receives function as parameter and we can change its name like here is
//                            callback function.
//     let n1 = 2;
//     let n2 = 4;
//     callback(n1, n2);
// }

// fun(sub); // we can pass any function in parameter 

// Higher Order Function : returns another function

// function myfun1(callback) {
//     var sum = callback();
//     console.log(sum);
// }

// function higherOrderFn(callback2) {
//     function inner_Fn() {
//         var n1 = 12;
//         var n2 = 13;
//         return n1+n2;
//     }

//     callback2(inner_Fn);
// }

// higherOrderFn(myfun1)


//nested function

var n1 = 100;

console.log("Value of N1 (before outer):", n1);
function outer_fn() {
    var n1 = 12;
    console.log("Value of N1 (before inn1):", n1);

    function inn1() {
        var n1 = 13;
        console.log("Value of N1 (before inn2):", n1);
        
        function inn2() {
            var n1 = 14;
            console.log("Value of N1 (in inn2):", n1);
        }
        inn2();
        console.log("Value of N1 (after inn2):", n1);
    }
    inn1();
    console.log("Value of N1 (after inn1):", n1);
}
outer_fn();
console.log("Value of N1 (after outer):", n1);

console.log(window.n1); //global attr