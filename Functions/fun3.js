// armstrong number using recursion

// var num = +prompt("Enter a number : ");

//recursion function
function armstrong (num) {
    if(num ===0) return 0;

    const digit = num%10;
    return digit**3 + armstrong(parseInt(num/10));
}
function isArmstrong(num) {
    return armstrong(num) === num;
}

console.log(isArmstrong(153)? "Yes" : "No");