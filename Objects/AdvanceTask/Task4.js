// 4. E-commerce Order Processing:
//    Develop an order processing system for an e-commerce platform. Each order should be an object containing properties like "orderID", "customerID", "orderDate", "items" (an array of item objects), "shippingAddress", and "status". Implement functions to place orders, update order status, and calculate the total order cost.

var orders = []; // order object
var orderIds = 101;


function totalOrderCost() {
    let tempOrderId = +prompt("Enter Order Id to get total Amount of Payable amount :");
    let orderIndex = orders.findIndex(order => order.orderId === tempOrderId);
    let totalAmount = 0;
    if(orderIndex != -1) {
        let totalItems = orders[orderIndex].items;
        for(const i in totalItems) {
            totalAmount += totalItems[i].itemPrice * totalItems[i].itemQuantity;
        }
        console.info(`Total amount Calculated for ${orders[orderIndex].orderId}.`);
        alert(`Total Payable amount : ${totalAmount}/-`);
    }
}
function addToCart() {
    var cart = [];
    let choice =0;
    do{
        choice = +prompt("1.add item, 0.Exit, Enter choice :");
        switch(choice) {
            case 1:
                var payload = {
                    itemName : prompt("Enter item name :"),
                    itemPrice : +prompt("Enter Item Price :"),
                    itemQuantity : +prompt("Enter Item Quantity :"),
                }
                cart.push(payload);
                console.info(`New Item ${payload.itemName} added to the cart.`);
                alert(`New Item ${payload.itemName} added to the cart.`);
                break;
            case 0:
                console.info("All items added to the cart");
                alert("All items added to the cart");
                break;
            default :
                console.error("ERROR : invalid input, please try again.");
                break;
        }
    }while(choice !=0);

    return cart;
    
}
function placeOrder() {
    let currentDate = new Date().toLocaleDateString();

    let payload = {
        orderId : orderIds,
        customerId : prompt("Enter Customer ID :"),
        orderDate :  currentDate,
        items : addToCart(),
        shippingAddress : prompt("Enter Shipping Address :"),
        orderStatus : "Pending",
    }

    orderIds++;
    orders.push(payload);
    console.info("New order Added.");
    alert("Your Order is confirmed, It will deliver in possible days. Thank you for shopping with us.");
}
function updateOrderStatus() {
    let tempOrderId = prompt("Enter Order ID to update Status :");
    let orderIndex = orders.findIndex(order => order.orderId === tempOrderId);
    if(orderIndex != -1) {
        orders[orderIndex].orderStatus = prompt("Enter New Status (shipment, shipped, dispatched, delivered):");
        console.info(`Order id ${orders[orderIndex].orderId}'s order Status Changed To ${orders[orderIndex].orderStatus}.`);
        alert(`order Status updated of ${orders[orderIndex].orderId}`);
    }
    else {
        console.error("ERROR : Couldn't find the order, try checking entered order Id.");
    }
}
function displayTotalItems(items) {
    console.log("--Total Items in the cart--");
    for(const i in items) {
        console.log(`item name :${items[i].itemName}`);
        console.log(`item price :${items[i].itemPrice}`);
        console.log(`item Quantity :${items[i].itemQuantity}`);
    }
}

function displayTotalOrders() {
    console.log("\n--All orders--");
    for(const i in orders) {
        console.log(`Order id :${orders[i].orderId}`);
        console.log(`Customer id :${orders[i].customerId}`);
        console.log(`Order date :${orders[i].orderDate}`);
        console.log(`Shipping Address :${orders[i].shippingAddress}`);
        console.log(`Order Status :${orders[i].orderStatus}`);
        displayTotalItems(orders[i].items);
    }
}

var choice =0;
do {
    choice = +prompt("1.New Order, 2.Add item to the Order, 3.display All orders, 4.final amount, 5.update order Status, 0.exit, Enter Choice :");
    switch(choice) {
        case 1:
            placeOrder();
            break;
        case 2:
            addToCart();
            break;
        case 3:
            displayTotalOrders();
            break;
        case 4:
            totalOrderCost();
            break;
        case 5:
            updateOrderStatus();
            break;
        case 0:
            console.log("Thank you For shopping with us.");
            break;
        default:
            console.error("ERROR : Invalid input, please enter valid choice from below options.");
            break;
    }
}while(choice != 0);