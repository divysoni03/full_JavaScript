// 5. School Management System:
//    Create a school management system where each student is represented by an object with properties such as "studentID", "name", "grade", "subjects", and "attendance". Implement methods to enroll students, record attendance, assign grades, and generate student report cards.

var students = [];
var studentIDs = 101;

function enrollStudent() {
    var payload = {
        studentID : studentIDs++, 
        name : prompt("Enter Student Name :"),
        grade : prompt("Enter Your Grades :").charAt(0).toUpperCase(),
        subjects : ["Maths", "Chemistry", "Physics"],
        attendance : 0,
    };
    students.push(payload);
    console.info("New Student enrolled successfully.");
    alert(`New Student : ${payload.name} enrolled successfully.`);
}
function markAttendance() {
    let tempStudentID = +prompt("Enter StudentId to markAttendance :");
    let index = students.findIndex(student => student.studentID === tempStudentID);
    if(index !== -1) {
        students[index].attendance++;
        console.info(`attendance marked for studentId:${students[index].studentID}`);
        alert(`attendance marked for ${students[index].name}`);
    }
    else {
        console.error(`Error : couldn't find the studentId :${tempStudentID}, please check entered id and try again.`);
    }
}
function assignGrades() {
    let tempStudentID = +prompt("Enter StudentId to Assign grades :");
    let index = students.findIndex(student => student.studentID === tempStudentID);
    if(index !== -1) {
        let tempGrade = prompt("Enter Grades to assign :");
        students[index].grade = tempGrade;
        console.info(`Grade Assigned for studentId:${students[index].studentID}`);
        alert(`Grades Assigned for ${students[index].name}`);
    }
    else {
        console.error(`Error : couldn't find the studentId :${tempStudentID}, please check entered id and try again.`);
    }
}
function addSubject() {
    let tempStudentID = +prompt("Enter Student id to search :");
    let index = students.findIndex(student => student.studentID === tempStudentID);
    if(index !== -1) {
        let tempStudentSubject = students[index].subjects;
        let tempSubject = prompt("Enter Subject Name :");
        tempStudentSubject.push(tempSubject);
        console.info(`New subject added to student id :${students[index].studentID}`);
        alert("New Subject Added.");
    }
    else {
        console.error(`Error : couldn't find the studentId :${tempStudentID}, please check entered id and try again.`);
    }
}
function generateReport() {
    let tempStudentID = +prompt("Enter Student Id to generate Report :");
    let index = students.findIndex(student => student.studentID === tempStudentID);
    if(index !== -1) {
        let student = students[index];
        console.log("\n\n-- Student Report --");
        console.log(`Student ID : ${student.studentID}`);
        console.log(`Student Name : ${student.name}`);
        console.log(`Student Grades : ${student.grades}`);
        console.log(`Student attendance : ${student.attendance}`);
        console.log(`Student Subjects : ${student.subjects}`);
    }
    else {
        console.error(`Error : couldn't find the studentId :${tempStudentID}, please check entered id and try again.`);
    }
}


let choice = 0;
do {
    choice = +prompt("1.Enroll Student,2.mark Attendance,3.assign grades,4.add subject,5.generate report,0.exit Enter Choice:");
    switch(choice) {
        case 1:
            enrollStudent();
            break;
        case 2:
            markAttendance();
            break;
        case 3:
            assignGrades();
            break;
        case 4:
            addSubject();
            break;
        case 5:
            setTimeout(generateReport(), 5000);
            break;
        case 0:
            alert("Exiting the program,\nThank You.");
            break;
        default:
            console.error("Error : Invalid input, please try again.");
            break;
    }
}
while(choice !== 0);