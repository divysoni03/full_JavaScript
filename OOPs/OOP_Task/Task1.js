let menu = {
    sabji: ["paneer butter masala", "paneer tikka", "paneer bhurji"],
    dal: ["dal tadka", "normal dal", "urad ki dal"],
    roti: ["roti", "naan", "paratha"],
    rice: ["jeera rice", "normal rice", "pulao"],
    salad: ["cucumber salad", "tomato salad", "cucumber and tomato salad"],
    dessert: ["gulab jamun", "barfi", "ice cream"],
};

let calorieSet = {
    "paneer butter masala": 300,
    "paneer tikka": 250,
    "paneer bhurji": 200,
    "dal tadka": 180,
    "normal dal": 150,
    "urad ki dal": 220,
    "roti": 100,
    "naan": 150,
    "paratha": 200,
    "jeera rice": 200,
    "normal rice": 180,
    "pulao": 220,
    "cucumber salad": 50,
    "tomato salad": 30,
    "cucumber and tomato salad": 40,
    "gulab jamun": 150,
    "barfi": 120,
    "ice cream": 180,
};

function createThali({
    sabji = "paneer butter masala",
    dal = "dal tadka",
    roti = 1,
    rice = "jeera rice",
    salad = "cucumber salad",
    dessert = "gulab jamun",
} = {}) {
    return { sabji, dal, roti, rice, salad, dessert };
}

function calculateCal(thali) {
    let totalCalories = 0;
    for (const item of Object.values(thali)) {
        totalCalories += calorieSet[item] || 0;
    }
    return totalCalories;
}

function displayThali(thali) {
    console.log("Your Thali:");
    console.log(`Sabji: ${thali.sabji}`);
    console.log(`Dal: ${thali.dal}`);
    console.log(`Roti: ${thali.roti}`);
    console.log(`Rice: ${thali.rice}`);
    console.log(`Salad: ${thali.salad}`);
    console.log(`Dessert: ${thali.dessert}`);
    console.log(`Total Calories: ${calculateCal(thali)}`);
}

let myThali = createThali({
    sabji: "paneer tikka",
    roti : 1,
    rice: "pulao",
    dessert: "ice cream"
});

displayThali(myThali);


// let myObj = {
//     name : "divy",
//     sername : "soni",
// }

// function display({
//     name = "divy",
//     sername = "soni",
// } = {}) {
//     return { name, sername };
// }

// let a = display({name:"divyyyyyy"});

// console.log(a.name);
// console.log(a.sername);