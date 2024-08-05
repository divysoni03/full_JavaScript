// 8. University Course:
//     - Create an object to store course details including course name, instructor, and credits.
//     - Access and print the course name and instructor.
//     - Update the number of credits.
//     - Add a new property to store the course schedule.
//     - Remove the instructor property.

var obj = [];

function storeCourse() {
    let payload = {
        courseName : "maths",
        courseInstructor : "shrey sir",
        courseCredits : 8,
    };
    obj.push(payload);
    console.info("New Course Stored");
}   
function displayCourses() {
    console.log("\n-- Desplaying all the Courses --");
    obj.forEach( course => {
        console.log("Course Name :", course.courseName);
        console.log("Course Instructor :", course.courseInstructor);
        console.log("Course Credits :", course.courseCredits);
    });
}
function updateCredits() {
    // let tempName = prompt("Enter Course Name to search");
    let tempName = "maths";
    let objIndex = obj.findIndex(course => course.courseName === tempName);
    if(objIndex != -1) {
        obj[objIndex].courseCredits = 5;
        console.info("course credits updated.");
    }
    else {
        console.error("Error : Couldn't find the course name please check again.");
    }
}



storeCourse();
displayCourses();
updateCredits();
displayCourses();

obj.forEach( course => {
    course.schedule = new Date().toLocaleString();
});
obj.forEach( course => {
    delete course.courseInstructor;
});

displayCourses();