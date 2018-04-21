// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "app/public/home.html"));
});
//Displays the home page
app.get("/survey", function (req, res) {
	res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// Displays all possible friends
app.get("/api/friends", function (req, res) {
	return res.json(friends);
});

// Displays a single character, or returns false
app.get("/api/friends/:character", function (req, res) {
	var chosen = req.params.character;

	console.log(chosen);

	for (var i = 0; i < friends.length; i++) {
		if (chosen === friends[i].routeName) {
			return res.json(friends[i]);
		}
	}

	return res.json(false);
});

app.listen(PORT);