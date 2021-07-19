let express = require('express');
let router = express.Router();
let db = require('../database');

router.get('/form', function(req, res) { 
    res.render('hello');
});

router.post('/create', function(req, res) {
    const userDetails=req.body;
    let sql = 'INSERT INTO surveyform (hunterName, email, experience, hunterRank, weapons, opinion, note) VALUES ("vinhz", "abc@abc.com", 23, "lowrank", "bow", "yes", "abc")';
    db.query(sql, userDetails,function (err, data) { 
        if (err) throw err;
           console.log('User data is inserted successfully '); 
    });
    res.redirect('/users/form');  // redirect to user form page after inserting the data
});

module.exports = router;