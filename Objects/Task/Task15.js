// Task 15: Managing Employee Records
// You have an array of employee objects, each with properties for name and position. Implement functions to promote an employee to a new position and list all employees.

// var employees = [
//     { name: "Alice", position: "Developer" },
//     { name: "Bob", position: "Designer" },
//     { name: "Charlie", position: "Manager" }
// ];


var employees = [
    { name: "Alice", position: "Developer" },
    { name: "Bob", position: "Designer" },
    { name: "Charlie", position: "Manager" }
];

function promoteEmployee() {
    let employeeName = prompt('Enter Employee Name to be Promoted :');
    for(const i in employees) {
        if(employees[i].name == employeeName) {
            let newPosition = prompt('Enter New position for employee :');
            employees[i].position = newPosition;
            console.info(`Employee : ${employees[i].name}, Promoted to ${employees[i].position} Successfully.`);
            return;
        }
    }
    console.error("ERROR : Couldn't find the employees, please try again.");
}

function displayEmployees() {
    for(const i in employees) {
        console.log(`Employee Name : ${employees[i].name}, Employee Position : ${employees[i].position}`);
    }
}