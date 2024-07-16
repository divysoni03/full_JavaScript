// 3. Employee Record:
//     - Create an object to store an employee's details including first name, last name, and salary.
//     - Access and display the employee's first name and salary.
//     - Modify the employee's last name.
//     - Add a new property to store the employee's department.
//     - Remove the salary property.

var Employees = {
    employeeFirstName : "divy",
    employeeLastName : "soni",
    employeeSalary : 50_000,
}

console.log("Employee Full-Name : ",Employees.employeeFirstName + " " + Employees.employeeLastName);
console.log("Employee Salary : ",Employees.employeeSalary);

Employees.employeeLastName = "Pattani";
console.log("Employee Last Name : ", Employees.employeeLastName);

Employees.employeeDepartment = "Production Senior tester";
console.log("Employee Details : ",Employees);

delete Employees.employeeSalary;
console.log(Employees);
