// Task -> shift all 0s on the left side and all 1s on the right side
// var s = "0110001001"
// console.log(s);

var s = "0110001001";
let i=0,j=s.length-1;
console.log("Initial String :", s);
let str = s.split(''); // spilt the string and makes an another array of char array from the string
while(i<j) {
    if(str[i] ==='1'&& str[j] === '0') {
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
        i++;j--;
    }
    else if(str[i] === '0') {
        i++;
    }
    else if(str[j] === '1') {
        j--;
    }
}
str = str.join(''); 
// str = str.join(""); 
// str = str.join(" "); // joints the whole array into one string as a args it takes which thing you want 
// to add between chars or in this case array elements
console.log("Final string :" + str);