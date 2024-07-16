// Task 11: Managing a Shopping Cart
// You have a shopping cart represented as an array of objects, where each object represents an item with properties for name, quantity, and price. Calculate the total cost of items in the cart.

// var shoppingCart = [
//     { name: "Milk", quantity: 2, price: 33 },
//     { name: "Bread", quantity: 1, price: 40 },
//     { name: "Dahi", quantity: 12, price: 23 }
// ];

//object
var shoppingCart = [
    { name:"milk", quantity:2,price:33},
    { name:"Bread", quantity:10,price:20},
    { name:"dahi", quantity: 1,price:20},
]

// Functions for input and output
function printCart() {
    console.log(`--Cart Products--\n`);
    for(const i in shoppingCart){
        console.log(`Name : ${shoppingCart[i].name}, Quantity : ${shoppingCart[i].quantity}, Price : ${shoppingCart[i].price}`);
    }
}
function addProduct() {
    let tempName = prompt("Enter Product Name :");
    let tempQuantity = +prompt("Enter Product Quantity :");
    let tempPrice = +prompt("Enter Product Price :");
    
    shoppingCart.push({name:tempName,quantity:tempQuantity,price:tempPrice,});
    alert(`Product : ${tempName} Added Successfully.`);
}
function deleteProduct(productName){
    for (const i in shoppingCart) {
        if(shoppingCart[i].name === productName) {
            // delete shoppingCart[i];
            shoppingCart.pop([i]);
            // console.log(`Product ${shoppingCart[i].name} is Removed From Cart.`);
            alert(`Product ${shoppingCart[i].name} is Removed From Cart.`);
            break;
        }
        else {
            console.log("couldn't Find the Product You Have Searched, Please Try Again.");
            break;
        }
    }
}
function finalPrice() {
    let totalPrice = 0;
    for(const i in shoppingCart) {
        totalPrice += (shoppingCart[i].quantity*shoppingCart[i].price);
    }
    alert(`Final Price To be Payed : ${totalPrice}.`);
}

//menu Driven Switch case code
var choice = 0;
do{
    console.log("1.Add Product To Cart,\n2.View Products In Cart,\n3.Remove Product,\n4.Final Price,\n0.Exit\n");
    choice = +prompt("Enter Your Choice :");

    switch(choice) {
        case 1:
            // function for adding products
            addProduct();
            break;
        case 2:
            // function for viewing cart
            printCart();
            break;
        case 3:
            // function to remove product from cart
            let tempName = prompt("Enter Product Name To be Removed :");
            deleteProduct(tempName);
            break;
        case 4:
            // function to show final price to pay
            finalPrice();
            break;
        default : 
            console.error("Invalid Input, Please Try Again With Proper Input.");
            break;
    }
}while(choice != 0);