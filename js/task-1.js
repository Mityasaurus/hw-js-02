const movies = {
  action: ["Die Hard", "John Wick", "The Matrix"],
  comedy: ["The Hangover", "Bridesmaids", "Step Brothers"],
  drama: ["The Shawshank Redemption", "The Godfather", "Schindler's List"],
  horror: ["The Shining", "A Nightmare on Elm Street", "The Exorcist"],
  getMoviesByGenre(genre) {
    genre = genre.toLowerCase();
    if (movies.hasOwnProperty(genre)) {
      return movies[genre];
    } else {
      return `There are no movies with ${genre} genre`;
    }
  },
};

const genre = prompt("Enter genre");
console.log(movies.getMoviesByGenre(genre));
