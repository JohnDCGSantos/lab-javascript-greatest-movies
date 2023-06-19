// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie=> movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0){
    return 0;
  }
    const spielbergDrama = moviesArray.filter(movie=> movie.director === "Steven Spielberg" && movie.genre.includes( 'Drama'))
  ;
  return spielbergDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
      }

      const totalScore = moviesArray.reduce((sum, movie) =>{
        if (typeof movie.score === 'number'){
            return sum + movie.score;
        }
        return sum;
    }, 0);
      const averageScr = totalScore / moviesArray.length;
      return Math.round(averageScr * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
        const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
      
        if (dramaMovies.length === 0) {
          return 0;
        }
      
        const totalScores = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);
        const averageScore = totalScores / dramaMovies.length;
        
        return Math.round(averageScore * 100) / 100
      
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.slice().sort((a, b) => {
        if (a.year !== b.year) {
          return a.year - b.year;
        } else {
          const sortedTitles = moviesArray
            .slice()
            .filter(movie => movie.year === a.year)
            .map(movie => movie.title)
            .sort();
          return sortedTitles.indexOf(a.title) - sortedTitles.indexOf(b.title);
        }
      });
    }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedByTitle = moviesArray
    .slice()
    .map( movie => movie.title)
    .sort();

    return sortedByTitle.slice(0, 20);

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {


}
    
    
    
    



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
