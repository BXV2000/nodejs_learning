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
    // let usersDetails = req.body;
    let sql = `INSERT INTO surveyform (hunterName, email, experience, hunterRank, weapons, opinion, note) VALUES ('${hunterName}', '${email}', ${experience}, '${hunterRank}', '${weapons}', '${opinion}', '${note}')`;
    db.query(sql,function (err, data) { 
        if (err) {
            console.log(err);
            res.status(500).json({status: false, message: 'Woopsie'});
        };
        res.json({status: success, message:'User data is inserted successfully'}); 
    });
    res.redirect('/form');  // redirect to user form page after inserting the data
});


module.exports = router;