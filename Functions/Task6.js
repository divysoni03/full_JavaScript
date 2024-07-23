// -> Problem 6: Reverse a String
// Statement: Write a named function 'reverseString' that takes a string as an argument and returns the string reversed. Also, write an expression function 'reverseStringExpression' that does the same.

// function reverseString(str) {
    
//     let arr = str.split('');
//     let i = 0,j = arr.length -1;
//     while(i < j) {
//         let ch = arr[i];
//         arr[i] = arr[j];
//         arr[j] = ch;
//         i++;j--;
//     }
//     return arr.join('');
// }

// console.log(reverseString("1234"));
function reverseString(str) {
    
    let arr = [str.length];
    for(const i in str) {
        arr[i] = str[i];
    }
    let i = 0,j = arr.length -1;
    while(i < j) {
        let ch = arr[i];
        arr[i] = arr[j];
        arr[j] = ch;
        i++;j--;
    }
    let str2 = "";
    for (const i in arr) {
        str2 += arr[i];
    } 
    return str2;
}

console.log(reverseString("1234"));