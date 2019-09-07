var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1Barbuda',
    database: 'office_db'
});

connection.connect();

connection.query('SELECT 1 + 1', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});


module.exports = connection;