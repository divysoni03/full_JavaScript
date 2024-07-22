// 4. Event Planning and Attendees

// -> Problem Statement:
// - Objective: Organize attendee information for different sessions or workshops at an event.
// - Tasks:
//   - Create arrays to store session names ("sessions") and attendee lists ("attendees").
//   - Implement functionality to add attendees to specific sessions.
//   - Provide options to remove attendees who cancel their registration.
//   - Display the list of attendees for each session.

// Sample Data:
// - Sessions: ["Workshop A", "Workshop B", "Seminar"]
// - Attendees:
//   [
//     ["John Doe", "Jane Smith"],
//     ["Michael Johnson", "Emily Brown"],
//     ["David Lee"]
//   ]

// Output:
// Workshop A:
// John Doe
// Jane Smith

// Workshop B:
// Michael Johnson
// Emily Brown

// Seminar:
// David Lee

let Sessions = ["Workshop A", "Workshop B", "Seminar"];
let Attendees = [
    ["John Doe", "Jane Smith"],
    ["Michael Johnson", "Emily Brown"],
    ["David Lee"]
];
console.log(Sessions);
console.log(Attendees);

function addAttendees() {
    let tempAttendees = /*prompt("Enter Your Name to book Session :");*/ "divy";
    let searchWorkshop = /*prompt("Enter Workshop name to be joined :");*/ "Workshop A";
    let joinIndex = Sessions.findIndex(session => session === searchWorkshop);
    if (joinIndex !== -1) {
        Attendees[joinIndex].push(tempAttendees);
        console.log(Attendees);
        console.info("Session Booked Successfully.");
    } else {
        console.error("ERROR : couldn't find the workshop, please try again.");
    }
}
function leaveSession(){
    let searchWorkshop = /* prompt("Enter Workshop name to leave :")*/ "Workshop A";
    let tempAttendees = /*prompt("Enter Your Name :") */ "divy";
    let joinIndex = Sessions.findIndex(session => session === searchWorkshop);
    if (joinIndex !== -1) {
        let attendeeIndex = Attendees[joinIndex].findIndex(attendee => attendee === tempAttendees);
        if (attendeeIndex !== -1) {
            Attendees[joinIndex].splice(attendeeIndex, 1);
            console.log(Attendees);
            console.info("Left the session successfully.");
        } else {
            console.error("ERROR : couldn't find the attendee in the workshop.");
        }
    } else {
        console.error("ERROR : couldn't find the workshop, please try again.");
    }
}
function updateAttendees() {
    let searchWorkshop = /*prompt("Enter Workshop name to update :");*/ "Workshop A";
    let attendeeToRemove = /*prompt("Enter the name of the attendee to remove :");*/ "divy";
    let attendeeToAdd = /*prompt("Enter the name of the attendee to add :");*/ "shreyk";
    let joinIndex = Sessions.findIndex(session => session === searchWorkshop);
    if (joinIndex !== -1) {
        let attendeeIndex = Attendees[joinIndex].findIndex(attendee => attendee === attendeeToRemove);
        if (attendeeIndex !== -1) {
            Attendees[joinIndex].splice(attendeeIndex, 1, attendeeToAdd);
            console.log(Attendees);
            console.info("Attendee list updated successfully.");
        } else {
            console.error("ERROR: couldn't find the attendee in the workshop.");
        }
    } else {
        console.error("ERROR: couldn't find the workshop, please try again.");
    }
}

addAttendees();
// leaveSession();
updateAttendees();
console.log(Sessions);
console.log(Attendees);
