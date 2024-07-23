// 3. Library System:
//    Build a library management system where each book is represented as an object with properties such as "ISBN", "title", "author", "genre", "availableCopies", and "borrowerHistory". Include methods to borrow and return books, check book availability, and track borrowing history.

var totalBooks = 0;
var Library = [];

function addBook() {
    totalBooks++;
    let newBook = {
        ISBN: +prompt("Enter ISBN no:"),
        Title: prompt("Enter Title:"),
        Author: prompt("Enter Author:"),
        Genre: prompt("Enter Genre:"),
        Quantity: +prompt("Enter Quantity of books:"),
        Available: true,
        borrowingHistory: []
    };
    Library.push(newBook);
    console.info(`New Book Added.`);
    alert(`New ${newBook.Title} added.`);
}

function borrowBook() {
    let searchName = prompt("Enter Book Name to search:");
    let bookIndex = Library.findIndex(book => book.Title === searchName);

    if (bookIndex !== -1) {
        let book = Library[bookIndex];
        if (book.Quantity > 0) {
            let borrowerName = prompt("Enter your name:");
            let currentTime = new Date().toLocaleString();
            /* toLocaleString() is a function that converts the date into simple readable string */

            book.Quantity--;
            if (book.Quantity === 0) {
                book.Available = false;
            }

            book.borrowingHistory.push({
                Name: borrowerName,
                time: currentTime,
                returnStatus: false,
            });

            alert(`You have successfully borrowed ${book.Title}.`);
        } else {
            alert(`${book.Title} is currently not available.`);
        }
    } else {
        alert(`Book with title "${searchName}" not found.`);
    }
}

function returnBook() {
    let searchName = prompt("Enter Book Name to return:");
    let bookIndex = Library.findIndex(book => book.Title === searchName);
    if (bookIndex !== -1) {
        let book = Library[bookIndex];
        let borrowerName = prompt("Enter Your Name:");
        let personIndex = book.borrowingHistory.findIndex(person => person.Name === borrowerName && !person.returnStatus);

        if (personIndex !== -1) {
            book.Quantity++;
            if (book.Quantity > 0) {
                book.Available = true;
            }
            book.borrowingHistory[personIndex].returnStatus = true;
            console.info(`Book no ${bookIndex} returned.`);
            alert(`Book Returned successfully.`);
        } else {
            console.error("ERROR: Borrower not found or book already returned.");
            alert(`Borrower ${borrowerName} not found or book already returned, please check the entered name.`);
        }
    } else {
        console.error("ERROR: Book not found.");
        alert(`Book ${searchName} not found, please enter a valid name.`);
    }
}

function displayBorrowingHistory(i) {
    let history = Library[i].borrowingHistory;
    history.forEach((entry, index) => {
        console.log(`History ${index + 1} : Name: ${entry.Name}, Book Borrowed Time: ${entry.time}, Book Returned: ${entry.returnStatus ? "Yes" : "No"}`);
    });
    /* 
        forEach is a method to iterate through array and use its elements,
        the arrow function in forEach is callback function which perform the main tasks on elements
    */
}

function displayBooks() {
    Library.forEach((book, i) => {
        console.log(`\nBook ${i + 1}:`);
        console.log(`ISBN: ${book.ISBN}`);
        console.log(`Title: ${book.Title}`);
        console.log(`Author: ${book.Author}`);
        console.log(`Genre: ${book.Genre}`);
        console.log(`Quantity: ${book.Quantity}`);
        displayBorrowingHistory(i);
    });
}

// addBook();
// displayBooks();
// borrowBook();
// displayBooks();
// returnBook();
// displayBooks();
let choice =0;
do {
    displayBooks();
    choice = +prompt("1.Add Book, 2.Borrow Book, 3.Return Book, 0.Exit");
    switch(choice) {
        case 1:
            addBook();
            break;
        case 2:
            borrowBook();
            break;
        case 3:
            returnBook();
            break;
        case 0:
            console.info("Exiting the program..");
            alert("Exiting the program...");
            break;
        default:
            console.error("ERROR : Invalid input, please try again with suitable input as shown.");
            alert("Invalid input, please try again.");
            break;
    }
}while(choice !== 0);