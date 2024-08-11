var recipes = [];

function addRecipe() {
    var payload = {
        title: "Veggie Stir-Fry", 
        ingredients: ["broccoli", "carrots", "bell peppers", "soy sauce", "garlic"], 
        instructions: "🍴 Stir-fry vegetables with soy sauce and garlic until tender.",
    }
    recipes.push(payload);
    console.info("Recipe added successfully.");
}
function displayRecipe() {
    console.log("-- All recipe Titles --");
    recipes.forEach( recipe => {
        console.log(recipe.title);
    });
}
function findRecipe() {
    let tempIngrediant = prompt("Enter Ingediant to find the recipe :");
    recipes.forEach(recipe => {
        let ingrediant = recipe.ingredients;
        if(ingrediant.some(tempIngrediant)) {
            console.log(recipe.title);
        }
    });
}
function updateRecipe() {
    let tempTitle = prompt("Enter Recipe Title to update Ingrediant :");
    
}