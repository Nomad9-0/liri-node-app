require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
const chalk = require("chalk");

function spotifySongSearch(userQuery) {
  this.userQuery = userQuery;

  this.songSearch = function() {
    spotify.search({ 
        type: "track", 
        query: userQuery, 
        limit: 1 
    }, function(err, data) {
      if (err) {
        return console.log("Error occurred: " + err);
      }
      var song = data.tracks.items[0];
      if (song != undefined) {
        console.log();
        console.log(chalk.blue("-------Song-------"));
        console.log(chalk.green(song.name));
        console.log(chalk.blue("-------Artist-------"));
        console.log(chalk.green(song.album.artists[0].name));
        console.log(chalk.blue('----------Song Link----------'));
        console.log(chalk.green(song.preview_url));
        console.log(chalk.blue('----------Album----------'));
        console.log(chalk.green(song.album.name));
      }
    });
  };
}

module.exports = spotifySongSearch;