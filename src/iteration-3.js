// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;

  let movieScores = moviesArray
    .filter((movie) => !!movie.score)
    .reduce((acc, current) => {
      return acc + current.score;
    }, 0);

  return parseFloat((movieScores / moviesArray.length).toFixed(2));
}

scoresAverage(movies);
