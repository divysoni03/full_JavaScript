/*
String: It is a collection of multiple characters.

string is not an array but we can use it just like array.

*/

// console.log('\'single\' quote', typeof 'single quote');
// console.log("\"double\" quotes", typeof "double quotes");
// console.log(`\`back\` tick`, typeof `back tick`);

// console.log("Smit Chaudhary");

// var f_name = "Smit Chaudhary"
// console.log(`${f_name}`);   // template string
// console.log('${f_name}');

// var str = "The Leela Hotel, Gandhinagar"

// console.log(str);
// console.log(str.length);
// console.log(str[26]);

// Task -> shift all 0s on the left side and all 1s on the right side
// var s = "0110001001"
// console.log(s);


// String Methods

var str = "Royal Technosoft";
// console.log(str.charAt(0));

// for (let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i));    
// }

// console.log(str.charCodeAt(5));
// console.log(str.concat("_this is new"));
// document.write(`<strong>${str.concat("_this is new")}</strong>`);

// console.log(str.endsWith("soft"));

// console.log(str.includes(" ", 6));
// console.log(str.indexOf("T"));

// console.log(str.length);
// console.log(str.lastIndexOf("T", 5));

// console.log("😃".normalize("NFC"));

// console.log(str.repeat(20));
// console.log(str.replace("soft", "hard"));

// console.log(str.split(" "));
// console.log(str.search(" "));
// console.log(str.startsWith("Royal"));
// console.log(str.slice(2, 7));
// console.log(str.substring(7, 2));


// console.log(str.toLowerCase());
// console.log(['a', 'b', 'c'].toString());
// console.log(str.toUpperCase());

// str =  "    " + str + "    "
// console.log(`"${str}"`);
// console.log(`"${str.trim()}"`);
// console.log(`"${str.trimStart()}"`);
// console.log(`"${str.trimEnd()}"`);