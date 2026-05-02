// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
const movies = [
 { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
 { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
 { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
 { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


// Tasks:
//     1. filter() only "Sci-Fi" movies
//     2. map() to return:
//             "Inception (8.8)"

//     3. reduce() to find average movie rating
//     4. find() movie "Joker"
//     5. findIndex() of "Avengers


//filtering the movies based on the genre and display the movies of the genre Sci-Fi
const genre=movies.filter(movie=>movie.genre==="Sci-Fi")
console.log("The movies belongs to the genre Sci-Fi are :",genre)
console.log("\n")

//display the movie inception along with it's rating
const movierating=movies.map(movie=>movie.title+"("+movie.rating+")")
console.log(movierating)
console.log("\n")

//average movie rating
const rating=movies.reduce((acc,movie)=>acc+movie.rating,0)
console.log((rating/movies.length).toFixed(2))
console.log("\n")

//details of the movie Joker
const details=movies.find(movie=>movie.title==='Joker')
console.log(details)
console.log("\n")

//printing Index of Avengers
const index=movies.findIndex(movie=>movie.title==='Avengers')
console.log("Index of the movie Avengers is:",index)