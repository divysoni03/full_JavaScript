// const body = document.body;
// console.log(body);
// document.write("<h1>Hello EveryOne</h1>");
// How to Add Child Element in a HTML using JS ? 
const div = document.querySelector("div");
let h1 = document.createElement('h1');  // create a new Element 
let text = "Zafar"; //text 
h1.append(text); // text content
div.appendChild(h1); // element 
console.log(div);