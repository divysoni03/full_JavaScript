// 1. Student Information System:
//     - Create an object to store a student's details including name, grade, and subjects.
//     - Access and display the student's name and grade.
//     - Update the student's grade.
//     - Add a new property to store the student's email.
//     - Remove the subject property.

var Student  = {
    studentName : "divy soni",
    studentGrades : "A+",
    studentSubject : "Maths",
}

console.log(Student);
console.log("Student Subject : ",Student.studentName);
console.log("Student Grades : ",Student.studentGrades);
console.log("Student Subject : ",Student.studentSubject);

// console.log("Student Subject : ",Student["studentName"]);
// console.log("Student Grades : ",Student["studentGrades"]);
// console.log("Student Subject : ",Student["studentSubject"]);

Student.studentGrades = "A++";
console.log(Student.studentGrades);

Student.email = "divysoni123@gmail.com";
console.log(Student);

delete Student.studentSubject;
console.log(Student);