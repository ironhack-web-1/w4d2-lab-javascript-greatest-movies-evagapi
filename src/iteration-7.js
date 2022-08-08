// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function getNumbersFromString(string) {
  if (string.includes("h") && string.includes("min")) {
    return string
      .replace(/h/, "")
      .replace(/min/, "")
      .split(" ")
      .map((string) => parseInt(string));
  } else if (string.includes("h")) {
    return [parseInt(string.replace(/h/, "")), 0];
  }
}

function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    let durationInNumbers = getNumbersFromString(movie.duration);
    const duration = durationInNumbers[0] * 60 + durationInNumbers[1];
    return { ...movie, duration };
  });
}
