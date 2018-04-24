const path = require('path');

var friends = require('../data/friends');

module.exports = function(app) {
	app.get("/api/friends", function(req, res){
		res.json(friends);
	});
	
	app.post("/api/friends", function (req, res) {
		var newFriendData = req.body;
		var diff = 40;
		var bestMatch;
		// console.log(newFriendData);
		for (let key in friends) {
			let scoresArray =	friends[key].scores;
			let itemDiff = 0;
			for (let i = 0; i < scoresArray.length; i++) {
				itemDiff +=	Math.abs(scoresArray[i] - newFriendData.scores[i]);
			}
			if (itemDiff < diff){
				diff = itemDiff;
				bestMatch = friends[key];
			}
		}
		friends.push(newFriendData);
		res.json(bestMatch);
	
	});
}