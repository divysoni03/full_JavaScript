// 2. Library Management:
//     - Create an object to store information about a book, such as title, author, and publication year.
//     - Access and print the book's title and author.
//     - Update the publication year.
//     - Add a new property to store the book's genre.
//     - Remove the author property.

var Library = {
    bookName : "Harry Potter",
    bookAuthor : "shrey sir",
    bookYear : 2001,
}

console.log("Book Title : ",Library.bookName);
console.log("Book Publication Year : ",Library.bookYear);

Library.bookYear = 2005;
console.log("Publication Year Changed : ",Library.bookYear);

Library.bookGenre = "Story Novel";
console.log(Library);

delete Library.bookAuthor;
console.log("Book final info : ",Library);