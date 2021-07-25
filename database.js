let mysql = require('mysql');

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "monsterhunter"
});

conn.connect(function(err) {
    if (err) {
        console.log(err);
    };
    console.log('Database is connected successfully !');
});

module.exports = conn;