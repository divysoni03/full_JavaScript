var recipes = [];

function addRecipe() {
    var payload = {
        title: "Veggie Stir-Fry", 
        ingredients: ["broccoli", "carrots", "bell peppers", "soy sauce", "garlic"], 
        instructions: "Stir-fry vegetables with soy sauce and garlic until tender.",
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
    let tempIngredient = prompt("Enter Ingediant to find the recipe :");
    recipes.forEach(recipe => {
        let ingredient = recipe.ingredients;
        if(ingredient.some(tempIngredient)) {
            console.log(recipe.title);
        }
        else {
            console.error("Error : Couldn't find any ingredient like this, please enter valid ingredients");
        }
    });
}
function updateRecipe() {
    let tempTitle = prompt("Enter Recipe Title to update Ingredient :");
    let index = recipes.findIndex(recipe => recipe.title === tempTitle);
    if(index !== -1) {
        let choice = +prompt("1.Enter New Ingredient, 2.Remove Any Ingredient, Enter Your choice : ");
        switch(choice) {
            case 1:
                let tempIngredient = prompt("Enter New ingredient into recipe:");
                let ingredient = recipes[index].ingredients;
                ingredient.push(tempIngredient);
                console.info(`New ingredient added to ${recipes[index].title}`);
                break;
            case 2:
                let tempIndex = prompt("Enter New ingredient into recipe:");
                let tempArray = recipes[tempIndex].ingredients;      
                let searchIngredient = prompt("Enter Ingredient Name to be deleted :");
                let index = tempArray.findIndex(ingredient => ingredient === searchIngredient);
                if(index !== -1) {
                    index.splice(index, 1);
                    console.info("Ingredient removed successfully");   
                }
                else {
                    console.error("Error : Couldn't find the ingredient. please try again.");
                }
                break;
            default:
                console.error("Error : Invalid choice, please Enter Valid choice.");
                break;
        }
    }
    else {
        console.error("Error : Couldn't find the Recipe, please check the name again.");
    }
}