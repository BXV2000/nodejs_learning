let express = require('express');
let router = express.Router();
let db = require('../database');

router.post('/create', function(req, res) {
    let hunterName = req.body.hunterName,
        email = req.body.email,
        experience = req.body.experience,
        hunterRank = req.body.hunterRank,
        weapons = req.body.weapons,
        opinion = req.body.opinion,
        note = req.body.note;
        console.log(opinion);
    let emailValidation = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailValidation.test(email))
        res.status(401).json({status: false, message: 'Invalid email, please follow the syntax "abc@abc.com"'});
    if(weapons === undefined || opinion === undefined)
        res.status(401).json({status: false, message: 'Please fill the required sections!'});
    let sql = `INSERT INTO surveyform (hunterName, email, experience, hunterRank, weapons, opinion, note) VALUES ('${hunterName}', '${email}', ${experience}, '${hunterRank}', '${weapons}', '${opinion}', '${note}')`;
    db.query(sql,function (err, data) { 
        if (err) {
            console.log(err);
            res.status(500).json({status: false, message: 'Woopsie'});
        };
        res.render('formMessage');  // redirect to user form page after inserting the data
    });
});


module.exports = router;