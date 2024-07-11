// Movie rating analysis
const titles = [
    'The Shawshank Redemption', 'The Godfather', 'The Dark Knight',
    '12 Angry Men', 'Schindler\'s List', 'The Lord of the Rings: The Return of the King',
    'Pulp Fiction', 'The Good, the Bad and the Ugly', 'Fight Club', 'Forrest Gump'
];
const ratings = [
    9.3, 9.2, 9.0, 8.9, 8.9, 8.9, 8.9, 8.8, 8.8, 8.8
];
const years = [
    1994, 1972, 2008, 1957, 1993, 2003, 1994, 1966, 1999, 1994
];



// find highest rated movie
let maxRating = -Infinity;
let highestRatedIndex = -1;
for (let i = 0; i < ratings.length; i++) {
    if(ratings[i] > maxRating) {
        maxRating = ratings[i];
        highestRatedIndex = i;
    }
}
console.log(`Highest rated movie: ${titles[highestRatedIndex]}`);



// average ratings of all movies
var avarageRating = 0.0;
for(const i of ratings) {
    avarageRating += i;
}
avarageRating /= ratings.length;
console.log(`Avarage rating of all the movies availabe : ${avarageRating}`);



// all movies after 2000
for (const i in years) {
    if(years[i] >= 2000) {
        console.log(`Movie : ${titles[i]}, release year : ${years[i]}`);
    }
}



// find movies with a rating >8 (sort in descending order)
for (var i=0;i<ratings.length-1;i++) {
    for (var j=i+1;j<ratings.length;j++) {
        if (ratings[i]<ratings[j]) {
            var temp = ratings[i];
            ratings[i] = ratings[j];
            ratings[j] = temp;
        }
    }
}
for (const i in ratings) {
    if (ratings[i]>8) {
        console.log(`Movie :${titles[i]}, Year :${years[i]}, Ratings :${ratings[i]}`);
    }
}



// print movies decade-wise (1990s, 1980s, 2000s)   
console.log("1980's best movies collection, ");
for (const i in years) {
    if(years[i] < 1980) {
        console.log(`Movie :${titles[i]}, Year :${years[i]}, Ratings :${ratings[i]}`);
    }
}
console.log("1990's best movies collection, ");
for(const i in years) {
    if (years[i]>1980 && years[i]<1990) {
        console.log(`Movie :${titles[i]}, Year :${years[i]}, Ratings :${ratings[i]}`);
    }
}
console.log("2000's best movies collection, ");
for(const i in years) {
    if(years[i]>1990&&years[i]<2000) {
        console.log(`Movie :${titles[i]}, Year :${years[i]}, Ratings :${ratings[i]}`);
    }
}
console.log("2010's best movies collection, ");
for(const i in years) {
    if(years[i]>2010){
        console.log(`Movie :${titles[i]}, Year :${years[i]}, Ratings :${ratings[i]}`);
    }
}