// 1. Write a C program to accept two integers and check whether they are equal or not.
// Test Data : 15 15
// Expected Output :
// Number1 and Number2 are equal
var num1 = +prompt("Enter first number : ");
var num2 = +prompt("Enter second number : ");
if(num1 === num2){
    document.write(`Your Entered number ${num1} and ${num2} is same...`);
}
else {
    document.write(`Your Entered number ${num1} and ${num2} is NOT same...`);
}


// 2. Write a C program to check whether a given number is even or odd.
// Test Data : 15
// Expected Output :
// 15 is an odd integer
var num = +prompt("Enter a Number : ");
if(num%2 == 0){
    document.write(`Your Entered Number ${num} is EVEN`);
}
else {
    document.write(`Your Entered Number ${num} is ODD`);
}

// 3. Write a C program to check whether a given number is positive or negative.
// Test Data : 15
// Expected Output :
// 15 is a positive number
var num = +prompt("Enter Your Number :");
if(num > 0) {
    document.write(`Your Entered Number ${num} is POSITIVE`);
}
else {
    document.write(`Your Entered Number ${num} is NEGATIVE`);
}

// 4. Write a C program to find whether a given year is a leap year or not.
// Test Data : 2016
// Expected Output :
// 2016 is a leap year.
var num = +prompt("Enter Year : ");
if(num % 4 == 0) {
    document.write(`Your Entered Year ${num} is leap Year`);
}  
else {
    document.write(`Your Entered Year ${num} is not a leap Year`);
}

// 5. Write a C program to read the age of a candidate and determine whether he is eligible to cast his/her own vote.
// Test Data : 21
// Expected Output :
// Congratulation! You are eligible for casting your vote.
var num = +prompt("Enter Your Age : ");
if(num >= 18) {
    document.write(`Congratulation! You are eligible for casting your vote.`);
}
else {
    document.write(`You are not eligible for casting your vote.`);
}

// 6. Write a C program to read the value of an integer m and display the value of n is 1 when m is larger than 0, 0 when m is 0 and -1 when m is less than 0.
// Test Data : -5
// Expected Output :
// The value of n = -1
var m = +prompt("Enter Your Number :");
if(m > 0) {
    n = 1;
}
else if(m < 0) {
    n = -1;
}
else {
    n = 0;
}
document.write(`Your Entered Number ${m} so according to that n : ${n}`);

// 7. Write a C program to accept the height of a person in centimeters and categorize the person according to their height.
// Test Data : 135
// Expected Output :
// The person is Dwarf.
var height = +prompt("Enter Your Height(in cm): ");
if(height >0 && height <100) {
    document.write("Oh very dwarf");
}
else if(height >100 && height < 152){
    document.write("At list ur 5 ft");
}
else if(height >152 && height <182) {
    document.write("very close to 6ft");
}
else {
    document.write("congratulations ur 6+ ft tall ");
}

// 8. Write a C program to find the largest of three numbers.
// Test Data : 12 25 52
// Expected Output :
// 1st Number = 12,        2nd Number = 25,        3rd Number = 52
// The 3rd Number is the greatest among three
var num1 = +prompt("Enter first Number : ");
var num2 = +prompt("Enter second Number : ");
var num3 = +prompt("Enter third Number : ");

if(num1 > num2) {
    if(num1 > num3){
        document.write(`Your Entered Number ${num1} is the largest of all`);
    }
    else {
        document.write(`Your Entered Number ${num3} is the largest of all`);
    }
}
else {
    if(num2 > num3) {
        document.write(`Your Entered Number ${num2} is the largest of all`);
    }
    else {
        document.write(`Your Entered Number ${num3} is the largest of all`);
    }
}

// 9. Write a C program to accept a coordinate point in an XY coordinate system and determine in which quadrant the coordinate point lies.
// Test Data : 7 9
// Expected Output :
// The coordinate point (7,9) lies in the First quadrant.
var X = +prompt("Enter X Coordinates : ");
var Y = +prompt("Enter Y Coordinates : ");

if(X > 0 && Y > 0) {
    document.write(`Entered Coordinates (${X,Y}}) both are Positive so It's First Quadrant.`);
}
else if(X<0 && Y>0) {
    document.write(`Entered Coordinates (${X,Y}}) Where X is Positive and Y is Negative so It's Second Quadrant.`);
}
else if(X<0 && Y<0) {
    document.write(`Entered Coordinates (${X,Y}}) both are Negative so It's Third Quadrant.`);
}
else if(X>0 && Y<0) {
    document.write(`Entered Coordinates (${X,Y}}) Where X is Positive and Y is Negative so It's Fourth Quadrant.`);
}
else {
    document.write(`ERROR : Invalid Input, Please Try Again.`);
}
// 10. Write a C program to determine eligibility for admission to a professional course based on the following criteria: Go to the editor
// Eligibility Criteria : Marks in Maths >=65 and Marks in Phy >=55 and Marks in Chem>=50 and Total in all three subject >=190 or Total in Maths and Physics >=140 ------------------------------------- Input the marks obtained in Physics :65 Input the marks obtained in Chemistry :51 Input the marks obtained in Mathematics :72 Total marks of Maths, Physics and Chemistry : 188 Total marks of Maths and Physics : 137 The candidate is not eligible.
// Expected Output :
// The candidate is not eligible for admission.
var maths = +prompt("Enter Your Maths Marks :");
var phy = +prompt("Enter Your Physics Marks :");
var chem = +prompt("Enter Your Chemistry Marks :");

if(maths>=65 && phy>=55 && chem>=50) {
    document.write(`The Candidate is eligible for admission.`);
}
else {
    document.write(`The Candidate is not eligible for admission.`);
}

// 11. Write a C program to calculate the root of a quadratic equation.
// Test Data : 1 5 7
// Expected Output :
// Root are imaginary;
// No solution.
console.log("Quadratic Equation : Ax^2 + Bx + C");
var a = +prompt("Enter value of A :");
var b = +prompt("Enter value of B :");
var c = +prompt("Enter value of C :");

var root = (-b + Math.sqrt((Math.pow(b,2))-(4*a*c)))/2*a;
console.log(`Roots are : +${root} and -${root}`);

// 12. Write a C program to read the roll no, name and marks of three subjects and calculate the total, percentage and division.
// Test Data :
// Input the Roll Number of the student :784
// Input the Name of the Student :James
// Input the marks of Physics, Chemistry and Computer Application : 70 80 90
// Expected Output :
// Roll No : 784
// Name of Student : James
// Marks in Physics : 70
// Marks in Chemistry : 80
// Marks in Computer Application : 90
// Total Marks = 240
// Percentage = 80.00
// Division = First
var studentName = prompt("Enter Students Name :");
var rollNo = +prompt("Enter Roll Number :");
var chem = +prompt("Enter Your chemistry Marks :");
var phy = +prompt("Enter Your Physics Marks :");
var maths = +prompt("Enter Your Maths Marks :");

var totalMarks = chem + phy + maths;
var percentage = (totalMarks /300) *100;

console.log(`Student Name : ${studentName}`);
console.log(`Student RollNo : ${rollNo}`);
console.log(`Marks in Physics : ${phy}`);
console.log(`Marks in Chemistry : ${chem}`);
console.log(`Marks in Maths : ${maths}`);
console.log(`Total Marks : ${totalMarks}`);
console.log(`Percentage : ${percentage}`);

if(percentage > 90) {
    console.log("Division : First");
}else if (percentage < 90 && percentage >80) {
    console.log("Division : Second");
}
else if(percentage <80 && percentage >70) {
    console.log("Division : Third");
}


// 13. Write a C program to read temperature in centigrade and display a suitable message according to the temperature state below:
// Temp < 0 then Freezing weather
// Temp 0-10 then Very Cold weather
// Temp 10-20 then Cold weather
// Temp 20-30 then Normal in Temp
// Temp 30-40 then Its Hot
// Temp >=40 then Its Very Hot
// Test Data :
// 42
// Expected Output :
// Its very hot.
var temp = +prompt("Enter Temperature :");
if(temp < 0) {
    console.log(`Temp is ${temp} then Freezing weather`);
}
else if(temp>0 && temp<10) {
    console.log(`Temp is ${temp} then Very Cold weather`);
}
else if(temp>10 && temp<20) {
    console.log(`Temp is ${temp} then weather`);
}
else if(temp>20 && temp <30) {
    console.log(`Temp is ${temp} then Normal in Temp`);
}
else if(temp>30 && temp<40) {
    console.log(`Temp is ${temp} then its hot`);
}
else {
    console.log(`Temp is ${temp} then its very very hot`);
}

// 14. Write a C program to check whether a triangle is Equilateral, Isosceles or Scalene.
// Test Data :
// 50 50 60
// Expected Output :
// This is an isosceles triangle.


// 15. Write a C program to check whether a triangle can be formed with the given values for the angles.
// Test Data :
// 40 55 65
// Expected Output :
// The triangle is not valid.


// 16. Write a C program to check whether a character is an alphabet, digit or special character.
// Test Data :
// @
// Expected Output :
// This is a special character.


// 17. Write a C program to check whether an alphabet is a vowel or a consonant.
// Test Data :
// k
// Expected Output :
// The alphabet is a consonant.
var char = prompt("Enter a Character :");
if(char==='a'||char==='A'||char==='e'||char==='E'||char==='i'||char==='I'||char==='o'||char==='O'||char==='u'||char==='U') {
    console.log(`Entered Character ${char} is Vowel`);
}
else {
    console.log(`Entered Character is ${char} is Consonant.`);
}

// 18. Write a C program to calculate profit and loss on a transaction.
// Test Data :
// 500 700
// Expected Output :
// You can booked your profit amount : 200
var send = +prompt("Enter Sending amount :");
var receive = +prompt("Enter Receiving amount :");

var total = receive-send;

console.log(`Money Sent : ${send},\nMoney Received : ${receive},\n`);
if(total <0) {
    console.log(`Total Loss :${total}`);
}
else {
    console.log(`Total Profit :${total}`);
}

// 19. Write a program in C to calculate and print the electricity bill of a given customer. The customer ID, name, and unit consumed by the user should be captured from the keyboard to display the total amount to be paid to the customer.

// The charge are as follow :

// Unit					Charge/unit
// upto 199				@1.20
// 200 and above but less than 400		@1.50
// 400 and above but less than 600		@1.80
// 600 and above				@2.00
// If bill exceeds Rs. 400 then a surcharge of 15% will be charged and the minimum bill should be of Rs. 100/-
// Test Data :
// 1001
// James
// 800
// Expected Output :
// Customer IDNO :1001
// Customer Name :James
// unit Consumed :800
// Amount Charges @Rs. 2.00 per unit : 1600.00
// Surchage Amount : 240.00
// Net Amount Paid By the Customer : 1840.00

var customerName = prompt("Enter Your name :");
var customerId = +prompt("Enter Your Id :");
var units = +prompt("Enter Total used Number of units :");

var billAmount = 0.0;
var chargesPerUnit = 0.0;
if(units<100) {
    console.log(`ERROR : Can't Proceed Bill amount is small so go use some more units.`);
}
else if(units>100&&units<199) {
    chargesPerUnit = 1.2;
}
else if(units>200&&units<400) {
    chargesPerUnit = 1.5;
}
else if(units>400&&units<600) {
    chargesPerUnit = 1.8;
}
else if(units>600) {
    chargesPerUnit = 2.0;
}

console.log(`Name :${customerName},\nCustomer I'd :${customerId},\nTotal used units :${units},\n`);
billAmount = units*chargesPerUnit;
if(billAmount>400) {
    billAmount += (billAmount*15)/100;
}
console.log(`Total Payable Amount :${billAmount}`);




// 20. Write a program in C to accept a grade and declare the equivalent description :

// Grade	Description
// E	Excellent
// V	Very Good
// G	Good
// A	Average
// F	Fail
// Test Data :
// Input the grade :A
// Expected Output :
// You have chosen : Average
var ch = prompt("Input the grade :");
if(ch === 'E') {
    console.log("Excellent");
}
else if(ch ==='V') {
    console.log("Very good");
}
else if(ch ==='G') {
    console.log("Good");
}
else if(ch === 'A') {
    console.log("Average");
}
else {
    console.log("Fail");
}

// 21. Write a C program to read any day number in integer and display the day name in word format.
// Test Data :
// 4
// Expected Output :
// Thursday
var digit = +prompt("Enter number between 1-7 : ");
if(digit ===1) {
    console.log("Monday");
}
else if(digit === 2) {
    console.log("Tuesday");
}
else if(digit === 3) {
    console.log("Wednesday");
} 
else if(digit == 4) {
    console.log("Thursday");
}
else if(digit == 5) {
    console.log("Friday")
}
else if(digit ===6 ) {
    console.log("Saturday");
}
else {
    console.log("Sunday");
}


// 22. Write a program in C to read any digit and display it in the word.
// Test Data :
// 4
// Expected Output :
// Four


// 23. Write a C program for reading any Month Number and displaying the Month name as a word.
// Test Data :
// 4
// Expected Output :
// April


// 24. Write a program in C to read any Month Number in integer and display the number of days for this month.
// Test Data :
// 7
// Expected Output :
// Month have 31 days


// 25. Write a C program which computes the area of various geometrical shapes using a menu-driven approach.
// Test Data :
// 1
// 5
// Expected Output :
// The area is : 78.500000


// 26. Write a program in C which is a Menu-Driven Program to perform a simple calculation.
// Test Data :
// 10
// 2
// 3
// Expected Output :
// The Multiplication of 10 and 2 is: 20