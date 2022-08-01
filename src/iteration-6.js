// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  let titles = moviesArray.map((movie) => movie.title);

  titles.sort((a, b) => (a > b ? 1 : -1));

  console.log(titles);
  return titles.slice(0, 20);
}
