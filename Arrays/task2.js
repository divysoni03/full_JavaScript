// 2. Inventory Management

// -> Problem Statement:
// - Objective: Implement an inventory management system for a grocery store.
// - Tasks:
//   - Maintain a list of vegetable names in an array ("vegetables").
//   - Keep track of quantities for each vegetable in another array ("quantities").
//   - Implement operations to add new vegetables, update quantities, and remove out-of-stock items.
//   - Display current inventory status.

// Sample Data:
// - Vegetables: ["Carrot", "Tomato", "Spinach"]
// - Quantities: [50, 30, 20]

// Output:
// Inventory:
// Carrot - Quantity: 50
// Tomato - Quantity: 30
// Spinach - Quantity: 20


var vegetables = [];
var quantities = [];
var flag = true;

let choice =0;
do {
    console.log("1.Enter Vegetable and It's Quantity,\n2.search for veggies and Update it's quantity,\n3.Make vegetable out of stock,\n4.Buy vegetables,\n5.Display All vegetables,\n0.Exit");
    choice = +prompt("Enter Your choice :");
    if(choice == 0) {
        console.log("Exiting the program...");
        exit(0);
    }
    switch (choice) {
        case 1:
            let vName = prompt("Enter Vegetable Name :");
            let vQua = +prompt("Enter Vegetable quantity:");
            vegetables.unshift(vName);
            quantities.unshift(vqua);
            break;
        case 2:
            let searchVeggies = prompt("Enter your vegetable Name to update it's quantity :");
            for (const i in vegetables) {
                if (vegetables[i] === searchVeggies) {
                    let newQue = +prompt("Enter New Quantity :");
                    quantities[i] = newQue;
                }
            }
            break;
        case 3:
            let outOfStockVeggies = prompt("Enter your vegetable Name to set it out of stock :");
            for (const i in vegetables) {
                if (vegetables[i] === outOfStockVeggies) {
                    quantities[i] = 0;
                    flag = false;
                }
            }
            break;
        case 4:
            let buyVeggies = prompt("Enter your vegetable Name to Buy it :");
            for (const i in vegetables) {
                if (vegetables[i] === buyVeggies) {
                    if(!flag) {
                        console.log(`vegetable : ${vegetables[i]} is out of stock, sorry for out inconvenience.`);
                    }else {
                        quantities[i]--;
                        console.log("Added to your cart !");
                    }
                }
            }
            break;
        case 5: 
            for (let i=0;i<vegetables.length;i++) {
                console.log(`Vegetable ${i}: ${vegetables[i]}, ${quantities}\n`);
            }
        default:
            console.log("Warning : Invalid Input, Please Try Again With Valid Input.");
            break;
    }
}while(choice !=0);