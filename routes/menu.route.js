let express = require('express');
let router = express.Router();

router.get('/', function(req, res) { 
    res.render('menu');
});

router.get('/form', function(req, res) { 
    res.render('form');
});

router.get('/search', function(req, res) { 
    res.render('search',{data});
});



module.exports = router;