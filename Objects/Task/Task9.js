// 9. Real Estate Listing:
//     - Create an object to store a property's details such as address, price, and square footage.
//     - Access and display the address and price.
//     - Modify the price.
//     - Add a new property to store the number of bedrooms.
//     - Remove the square footage property.

var obj = {};

obj.address = "Sector 28";
obj.price = 399;
obj.squareFoot = 50;

console.log("-- Object --");
console.log("Address : ", obj.address);
console.log("Price : ", obj.price);

// adding new price.
obj.price = 999;
console.log("Price Updated to ", obj.price);

obj.numOfBedroom = 4;
console.log("Number of Bedrooms : ", obj.numOfBedroom);

delete obj.squareFoot;

console.log(obj);