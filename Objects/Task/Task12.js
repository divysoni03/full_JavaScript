// Task 12: Analyzing Movie Ratings
// You have an array of movie objects, each with properties for title and rating. Find the highest-rated movie.

// var movies = [
//     { title: "Movie 1", rating: 6.7 },
//     { title: "Movie 2", rating: 8.5 },
//     { title: "Movie 3", rating: 9.1 },
//     { title: "Movie 4", rating: 7.3 }
// ];
var movies = [
    { title: "Movie 1", rating: 6.7 },
    { title: "Movie 2", rating: 8.5 },
    { title: "Movie 3", rating: 9.1 },
    { title: "Movie 4", rating: 7.3 }
];

let highRated=0;
let movieName = "";
for(const i in movies) {
    if(movies[i].rating > highRated){
        highRated = movies[i].rating;
        movieName = movies[i].title;
    }
}
console.log(`Highly Rated movie ${movieName} : ${highRated}`);