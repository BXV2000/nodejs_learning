let express = require('express');
let app = express();
let form_router = require('./routes/form.route');
let menu_router = require('./routes/menu.route');
let search_router = require('./routes/search.route');
let bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use('/form', form_router);
app.use('/search', search_router);
app.use('/', menu_router);

// app.post('/public/home.html', function (req, res) {          
//     var sql = "SELECT * FROM surveyform";
//     con.query(sql, function(err, results) {
//       if (err) throw err;
//       res.send(results);
//     });
// });

app.listen(3000);