

var express = require('express');
var app = express();

const mysql = require("mysql");

var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));


require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


app.listen(PORT, function (err) {
    if (err) throw err;
    console.log(`Listening on Port: ${PORT} http://localhost:${PORT}`);
})



