// Task 14: Processing Sales Data
// You have an array of sales data where each element is an object with properties for the date and sales amount. Calculate the total sales for a given month.

// var salesData = [
//     { date: "2024-07-01", amount: 200 },
//     { date: "2024-07-15", amount: 450 },
//     { date: "2024-08-02", amount: 300 },
//     { date: "2024-08-10", amount: 150 }
// ];
var salesData = [
    { date: "2024-07-01", amount: 200 },
    { date: "2024-07-15", amount: 450 },
    { date: "2024-08-02", amount: 300 },
    { date: "2024-08-10", amount: 150 }
];

var month = +prompt("Enter a month number :");
var totalSales = 0;
for(const i in salesData) {
    if(salesData[i].date[6] == month.toString()) {
        totalSales += salesData[i].amount;
    }
}
console.log(`Total Sales in ${month} Month is : ${totalSales}`);