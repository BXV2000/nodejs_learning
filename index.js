const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fsPromises = require('fs').promises;

const { errorLogger, errorResponder, failSafeHandler } = require('./error.handler')
const formRouter = require('./routes/form.route');
const menuRouter = require('./routes/menu.route');
const searchRouter = require('./routes/search.route');

//body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

//view engine & css file
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/one', (req, res, next) => {
    fsPromises.readFile('./one.txt')
    .then(data => res.send(data))
    .catch(err => next(err)) // passing error to custom middleware
})

app.get('/two', (req, res, next) => {
    fsPromises.readFile('./two.txt')
    .then(data => res.send(data))
    .catch(err => {
        err.type = 'redirect' // adding custom property to specify handling behaviour
        next(err)
    })
})
  
app.get('/error', (req, res) => {
    res.send("Custom error landing page.")
})

//route
app.use('/', menuRouter);
app.use('/form', formRouter);
app.use('/search', searchRouter);

//custom error handler middleware
app.use(errorLogger)
app.use(errorResponder)
app.use(failSafeHandler)

app.listen(3000, () => {console.log(`Example app listening at http://localhost:3000`)})