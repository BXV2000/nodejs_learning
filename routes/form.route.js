let express = require('express');
let router = express.Router();
let db = require('../database');

router.post('/create', function(req, res) {
    // let hunterName = req.body.hunterName;
    // console.log(hunterName);
    // let email = req.email,
    //     experience = req.experience,
    //     hunterRank = req.hunterRank,
    //     weapons = req.weapons,
    //     opinion = req.opinion,
    //     note = req.note;
    // let usersDetails = req.body;
    //('${hunterName}', '${email}', ${experience}, '${hunterRank}', '${weapons}', '${opinion}', '${note}')
    let sql = `INSERT INTO surveyform (hunterName, email, experience, hunterRank, weapons, opinion, note) VALUES ('abc', 'abc@abc.com', 34, 'high-rank', 'bow', 'yes', 'abc)`;
    db.query(sql,function (err, data) { 
        if (err) throw err;
           console.log('User data is inserted successfully '); 
    });
    res.redirect('/form');  // redirect to user form page after inserting the data
});

module.exports = router;