str = ""

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         str += "("+i+", "+j+")\t"
//     }
//     str += "\n"
// }
// console.log(str);

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         str += "* "
//     }
//     str += "\n"
// }
// console.log(str);



// pattern 2 : from javascript

size = +prompt("Enter the rows: ")

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if(i == 0 || j == 0 || i == size-1 || j == size-1 || i == j || i+j == size-1) {
            str += "* "
        } else {
            str += "  "
        }
    }
    str += "\n"
}
console.log(str);   