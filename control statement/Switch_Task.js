// 1. Get character as input and check whether vowel / consonant Using SWITCH CASE
// Output :-
// Enter any character : c
// Letter is consonant
var char = prompt("Enter a Character :");
switch(char) {
    case 'a':case 'A':
        console.log(`Entered character \'${char}\' is VOWEL`);
        break;
    case 'e':case 'E':
        console.log(`Entered character \'${char}\' is VOWEL`);
        break;
    case 'i':case 'I':
        console.log(`Entered character \'${char}\' is VOWEL`);
        break;
    case 'o':case 'O':
        console.log(`Entered character \'${char}\' is VOWEL`);
        break;
    case 'u':case 'U':
        console.log(`Entered character \'${char}\' is VOWEL`);
        break;
    default:
        console.log(`Entered character \'${char}\' is CONSONANT`);
        break;
}


// 2. WAP to check whether entered no. in between 1-5 , 6-10 or greater than 10.
// Output:-
// Enter any number : 5
// Between 1 – 5
var num = +prompt("Enter a number :");
switch(num) {
    case (num>=1 && num<=5):
        console.log(`Entered number ${num} is between 1-5`);
        break;
    case (num>5 && num<=10):
        console.log(`Entered number ${num} is between 6-10`);
        break;
    case (num >10):
        console.log(`Entered number ${num} is greater then 10`);
        break;
    default:
        console.log(`ERROR: Invalid Input,Please Try Again.`);
        break;
}

// 3. Write switch case for 1 for One, 2 for Two till 10. then print out of range
// Output:-
// Enter no between 1 to 5
// 4
// Four
var num = +prompt("Enter a number between (1-5):");
switch(num) {
    case 1:
        console.log(`Entered number ${num} is one`);
        break;
    case 2:
        console.log(`Entered number ${num} is two`);
        break;
    case 3:
        console.log(`Entered number ${num} is three`);
        break;
    case 4:
        console.log(`Entered number ${num} is four`);
        break;
    case 5:
        console.log(`Entered number ${num} is five`);
        break;
}

// 4. Write switch case program to print days of the weeks.
// Output:- 
// Enter the day: 5
// Thursday
var num = +prompt("Enter a number :");
switch(num) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.error("ERROR : invalid input, please try again.");
        break;
}

// 5. Write switch case program to print months of the years.
// Output:- 
// Enter the number between 1 to 12: 2
// February
// ----------------------------------------------------------------------
// 1.C program to print number of days in a month using switch case
// 2.C program to find maximum between two numbers using switch case
// 3.C program to check even or odd number using switch case
// 4.C program to check positive negative or zero using switch case
// 5.C program to find all roots of a quadratic equation using switch case