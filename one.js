// let name = {
//     fn: "divy",
//     ln: "soni",
// };

// let name2 = {
//     fn: "bhoomi",
//     ln: "soni",
// }

// function printname() {
//     console.log(this.fn," ",this.ln);
// }

// let divyName = printname.bind(name);
// divyName();

// let name = {
//     fn: "divy",
//     ln: "soni",

//     printName() {
//         console.log(this.fn," ",this.ln);
//     }
// }

// let name2 = {
//     fn: "bhoomi",
//     ln: "soni",
// }

// let bhoomiName = name.printName.bind(name2);

// bhoomiName();

// let name = {
//     fn: "divy",
//     ln: "soni",
// }

// // function printName(obj) {
// //     console.log(obj.fn," ",obj.ln);
// // }
// function printName({fn:a,ln:b}) {
//     console.log(a," ",b);
// }

// printName(name);

const person = {
    name: "Alice",
    greet: function() {
        console.log(this);
    }
};

person.greet(); // Logs: "Alice"