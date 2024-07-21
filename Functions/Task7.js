// -> Problem 7: Check if a String is a Palindrome
// Statement: Write a named function 'isPalindrome' that takes a string as an argument and returns 'true' if the string is a palindrome, otherwise 'false'. Also, write an expression function 'isPalindromeExpression' that does the same.

function isPalindrome(str) {
    let i=0,j=str.length-1;
    while(i<j) {
        if(str[i] != str[j]) {
            return false;
        }
        i++;j--;
    }
    return true;
}

console.log(isPalindrome("bob") ? "yes": "No");