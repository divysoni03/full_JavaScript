// 1. Student Grades and Names

// -> Problem Statement:
// - Objective: Develop a system to manage and display student names along with their respective grades for different subjects.
// - Tasks:
//   - Store student names in an array ("students").
//   - Store corresponding grades in another array ("grades").
//   - Print each student's name and grade.

// Sample Data:
// - Students: ["John Doe", "Jane Smith", "Michael Johnson"]
// - Grades: [85, 92, 78]

// Output:
// Student: John Doe, Grade: 85
// Student: Jane Smith, Grade: 92
// Student: Michael Johnson, Grade: 78

var studentName = [];
var studentMarks = [];

let choice =0;
do{
    console.log("1.Enter Name & Marks,\n2.Display details About Students,\n0.Exit");
    choice = prompt("Enter Your Choice: ");
    switch(choice) {
        case 1:
            let sName = prompt("Enter Student Name :");
            let sMarks = +prompt("Enter Stundent Marks :");
            studentName.push(sName);
            studentMarks.push(sMarks);
            break;
        case 2:
            for(let i=0;i<studentName.length;i++) {
                console.log(`Student ${i}: ${studentName[i]}, ${studentMarks[i]},\n`)
            }
            break;
        default:
            console.warn("Warning : Invalid Input, Try Entering Valid Input Again.");
            break;
    }
}while(choice!=0);
