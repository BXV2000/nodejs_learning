var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("hello")
})

app.listen(3000);