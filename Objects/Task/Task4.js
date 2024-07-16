// 4. Product Catalog:
//     - Create an object to store a product's details such as name, price, and stock quantity.
//     - Access and print the product's name and price.
//     - Update the product's stock quantity.
//     - Add a new property to store the product's category.
//     - Remove the price property.

var Product = {
    productName : "gaming keyboard mk gk 16",
    productPrice : 2_000,
    productQuantity : 100,
}

console.log("Product Details\nProduct Name : ",Product.productName);
console.log("Product Price : ",Product.productPrice);
console.log("Product Stock Quantity : ",Product.productQuantity);

Product.productQuantity = 150;
console.log("Updated Product Quantity : ",Product.productQuantity);

Product.productCategory = "Computer Accessories";
console.log("Updated Product Details : ",Product);

delete Product.productPrice;
console.log("Updated #2 Product Details : ",Product);