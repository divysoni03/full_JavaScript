// 7. E-commerce Order:
//     - Create an object to store an order's details such as order ID, product name, and quantity.
//     - Access and display the order ID and product name.
//     - Modify the quantity.
//     - Add a new property to store the delivery date.
//     - Remove the product name property.

var orderIds = 101;

var orders = [];

function addOrder() {
    var payload = {
        orderId : orderIds++,
        name : "gaming mouse",
        quantity : 1,
        price : 500,
        deliveredDate : null,
    }
    orders.push(payload);
    console.info(`New Order id: ${payload.orderId} added.`);
}
function showOrderDetails() {
    orders.forEach(order => {
        console.log(`Order id.${order.orderId}`);
        console.log(`Product Name :${order.name}`);
        console.log(`Product Quantity :${order.quantity}`);
        console.log(`Product Price :${order.price}`);
        console.log(`Expected delivery Date :${(order.deliveredDate==null)? "after 5 days" : ""}`);
    })
}
function updateQuantity() {
    let tempOrderId = 101; //temp
    let orderIndex = orders.find(order => order.orderId === tempOrderId);
    if(orderIndex != -1) {
        orders[orderIndex].quantity = 2; // can be prompt
    }
    else {
        console.error(`ERROR : could'nt find the orderId.${tempOrderId}`);
    }
}

function isDelivered() {
    let tempOrderId = 101; //temp
    let orderIndex = orders.find(order => order.orderId === tempOrderId);
    if(orderIndex != -1) {
        orders[orderIndex].deliveredDate = new Date().toLocaleString();
        console.info(`Order Delivered on ${orders[orderIndex].deliveredDate}`);
    }
    else {
        console.error(`ERROR : could'nt find the orderId.${tempOrderId}`);
    }
}

addOrder();
showOrderDetails();
updateQuantity();
showOrderDetails();
isDelivered();
showOrderDetails();