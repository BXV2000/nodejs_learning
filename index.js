let express = require('express');
let app = express();
let mysql = require('mysql');
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "monsterhunter"
});
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// app.get('/public/home.html', function (req, res) {          
//     var sql = "SELECT * FROM surveyform";
//     con.query(sql, function(err, results) {
//       if (err) throw err;
//       res.send(results);
//     });
// });

app.get("/", (req, res) => {
    res.render("search")
})

app.get("/data",(req, res)=>{
    res.redirect("/");
})

app.listen(3000);