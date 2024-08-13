var recipes = [];

function addIngredients() {
    let ingredients = [];
    let choice = 0;
    do {
        choice = +prompt("1.Enter Ingredient, 2.exit, Enter Your choice :");
        switch(choice) {
            case 1:
                let temp = prompt("Enter Your Ingredient :");
                ingredients.push(temp);
                console.info("Ingredient Added.");
                break;
            case 0:
                break;
            default:
                console.error("Error : invalid input, please try again.");y
        }
    }while(choice !== 0);

    return ingredients;
}

function addRecipe() {
    var payload = {
        title: prompt("Enter Title :"), 
        ingredients: addIngredients(), 
        instructions: prompt("Enter Instruction :"),
    }
    recipes.push(payload);
    console.info("Recipe added successfully.");
}
function displayRecipes() {
    console.log("-- All recipe Titles --");
    recipes.forEach( recipe => {
        console.log(recipe.title);
        let temp = recipe.ingredients;
        temp.forEach( i => {
            console.log(i);
        });
    });
}
function findRecipe() {
    let tempIngredient = prompt("Enter Ingredient to find the recipe :");
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
                let tempIndex = prompt("Enter ingredient name to search :");
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

function getStatistics() {
    console.log("Total Recipes : ", recipes.length);
    let average = 0;
    for(let i=0; i<recipes.length; i++) {
        let temp = recipes[i].ingredients;
        average += temp.length;
    }
    console.log("Average Ingredient in any Recipe : ", average/recipes.length);
}

function sortRecipes() {
    // insertion sort
    for(let i =1; i< recipes.length; i++) {
        let temp = recipes[i].title;
        let j = i-1;
        while(j >= 0) {
            if(recipes[j].title > temp) {
                recipes[j+1].title = recipes[j].title;
            }
            else break;
            j--;
        }
        recipes[j+1].title = temp;
    }    
}

function removeRecipe() {
    let tempTitle = prompt("Enter Recipe Name To be Removed :");
    let index = recipes.findIndex( recipe => recipe.title === tempTitle);
    if(index !== -1) {
        recipes.splice(index, 1);
        console.info(`Recipe ${tempTitle} Removed successfully.`);
        alert(`Recipe ${tempTitle} Removed successfully.`);
    }
    else {
        console.error("Error : Couldn't find the Recipe Name, please try again.");
    }
}

function displaySpecificRecipe() {
    let tempTitle = prompt("Enter Recipe Name To be Removed :");
    let index = recipes.findIndex( recipe => recipe.title === tempTitle);
    if(index !== -1) {
        let recipe = recipes[index];
        console.log("-- Recipe --");
        console.log(`Recipe Title :${recipe.title}`);
        let temp = recipe.ingredients;
        console.log("Recipe Ingredients :");
        temp.forEach( i => {
            console.log(i);
        });
        console.log("Recipe Instructions :", recipe.instructions);
    }
    else {
        console.error("Error : Couldn't find the Recipe Name, please try again.");
    }
}



let choice =0;
do {
    choice = +prompt("1.Enter Recipe, 2.Find Recipe, 3.update Recipe, 4.get Statistics, 5.sort Recipe, 6.remove Recipe, 7.Enter Choice :");
}while(choice != 0);