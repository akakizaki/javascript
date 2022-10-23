let allMovies = [];
var title;
var rating;
var haveWatched;

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    console.log("A new movie is added");
    allMovies.push(movie);
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    let output = "Printing all movies...\n";
    for (let i = 0; i < allMovies.length; i++) {
            let m = allMovies[i];
            output += ("" + m.title + ", rating of " + m.rating + ", havewatched: " + m.haveWatched + "\n");
    } output += ("\nYou have " + allMovies.length + " movies in total\n");
    console.log(output);

}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    console.log("Printing movie that has a rating higher than " + rating);
    let match = 0;
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].rating >= rating) {
            console.log(allMovies[i].title + " has a rating of " + allMovies[i].rating);
            match++;
        }
    }
    console.log(" ");
    console.log("In total, there are " + match + " matches")
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    console.log("Changing the status of the movie...");
    console.log("changing the status of the movie...");

    for (let i = 0; i <allMovies.length; i++) {

            let m = allMovies[i];

            if (m.title == title) {
                    m.haveWatched = !m.haveWatched;
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);