// require
var BandsReq = require("./bands");
var SpotifyReq = require("./spotify");
var MovieReq = require("./movie");
var fs = require("fs");

var userSearch = process.argv[2];
var userQuery = process.argv.slice(3).join(" ");

// run liri
function liriStart() {
  if (userSearch === "concert-this") {
    var bands = new BandsReq(userQuery);
    bands.concertThis();
  } else if (userSearch === "spotify-this-song") {
    var spot = new SpotifyReq(userQuery);
    spot.songSearch();
  } else if (userSearch === "movie-this") {
    var movie = new MovieReq(userQuery);
    movie.movieSearch();
  } else if (userSearch === "do-what-it-says") {
    doWhatItSays();
  } else {
    console.log("Not Working");
  }
}

// do-what-it-says function
function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function(err, response) {
    if (err) {
      console.log(err);
    }
    var param = response.split(",");
    userSearch = param[0];
    userQuery = param[1];
    liriStart();
  });
}

// call liriStart
liriStart(userSearch, userQuery);