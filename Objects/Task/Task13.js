// Task 13: Organizing a To-Do List
// You have a to-do list represented as an array of strings. Implement a function to add a new task, remove a completed task, and display the current list of tasks.

// var toDoList = ["Buy groceries", "Clean the house", "Pay bills"];
var toDoList = ["Buy groceries", "Clean the house", "Pay bills"];
for(let i=1;i<toDoList.length-1;i++) {
    toDoList[i] = toDoList[i+1];
}
toDoList.pop();
console.log(toDoList);

toDoList.push("Do leet code");
console.log(toDoList);

for(const i of toDoList) {
    console.log(i);
}