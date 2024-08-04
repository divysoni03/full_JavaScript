// 6. Hotel Booking System:
//     - Create an object to store booking details including guest name, room number, and check-in date.
//     - Access and print the guest's name and room number.
//     - Update the check-in date.
//     - Add a new property to store the number of nights stayed.
//     - Remove the room number property.
let rooms = 1;

var customer = {
    name : "",
    roomNum : null,
    checkInDate : "",
    booked : false,
};

function bookRoom() {
    // customer.name = prompt("Enter Your Name :");
    customer.name = "shrey sir";
    customer.roomNum = rooms++;
    checkInDate = new Date().toLocaleString();
    if(!customer.booked) customer.booked = true;
    else customer.booked = false;
}
function showDetails() {
    console.log(`Room No. ${customer.roomNum}`);
    console.log(`Current Room Holder :${customer.name}`);
    console.log(`Check-in Date :${customer.checkInDate}`);
}
function CheckIn() {
    customer.checkInDate = new Date().toLocaleString();
}

bookRoom();
showDetails();
CheckIn();
showDetails();