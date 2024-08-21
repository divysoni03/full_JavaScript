// Array to store recipes
let recipes = [];

// Add Recipe
function addRecipe(recipe) {
    recipes.push(recipe);
}

// Remove Recipe
function removeRecipe(title) {
    recipes = recipes.filter(recipe => recipe.title !== title);
}

// Find Recipe by Ingredient
function findRecipeByIngredient(ingredient) {
    return recipes.filter(recipe => recipe.ingredients.includes(ingredient));
}

// Describe Recipe
function describeRecipe(recipe) {
    const { title, ingredients, instructions } = recipe;
    console.log(`Title: ${title}, Ingredients: ${ingredients.join(', ')}, Instructions: ${instructions}`);
}

// Update Recipe
function updateRecipe(title, newIngredients) {
    const recipe = recipes.find(recipe => recipe.title === title);
    if (recipe) {
        recipe.ingredients = newIngredients;
    }
}

// Get Statistics
function getStatistics() {
    const totalRecipes = recipes.length;
    const totalIngredients = recipes.reduce((sum, recipe) => sum + recipe.ingredients.length, 0);
    const averageIngredients = totalRecipes === 0 ? 0 : totalIngredients / totalRecipes;
    return {
        totalRecipes,
        averageIngredients
    };
}

// Example Usage
// 🌟 Add Recipes
addRecipe({
    title: "🥦 Veggie Stir-Fry",
    ingredients: ["broccoli", "carrots", "bell peppers", "soy sauce", "garlic"],
    instructions: "🍴 Stir-fry vegetables with soy sauce and garlic until tender."
});

addRecipe({
    title: "🥑 Avocado Toast",
    ingredients: ["avocado", "whole grain bread", "lemon juice", "salt", "pepper"],
    instructions: "🥄 Mash avocado with lemon juice, salt, and pepper. Spread on toasted bread."
});

// 📜 Display Recipe Titles
console.log('📜 Recipe Titles:');
recipes.forEach(recipe => console.log(`- ${recipe.title}`));

// 🔍 Find Recipes with "avocado"
const avocadoRecipes = findRecipeByIngredient("avocado");
console.log('🔍 Recipes with avocado:');
avocadoRecipes.forEach(recipe => console.log(`- ${recipe.title}`));

// 🔄 Update Avocado Toast Recipe
updateRecipe("🥑 Avocado Toast", ["avocado", "whole grain bread", "lemon juice", "salt", "pepper", "chili flakes"]);
console.log('🔄 Avocado Toast updated with new ingredients!');

// 🔍 Describe a Specific Recipe
console.log('🔍 Recipe Description:');
describeRecipe(recipes[0]);

// 📊 Get and Display Recipe Statistics
const stats = getStatistics();
console.log('📊 Recipe Statistics:');
console.log(`- Total Recipes: ${stats.totalRecipes}`);
console.log(`- Average Ingredients per Recipe: ${stats.averageIngredients.toFixed(2)}`);

// 🔠 Sort Recipes by Title
const sortedRecipes = [...recipes].sort((a, b) => a.title.localeCompare(b.title));
console.log('🔠 Sorted Recipes by Title:');
sortedRecipes.forEach(recipe => console.log(`- ${recipe.title}`));

// 🥕 Find the First Recipe with "carrots"
const carrotRecipe = recipes.find(recipe => recipe.ingredients.includes("carrots"));
console.log('🥕 First Recipe with Carrots:');
console.log(carrotRecipe ? carrotRecipe.title : 'No recipe found.');

// 🛠️ Fill Placeholder Recipes
const placeholderRecipes = new Array(3).fill({
    title: "🍲 Placeholder Recipe",
    ingredients: ["ingredient1", "ingredient2"],
    instructions: "📜 Placeholder instructions."
});
console.log('🛠️ Placeholder Recipes:');
console.log(placeholderRecipes);

// 🍽️ Remove a Recipe by Index
recipes.splice(1, 1); // Removes the second recipe (index 1)
console.log('🍽️ Recipes after Splice:');
recipes.forEach(recipe => console.log(`- ${recipe.title}`));