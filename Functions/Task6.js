// -> Problem 6: Reverse a String
// Statement: Write a named function 'reverseString' that takes a string as an argument and returns the string reversed. Also, write an expression function 'reverseStringExpression' that does the same.

function reverseString(str) {
    
    let arr = str.split('');
    let i = 0,j = arr.length -1;
    while(i < j) {
        let ch = arr[i];
        arr[i] = arr[j];
        arr[j] = ch;
        i++;j--;
    }
    return arr.join('');
}

console.log(reverseString("1234"));