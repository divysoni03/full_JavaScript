// // 1. Inventory Management System:
// //    Create an inventory management system for a warehouse. Each item in the inventory should be represented by an object with properties such as "itemID", "name", "quantity", "price", and "supplierDetails". Implement methods to add new items, update item quantities, and calculate the total value of the inventory.

// let totalItemCount=1;

// let item = [
//     {
//         itemId : totalItemCount,
//         itemName : "Phone",
//         itemQuantity : 1,
//         itemPrice : 10000.0,
//         itemSupplierDetail : "mad max",
//     }
// ];
// let itemAction = {
//     type : '',
//     payload : {},
// }

// function getDetails() {
//     itemAction.type = 'NEW_ITEM';
//     itemAction.payload.itemName = prompt("Enter Product Name :");
//     itemAction.payload.itemQuantity = +prompt("Enter Product Quantity :");
//     itemAction.payload.itemPrice = +prompt("Enter item Price :");
//     itemAction.payload.itemSupplierDetail = prompt("Enter Supplier Details :");

//     itemAction.payload.totalItemCount++;
// }
// function updateItem() {
//     itemAction.payload.itemQuantity = prompt("Enter a New Number of Quantity : ");
//     console.info(`item id : ${itemAction.payload.itemId}'s Quantity Changed to ${itemAction.payload.itemQuantity} Successfully.`);
// }
// function getRevenue() {
//     var totalRevenue = 0;
//     for(let i=0;i<item.length;i++) {
//         totalRevenue += (item[i].itemPrice * item[i].itemQuantity);
//     }
//     return totalRevenue;
// }

// let actionType = "";

// do{
//     actionType = prompt("1.NEW_ITEM,\n2.UPDATE_ITEM,\n3.CAL_REVENUE,\n0.Exit\nEnter Your Action Type :");
//     switch(actionType) {
//         case 'NEW_ITEM':
//             getDetails();
//             break;
//         case 'UPDATE_ITEM':
//             updateItem();
//             break;
//         case 'CAL_REVENUE':
//             itemAction.totalRevenue = getRevenue();
//             break;
//         default:
//             console.error(`ERROR : Invalid Input, Please Try Again,`);
//             break;
//     }

//     switch(itemAction.type) {
//         case 'NEW_ITEM':
//             item.push(itemAction.payload);
//             console.info("Item Added Successfully.");
//             break;
//         case 'UPDATE_ITEM':
//             let itemUpdateStatus = item.find(items => items.itemId === itemAction.payload.itemId);
//             if(itemUpdateStatus) {
//                 item.itemQuantity = itemAction.payload.itemQuantity;
//                 console.info("Item Quantity Updated Successfully.");
//             }
//             else {
//                 console.error("Item not found.");
//             }
//             break;
//         case 'CAL_REVENUE':
//             let itemRevenueStatus = item.find(items => items.itemId == itemAction.payload.itemId);
//             if(itemRevenueStatus) {
//                 item.totalRevenue = itemAction.totalRevenue;
//                 console.info("Total Revenue Added.");
//             }
//             else {
//                 console.error("ERROR : invalid input, please try again.");
//             }
//             break;
//         default :
//             console.error("Invalid input bros");
//     }
    
    // console.log(...item);
// }while(actionType != 0);


let totalItemCount = 1;

let items = [
    {
        itemId: totalItemCount,
        itemName: "Phone",
        itemQuantity: 1,
        itemPrice: 10000.0,
        itemSupplierDetail: "max",
    }
];

function getDetails() {
    totalItemCount++;
    let newItem = {
        itemId: totalItemCount,
        itemName: prompt("Enter Product Name:"),
        itemQuantity: +prompt("Enter Product Quantity:"),
        itemPrice: +prompt("Enter Item Price:"),
        itemSupplierDetail: prompt("Enter Supplier Details:")
    };
    items.push(newItem);
    console.info("Item Added Successfully.");
}

function updateItem() {
    let itemId = +prompt("Enter the Item ID to Update:");
    let itemToUpdate = items.find(item => item.itemId === itemId);
    if (itemToUpdate) {
        itemToUpdate.itemQuantity = +prompt("Enter New Quantity:");
        console.info(`Item ID: ${itemId}'s Quantity Changed to ${itemToUpdate.itemQuantity} Successfully.`);
    } else {
        console.error("Item not found.");
    }
}

function getRevenue() {
    let totalRevenue = 0;
    for (let i = 0; i < items.length; i++) {
        totalRevenue += items[i].itemPrice * items[i].itemQuantity;
    }
    return totalRevenue;
}

let actionType = "";

do {
    actionType = prompt("1.NEW_ITEM\n2.UPDATE_ITEM\n3.CAL_REVENUE\n0.Exit\nEnter Your Action Type:");
    switch (actionType) {
        case '1':
            getDetails();
            break;
        case '2':
            updateItem();
            break;
        case '3':
            let totalRevenue = getRevenue();
            console.info(`Total Revenue of Inventory: ${totalRevenue}`);
            break;
        case '0':
            console.info("Exiting...");
            break;
        default:
            console.error("ERROR: Invalid Input, Please Try Again.");
    }

    console.log("Current Inventory:", items);
} while (actionType !== '0');
