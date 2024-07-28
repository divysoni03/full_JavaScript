// 4. E-commerce Order Processing:
//    Develop an order processing system for an e-commerce platform. Each order should be an object containing properties like "orderID", "customerID", "orderDate", "items" (an array of item objects), "shippingAddress", and "status". Implement functions to place orders, update order status, and calculate the total order cost.
var orders = []; // Array to store order objects
var orderIds = 101; // Starting order ID

function totalOrderCost() {
    let tempOrderId = +prompt("Enter Order Id to get total payable amount:");
    let orderIndex = orders.findIndex(order => order.orderId === tempOrderId);
    let totalAmount = 0;
    if (orderIndex !== -1) {
        let totalItems = orders[orderIndex].items;
        for (const i in totalItems) {
            totalAmount += totalItems[i].itemPrice * totalItems[i].itemQuantity;
        }
        console.info(`Total amount calculated for Order ID: ${orders[orderIndex].orderId}.`);
        alert(`Total Payable amount: ${totalAmount}/-`);
    } else {
        console.error("ERROR: Order not found.");
    }
}

function addToCart(index) {
    if (index === null || index === undefined) return;
    let cart = orders[index].items;
    let choice = 0;
    do {
        choice = +prompt("1. Add item, 0. Exit, Enter choice:");
        switch (choice) {
            case 1:
                var payload = {
                    itemName: prompt("Enter item name:"),
                    itemPrice: +prompt("Enter Item Price:"),
                    itemQuantity: +prompt("Enter Item Quantity:"),
                };
                cart.push(payload);
                console.info(`New Item ${payload.itemName} added to the cart.`);
                alert(`New Item ${payload.itemName} added to the cart.`);
                break;
            case 0:
                console.info("All items added to the cart");
                alert("All items added to the cart");
                break;
            default:
                console.error("ERROR: Invalid input, please try again.");
                break;
        }
    } while (choice !== 0);
}

function placeOrder() {
    let currentDate = new Date().toLocaleDateString();

    let payload = {
        orderId: orderIds,
        customerId: prompt("Enter Customer ID:"),
        orderDate: currentDate,
        items: [],
        shippingAddress: prompt("Enter Shipping Address:"),
        orderStatus: "Pending",
    };

    orders.push(payload);
    addToCart(orders.length - 1); // Add items to the newly placed order

    orderIds++;
    console.info("New order added.");
    alert("Your order is confirmed, it will be delivered in a few days. Thank you for shopping with us.");
}

function updateOrderStatus() {
    let tempOrderId = +prompt("Enter Order ID to update status:");
    let orderIndex = orders.findIndex(order => order.orderId === tempOrderId);
    if (orderIndex !== -1) {
        orders[orderIndex].orderStatus = prompt("Enter new status (pending, shipped, delivered):");
        console.info(`Order ID ${orders[orderIndex].orderId}'s status changed to ${orders[orderIndex].orderStatus}.`);
        alert(`Order status updated for Order ID ${orders[orderIndex].orderId}`);
    } else {
        console.error("ERROR: Couldn't find the order, please check the entered Order ID.");
    }
}

function displayTotalItems(items) {
    console.log("--Total Items in the cart--");
    for (const i in items) {
        console.log(`Item name: ${items[i].itemName}`);
        console.log(`Item price: ${items[i].itemPrice}`);
        console.log(`Item quantity: ${items[i].itemQuantity}`);
    }
}

function displayTotalOrders() {
    console.log("\n--All orders--");
    for (const i in orders) {
        console.log(`Order ID: ${orders[i].orderId}`);
        console.log(`Customer ID: ${orders[i].customerId}`);
        console.log(`Order date: ${orders[i].orderDate}`);
        console.log(`Shipping Address: ${orders[i].shippingAddress}`);
        console.log(`Order status: ${orders[i].orderStatus}`);
        displayTotalItems(orders[i].items);
    }
}

var choice = 0;
do {
    choice = +prompt("1. New Order, 2. Add item to the Order, 3. Display All Orders, 4. Final Amount, 5. Update Order Status, 0. Exit, Enter Choice:");
    switch (choice) {
        case 1:
            placeOrder();
            break;
        case 2:
            let orderId = +prompt("Enter Order ID to add items to:");
            let orderIndex = orders.findIndex(order => order.orderId === orderId);
            if (orderIndex !== -1) {
                addToCart(orderIndex);
            } else {
                console.error("ERROR: Couldn't find the order, please check the entered Order ID.");
            }
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
            console.log("Thank you for shopping with us.");
            break;
        default:
            console.error("ERROR: Invalid input, please enter a valid choice from the options.");
            break;
    }
} while (choice !== 0);