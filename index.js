let express = require('express');
let app = express();
let usersRouter = require('./routes/form.route');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use('/', usersRouter);

// app.post('/public/home.html', function (req, res) {          
//     var sql = "SELECT * FROM surveyform";
//     con.query(sql, function(err, results) {
//       if (err) throw err;
//       res.send(results);
//     });
// });

app.listen(3000);