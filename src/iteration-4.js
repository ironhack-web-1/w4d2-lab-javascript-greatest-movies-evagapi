// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (!dramaMovies.length) return 0;

  let dramaScores = dramaMovies.reduce((acc, current) => {
    return acc + current.score;
  }, 0);

  return parseFloat((dramaScores / dramaMovies.length).toFixed(2));
}
