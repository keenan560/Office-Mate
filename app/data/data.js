const path = require("path");
const connection = require("../config/connection");
const mates = require("../data/friends");

connection.query(`SELECT * FROM characters`, (err, res) => {
    if (err) throw err;
    console.log(res);
})

// const insertRoster = () => {

//     mates.forEach(element => {  
//         let sql1 = "INSERT INTO characters (name, photo, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
//         let values = [
//             element.name,
//             element.photo,
//             element.scores[0],
//             element.scores[1],
//             element.scores[2],
//             element.scores[3],
//             element.scores[4],
//             element.scores[5],
//             element.scores[6],
//             element.scores[7],
//             element.scores[8],
//             element.scores[9]
//         ]
//         var sql = connection.query(sql1, values, (err, res) => {
//             if (err) throw err;
//             console.log("1 row inserted successfully");
//         }) 
//         console.log(sql.sql);
//     });
// }
// insertRoster();

connection.end();