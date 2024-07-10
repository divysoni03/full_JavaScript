/*
control statements: these types of statements are used to control the flow of execution of the program.

> if else statements
> loops
> switch case

4 types of if else statements:

> if statement
if (condition) {
    //body of if
}

> if else statement
if (condition) {
    //body of if
} else {    //optional
    //body of else
}

> ladder if else stmt (if else if)

if (condition 1) {
    //body of if
} else if(condition 2) {
    //body of else...if
} else {    //optional
    //body of else
}

> nested if else

if (condition) {
    if(condition) {
        //body of if
    } else {
        //body of else
    }
} else {
    //body of else
}


*/

// var money = +prompt("Enter the money you have");

// if(money < 100) {
//     console.log("You may eat street food");
// }

// if(money > 100 && money < 500) {
//     console.log("You may eat from McD, KFC, PIZZA");
// } else {
//     console.log("Try Again!");
// }

// ternary operator
// console.log((money > 100 && money < 500) ? "You may eat from McD, KFC, PIZZA" : "Try Again!");
// (money > 100 && money < 500) ? console.log("You may eat from McD, KFC, PIZZA") : console.log("Try Again!");

// console.log("Preferred item: ");
// if(money >= 23 && money <= 50) {
//     console.log("Milk");
//     // alert("Milk");
// } else if(money > 50 && money <= 500) {
//     console.log("Street Food");
//     // alert("Street Food");
// } else if(money > 500 && money <= 1000) {
//     console.log("2-star restaurant");
//     // alert("2-star restaurant");
// } else if(money > 1000 && money <= 10000) {
//     console.log("5-star restaurant");
//     // alert("5-star restaurant");
// } else {
//     console.warn("Nothing is preferred!");
//     // alert("Nothing is preferred!");
// }

/*
Truthy value: true,1,-15,3.14345,"abc",[],[1,2],12n 

Falsy Value : false,0,"",null,undefined,NaN
*/