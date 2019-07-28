

var express = require('express');
var app = express();

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

var PORT = 3000;
var hostName = 'localhost';



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));





app.listen(PORT, hostName, function (err) {
    if (err) throw err;
    console.log(`Listening on Port: ${PORT} http://localhost:${PORT}`);
})



