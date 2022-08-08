// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function groupRatingsByYear(moviesArray) {
  const ratingsByYear = {};

  for (let movie of moviesArray) {
    const { year, score } = movie;
    if (!ratingsByYear.hasOwnProperty(year)) {
      ratingsByYear[year] = [score];
    } else {
      ratingsByYear[year].push(score);
    }
  }

  return ratingsByYear;
}

function getAverage(array) {
  return (
    array.reduce((acc, current) => {
      acc += current;
      return acc;
    }, 0) / array.length
  );
}

function calculateAverageByYear(ratingsByYear) {
  const averageRatingByYear = {};

  for (let year in ratingsByYear) {
    averageRatingByYear[year] = getAverage(ratingsByYear[year]);
  }

  return averageRatingByYear;
}

function iterateRatingsToGetBestYear(averageRatingByYear) {
  let best = 0;
  let bestYear = 0;

  for (let year in averageRatingByYear) {
    const rating = averageRatingByYear[year];
    if (rating > best) {
      best = rating;
      bestYear = year;
    } else if (rating === best) {
      bestYear = Math.min(bestYear, year);
    }
  }
  return { year: bestYear, avgRating: best };
}

function bestYearAvg(moviesArray) {
  if (!moviesArray.length) return null;

  const ratingsByYear = groupRatingsByYear(moviesArray);
  const averageRatingByYear = calculateAverageByYear(ratingsByYear);
  const { year, avgRating } = iterateRatingsToGetBestYear(averageRatingByYear);

  return `The best year was ${year} with an average score of ${avgRating}`;
}
