var path = require('path');
var mates = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(mates);
    })

    app.post("/api/friends", function (req, res) {

        // getting user obj from survey html
        var user = req.body;
        // accessing the user's scores array
        var userScores = user.scores;
      
        

        var matesTotalArr = [];
        for (var i = 0; i < mates.length; i++) {
            var char = mates[i];
            var totalDifference = 0;

            for (var j = 0; j < char.scores.length; j++) {
                var score = char.scores[j];
                totalDifference += Math.abs((score - userScores[j]));
                
            }

            matesTotalArr.push(totalDifference);
        }

        var minDiff = Math.min(...matesTotalArr);
        var bestCharIndex = matesTotalArr.indexOf(minDiff);

        var bestMatch = mates[bestCharIndex];
        res.send(bestMatch);
    })
}       