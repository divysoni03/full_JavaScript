// Problem Statement
// You are tasked with writing a function that calculates the discount for an online shopping cart based on the following conditions:

// 1.  Membership Status:Membership Status:

// Premium Members:Premium Members: Always get a 20% discount.

// Gold Members:Gold Members: Get a 15% discount if the cart value is over $200.

// Silver Members:Silver Members: Get a 10% discount if the cart value is over $100.

// Regular Members:Regular Members: No discount unless they have a special discount code.

// 2.  Special Discount Codes:Special Discount Codes:

// If the user has a discount code "BLACKFRIDAY", they get an additional 10% discount on top of their membership discount, but this additional discount
// does not apply to Premium Members.
// If the user has a discount code "FREESHIP", they get free shipping (this does not affect the total cart value).
// 3.  Conditions:Conditions:
// The maximum total discount (membership + special code) cannot exceed 25%.
// Free shipping is considered separately and does not stack with other discounts.


// ExplanationExplanation
// 1.  Base Discount Calculation:Base Discount Calculation:
// The function first checks the membership status and assigns a base discount accordingly.
// Additional conditions apply for Gold and Silver members based on the cart value.
// 2.  Special Discount Code:Special Discount Code:
// If the discount code "BLACKFRIDAY" is provided, an additional discount is added for non-Premium members.
// The maximum discount is capped at 25%.
// 3.  Final Discount Calculation:Final Discount Calculation:
// The final discount amount is calculated based on the cart value and the total discount percentage.
// If the discount code "FREESHIP" is provided, free shipping is applied separately.

document.write(`Billing Cart\n\n1.Premium Plan\n2.Gold Plan\n3.Silver Plan\n4.Regular Plan`);
var membershipChoice = +prompt("Enter Your Plan Choice : ");

var cartValue = +prompt("Enter Your Cart Value : ");
var discount = 0;
var freeshipFlag = false;

switch(membershipChoice) {
    case 1:
        discount = 20;
        freeshipFlag = true;
        document.write(`NOTE : Your Membership Plan is Premium Plan S you already have Extra Discount !`);
        document.write(`Your Cart Value : ${cartValue},\nFinal Price : ${(cartValue*discount)/100}`);
        if(freeshipFlag) {
            document.write(`Congratulations !! You Got Free Shipping.`);
        }
        break;
    case 2:
        discount = 15;
        if(cartValue >= 200 ) {
            document.write(`Congratulations !! Your Cart Value is over 200$ so Your getting 15% off on the products`);
            cartValue = (cartValue*discount)/100;
        }
        else {
            document.write(`NOTE : For 15% Discount Cart Price should be over 200$ !`);
        }
        var flag = false;
        flag = prompt("Do You Have Discount Coupon ?");
        if(flag) {
            var coupon = prompt("Enter Your Discount Code : ");
            if(coupon === "BLACKFRIDAY") {
                document.write(`Congratulations !! You Got 10% more Discount on Your Products.`);
                cartValue = (cartValue*10)/100;
            }
            else if(coupon === "FREESHIP") {
                document.write(`Congratulations !! You Got Free Shipping.`);
                freeshipFlag = true;
            }
        }
        document.write(`Final Value : ${cartValue},\n`);
        if(freeshipFlag) {
            document.write(`Congratulations !! You Got Free Shipping.`);
        }
        else {
            document.write(`NOTE : You Have To Pay 10$ Extra For Shipping.`);
        }
        break;
    case 3:
        discount = 10;
        if(cartValue >= 100 ) {
            document.write(`Congratulations !! Your Cart Value is over 100$ so Your getting 10% off on the products`);
            cartValue = (cartValue*discount)/100;
        }
        else {
            document.write(`NOTE : For 10% Discount Cart Price should be over 100$ !`);
        }
        var flag = false;
        flag = prompt("Do You Have Discount Coupon ?");
        if(flag) {
            var coupon = prompt("Enter Your Discount Code : ");
            if(coupon === "BLACKFRIDAY") {
                document.write(`Congratulations !! You Got 10% more Discount on Your Products.`);
                cartValue = (cartValue*10)/100;
            }
            else if(coupon === "FREESHIP") {
                document.write(`Congratulations !! You Got Free Shipping.`);
                freeshipFlag = true;
            }
        }
        document.write(`Final Value : ${cartValue},\n`);
        if(freeshipFlag) {
            document.write(`Congratulations !! You Got Free Shipping.`);
        }
        else {
            document.write(`NOTE : You Have To Pay 10$ Extra For Shipping.`);
        }
        break;
    case 4:
        discount = 1;
        var flag = false;
        flag = prompt("Do You Have Discount Coupon ?");
        if(flag) {
            var coupon = prompt("Enter Your Discount Code : ");
            if(coupon === "BLACKFRIDAY") {
                document.write(`Congratulations !! You Got 10% more Discount on Your Products.`);
                cartValue = (cartValue*10)/100;
            }
            else if(coupon === "FREESHIP") {
                document.write(`Congratulations !! You Got Free Shipping.`);
                freeshipFlag = true;
            }
        }
        document.write(`Final Value : ${cartValue},\n`);
        if(freeshipFlag) {
            document.write(`Congratulations !! You Got Free Shipping.`);
        }
        else {
            document.write(`NOTE : You Have To Pay 10$ Extra For Shipping.`);
        }
        break;
}   