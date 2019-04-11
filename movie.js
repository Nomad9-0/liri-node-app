var axios = require("axios");
const chalk = require("chalk");

function movieThis(userQuery) {
  this.userQuery = userQuery;

  if (userQuery == "") {
    userQuery = "Black Hawk Down";
  }

  this.movieSearch = function() {
    axios
      .get("http://www.omdbapi.com/?t=" + userQuery + "&y=&plot=short&apikey=trilogy")
      .then(function(response) {
        var movie = response.data;
        console.log(chalk.green("---------Title---------"));
        console.log(chalk.red(movie.Title));
        console.log(chalk.green("---------Released---------"));
        console.log(chalk.red(movie.Year));
        console.log(chalk.green("---------IMDB Rating---------"));
        console.log(chalk.red(movie.imdbRating));
        console.log("---------Rotten Tomatoes---------");
        if (movie.Ratings.length <= 2) {
          console.log(
            chalk.yellow("No Rotten Tomatoes Score")
          );
        } else {
          console.log(chalk.red(movie.Ratings[1].Value));
        }
        console.log(chalk.green('---------Language---------'));
        console.log(chalk.red(movie.Language));
        console.log(chalk.green('---------Plot---------'));
        console.log(chalk.red(movie.Plot));
        console.log(chalk.green('---------Actors---------'));
        console.log(chalk.red(movie.Actors));
      })
      .catch(function(err) {
        console.log(err);
      });
  };
}

//Export
module.exports = movieThis;