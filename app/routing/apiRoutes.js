var path = require('path');
var mates = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(mates);
    })

    app.post("/api/friends",function(req, res) {
        mates.push(req.body);
        res.json(mates);
    })
}       