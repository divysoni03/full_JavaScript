/*
Customer Support Ticketing System:
Develop a customer support ticketing system where each support ticket is an object with properties like ticketID, customerID, issueDescription, status, assignedSupportAgent, and resolutionDetails. Implement functions to create new tickets, update ticket status, assign support agents, and track resolutions.
*/

let tickets = [
    {   
        ticketID: 1,
        customerID: 123,
        issueDescription: "Cannot login",
        status: "Open",
        assignedSupportAgent: null,
        resolutionDetails: null,
    }
];

// Define the actions to be performed using ticketAction object
let ticketAction = {
    type: '',
    payload: {}
};

// Menu to select the action
let action = 'ASSIGN_SUPPORT_AGENT'; // Change this to test different actions

switch(action) {
    case 'CREATE_TICKET':
        ticketAction.type = 'CREATE_TICKET';
        ticketAction.payload = {
            ticketID: 2,
            customerID: 124,
            issueDescription: "Page not loading",
            status: "Open",
            assignedSupportAgent: null,
            resolutionDetails: null
        };
        break;

    case 'UPDATE_TICKET_STATUS':
        ticketAction.type = 'UPDATE_TICKET_STATUS';
        ticketAction.payload = {
            ticketID: 1,
            status: 'In Progress'
        };
        break;

    case 'ASSIGN_SUPPORT_AGENT':
        ticketAction.type = 'ASSIGN_SUPPORT_AGENT';
        ticketAction.payload = {
            ticketID: 1,
            assignedSupportAgent: 'Agent Smit'
        };
        break;

    case 'TRACK_RESOLUTION':
        ticketAction.type = 'TRACK_RESOLUTION';
        ticketAction.payload = {
            ticketID: 1,
            resolutionDetails: 'Cleared Browser cache and cookies'
        };
        break;

    default:
        console.log('Unknown action');
}

switch(ticketAction.type) {
    case 'CREATE_TICKET':
        tickets.push(ticketAction.payload);
        break;

    case 'UPDATE_TICKET_STATUS':
        let ticketToUpdateStatus = tickets.find(ticket => ticket.ticketID === ticketAction.payload.ticketID);
        if(ticketToUpdateStatus) {
            ticketToUpdateStatus.status = ticketAction.payload.status;
        }
        break;

    case 'ASSIGN_SUPPORT_AGENT':
        let ticketToAssignAgent = tickets.find(ticket => ticket.ticketID === ticketAction.payload.ticketID);
        if(ticketToAssignAgent) {
            ticketToAssignAgent.assignedSupportAgent = ticketAction.payload.assignedSupportAgent;
        }
        break;

    case 'TRACK_RESOLUTION':
        let ticketToTrackResolution = tickets.find(ticket => ticket.ticketID === ticketAction.payload.ticketID);
        if(ticketToTrackResolution) {
            ticketToTrackResolution.resolutionDetails = ticketAction.payload.resolutionDetails;
        }
        break;

    default:
        console.log('Unknown action');
}

// Logging the tickets to verify the operations
console.log('ASSIGN_SUPPORT_AGENT:', tickets);