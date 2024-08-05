// 10. Event Management:
//     - Create an object to store event details including event name, date, and location.
//     - Access and print the event name and date.
//     - Update the location.
//     - Add a new property to store the number of attendees.
//     - Remove the date property.

var events = {};

events.name = "Birthday";
events.date = new Date().toLocaleString();
events.location = "Sector 1";

console.log("-- Events --");
console.log("Name :", events.name);
console.log("Date :", events.date);

events.location = "Sector 2";
console.log("Location :", events.location);

events.attendees = 5;
console.log("Number of Attendees :", events.attendees);

delete events.date;
console.log(events);