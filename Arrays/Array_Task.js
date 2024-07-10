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
// all movies after 2000
// find movies with a rating >8 (sort in descending order)
// print movies decade-wise (1990s, 1980s, 2000s)   