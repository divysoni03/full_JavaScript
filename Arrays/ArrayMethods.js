// const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
// const salad = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑');

// console.log(salad[0]);
// console.log(salad[1]);
// len = salad.length;

// console.log(salad[len - 3]);

// salad.push('🥜');
// salad.unshift('🥜');

// let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];

// veg = fruits[4];
// const carrot =  veg[2]
////////////////////////////////////////////////////////////////////////////////////

// const nums = [29,24,56,22,21,26]
// const nums = [1,111,10001,101,100001,1000001]
// console.log(nums);
// console.log(nums.sort((a, b) => a-b));
////////////////////////////////////////////////////////////////////////////////////

// forEach()
// const veggies = ['🍅', '🥦', '🥕'];
// veggies.forEach(veggie => console.log(veggie));

////////////////////////////////////////////////////////////////////////////////////
//Map
// const junkFood = ['🍔', '🍕', '🍔', '🍔', '🍔']
// // const diet = junkFood.map(convert => '🥕')
// const diet = junkFood.map(item => item === '🍔' ? '🥕' : item)

// console.log(diet);
// console.log(junkFood);

////////////////////////////////////////////////////////////////////////////////////

//filter()
const fruits = ['🍌', '🍉', '🍍', '🍉','🍉','🍋‍🟩','🍉','🍈','🍇','🍉','🍇','🍇']

const watermelon = fruits.filter(item => item === '🍉')