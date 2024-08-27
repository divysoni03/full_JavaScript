// 6. Movie Database:
//    Build a movie database where each movie is an object with properties like "movieID", "title", "director", "cast" (an array of actor objects), "genre", "releaseYear", and "ratings" (an array of rating objects). Include functions to add new movies, update movie details, and calculate average ratings.

var movies = [];
var movieIds = 101;

//helping / input function 
function inputCast(index) {
    if(index == null || index == undefined) return;
    let casts = movies[index].cast;
    let choice = 0;
    do {
        choice = +prompt("1.Add Cast Actor,0.Exit, Enter Choice :");
        switch(choice) {
            case 1:
                let actor = prompt("Enter Name");
                casts.push(actor);
                break;
            case 0:
                console.info("all actor added successfully.");
                break;
            default:
                console.error("Error : Invalid input please try again.");
        }
    }while(choice !== 0);
}
function inputRating(index) {
    if(index === -1 || index === null) return;
    let reviews = movies[index].review;

    let payload = {
        name : prompt("Enter Name :"),
        rating : +prompt("Enter Rating :"),
    };
    if(payload.rating > 5) {
        console.error("Error : Invalid rating input please enter between 0-5.");
        payload.rating = +prompt("Enter Rating Again :");
    }
    else {
        reviews.push(payload);
    }
}

function addMovie() {
    var payload = {
        movieId : movieIds++,
        title : prompt("Enter Movie Title :"),
        director : prompt("Enter Name of the director :"),
        cast : [],
        genre : prompt("Enter Genre :"),
        releaseYear : prompt("Enter Release Year"),
        review : [],
    };

    movies.push(payload);
    inputCast(movies.length - 1); // inputting the cast actors
    inputRating(movies.length - 1); // inputting the rating
    alert("movie added successfully.");
    console.info("movie added successfully.");
}

function updateMovie() {
    let choice  = null;
    let searchTitle = +prompt("Enter Movie title to update movie :");
    let index = movies.findIndex(i => i.title === searchTitle);
    let movie = movies[index];
    do {
        choice = +prompt("1.Change movie title,2.Change director,3.Change Genre,4.Change Release Date,0.exit, Enter choice:");

        switch(choice) {
            case 1:
                movie.title = prompt("Enter New title :");
                console.info(`title changed for ${movie.title} successfully.`);
                break;
            case 2:
                movie.director = prompt("Enter New Director Name :");
                console.info(`Director Name Changed for ${movie.title} successfully.`);
                break;
            case 3:
                movie.genre = prompt("Enter New Genre :");
                console.info(`Genre Changed for ${movie.title} successfully.`);
                break;
            case 4:
                movie.releaseYear = prompt("Enter New Release Date :");
                console.info(`Release Date changed for ${movie.releaseYear} successfully.`);
                break;
            case 0:
                console.info("All changes are done successfully.");
                break;
            default :
                console.error("Error : Invalid input, please enter valid input.");
                break;    
        }
    }while(choice !== 0);
}

function getAverage() {
    let searchTitle = prompt("Enter Movie Title to search :");
    let index = movies.findIndex(i => i.title === searchTitle);
    if(index !== -1) {
        let reviews = movies[index].review;
        let totalRating = 0;
        reviews.forEach( rating => {
            totalRating += rating;
        });
        return totalRating / reviews.length;
    }
    else {
        console.error("Error : Can't find the movie please check the title and enter again.");
    }
}
function displayMovies() {
    let searchTitle = prompt("Enter Title to search movie :");
    let index = movies.findIndex( i => i.title === searchTitle);
    if(index !== -1) {
        let movie = movies[index];
        console.log("-- movie --");
        let casts = movie.cast; let reviews = movie.review;
        console.log(`Movie Id : ${movie.movieId},\nMovie Title : ${movie.title},\nMovie Director : ${movie.director},\nMovie Cast : ${casts.forEach( i => { console.log(i, ", ") })},\nMovie Genre : ${movie.genre},\nMovie release Date : ${movie.releaseYear},\nMovie Review : ${reviews.forEach(i => {console.log(`Name : ${i.name}, Rating : ${i.rating}`)})}`);
    }
    else {
        console.error("Error : Can't find the title, please check and try again.");
    }
}


let choice = null;
do {
    choice = +prompt("1.Add Movies, 2.Add Actors, 3.Update Movies, 4.Display All Movies, 5.Add Ratings, 0.Exit, Enter Choice :");

    switch(choice) {
        case 1:
            addMovie();
            break;
        case 2:
            let tempMovieId = +prompt("Enter movieId :");
            let index = movies.findIndex(movie => movie.movieId === tempMovieId);
            if(index !== -1) {
                inputCast(index);
                console.info("Movie cast updated successfully.");
            }
            else {
                console.error ("Error : Can't find the movieId please check and Enter Again.");
                break;
            }
            break;
        case 3:
            updateMovie();
            break;
        case 4:
            displayMovies();
            break;
        case 5:
            tempMovieId = +prompt("Enter movieId :");
            index = movies.findIndex(movie => movie.movieId === tempMovieId);
            if(index !== -1) {
                inputRating(index);
                console.info("Movie Rating Added successfully.");
            }
            else {
                console.error ("Error : Can't find the movieId please check and Enter Again.");
            }
            break;
        case 0:
            console.info("Exiting the program...");
            break;
        default : 
            console.error("Error : Invalid Choice, please Enter Valid choice and try again.");
            break;
    }

}while(choice !== 0);