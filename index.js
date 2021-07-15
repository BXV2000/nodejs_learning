const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const { json } = require('express');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("hello")
})

app.listen(3000);