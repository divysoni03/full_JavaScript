// 3. Recipe Ingredients and Quantities

// -> Problem Statement:
// - Objective: Create a system to manage ingredients required for recipes.
// - Tasks:
//   - Store ingredient names in an array ("ingredients").
//   - Maintain quantities needed for each ingredient in another array ("quantities").
//   - Allow for adding new ingredients and updating quantities as needed.
//   - Display a list of ingredients along with their current quantities.


// Sample Data:
// - Ingredients: ["Flour", "Sugar", "Eggs"]
// - Quantities: [2, 1, 4]
// Output:
// Recipe Ingredients:
// Flour - Quantity: 2
// Sugar - Quantity: 1
// Eggs - Quantity: 4

let Ingredients =  ["Flour", "Sugar", "Eggs"];
let Quantities = [2, 1, 4];

function addIngredients() {
    let temping = prompt("Enter New Ingredient :");
    let tempQue = +prompt("Enter Quantity :");
    Ingredients.push(temping);
    Quantities.push(tempQue);
    console.info("New Ingredient Added Successfully.");
}
function display() {
    for(let i=0;i<Ingredients.length;i++){
        console.log(i+1,". Ingredient :",Ingredients[i],", Quantity :",Quantities[i]);
    }
}
function updateQuantity() {
    let temping = prompt("Enter Ingredient to search :");
    let ingToUpdate = Ingredients.find(ing => ing == temping);
    if(ingToUpdate) {
        let tempQue = +prompt("Enter New Quantity :");
        Quantities[ingToUpdate] = tempQue;
        console.info(`Quantity Updated for ${Ingredients[ingToUpdate]} to New Quantity ${Quantities[ingToUpdate]}`);
    }
}

while(1) {
    display();
    addIngredients();
    updateQuantity();
}