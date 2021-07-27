const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { errorLogger, errorResponder, failSafeHandler } = require('./error.handler')
const formRouter = require('./routes/form.route');
const menuRouter = require('./routes/menu.route');
const searchRouter = require('./routes/search.route');
const methodOverride = require('method-override');



//method overwrite
app.use(methodOverride('_method'));



//body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

//view engine & css file
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//route
app.use('/', menuRouter);
app.use('/form', formRouter);
app.use('/search', searchRouter);

//custom error handler middleware
app.use(errorLogger)
app.use(errorResponder)
app.use(failSafeHandler)

app.listen(3000, () => {console.log(`Example app listening at http://localhost:3000`)})