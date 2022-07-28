// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map((movie) => movie.director);
  let filteredDirectors = [];

  directors.map(function (director) {
    if (!filteredDirectors.includes(director)) {
      filteredDirectors.push(director);
    }
  });

  return filteredDirectors;
}
