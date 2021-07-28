let express = require('express');
let router = express.Router();
let db = require('../database');

router.get('/', function(req, res) { 
    res.render('form');
});

router.post('/create', function(req, res) {
    let hunterName = req.body.hunterName,
        email = req.body.email,
        experience = req.body.experience,
        hunterRank = req.body.hunterRank,
        weapons = req.body.weapons,
        opinion = req.body.opinion,
        note = req.body.note,
        isActive = 1,
        temp,
        emailValidation = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    //validate email, checkbox and radio button
    if(!emailValidation.test(email) || weapons === undefined || opinion === undefined){
        // res.status(401).json({message: 'Invalid email, please follow the syntax "abc@abc.com"'});
        return res.render('formError')
    }
    // if(weapons === undefined || opinion === undefined){
    //     res.status(401).json({message: 'Please fill the required sections!'});
    // }

    // let sql1 = `SELECT email FROM surveyform WHERE email = ('${email}')`;
    // db.query(sql1, function(err, data) {
    //     console.log(data);
    //     console.log(email);
    //     if (err) {
    //         console.log(err);
    //         res.status(500).json({message: 'Error in validation with database'});
    //     }
        
    //     if (data === temp) {
    //         // return res.status(401).json({message: 'Email is already exist!'});
    //         console.log('yes');
    //     } else {            
    //         let sql2 = `INSERT INTO surveyform (hunterName, email, experience, hunterRank, weapons, opinion, note, isActive) VALUES ('${hunterName}', '${email}', ${experience}, '${hunterRank}', '${weapons}', '${opinion}', '${note}', ${isActive})`;
    //         db.query(sql2,function (err, data) { 
    //             if (err) {
    //                 console.log(err);
    //                 res.status(500).json({message: 'Woopsie'});
    //             };
    //             res.render('formMessage');  // redirect to user form page after inserting the data
    //         });
    //     }
    // })
    
    //insert into mySQL
    let sql2 = `INSERT INTO surveyform (hunterName, email, experience, hunterRank, weapons, opinion, note, isActive) VALUES ('${hunterName}', '${email}', ${experience}, '${hunterRank}', '${weapons}', '${opinion}', '${note}', ${isActive})`;
    db.query(sql2,function (err, data) { 
        if (err) {
            console.log(err);
            res.status(500).json({message: 'Woopsie'});
        };
        res.render('formMessage');  // redirect to user form page after inserting the data
    });
});


module.exports = router;