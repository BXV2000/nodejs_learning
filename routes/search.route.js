let express = require('express');
let router = express.Router();
let db = require('../database');
const { route } = require('./form.route');

router.get('/', function(req, res) {
    let sql='SELECT * FROM surveyform';
    db.query(sql, function (err, data) {
    if (err) throw err;
    console.log("Search db connected");
    res.render('search', {profile:data});
  });
});

router.post('/data', function(req, res) {
    let searchid = req.body.searchID;
    let sql;
    if (searchid !=="") {sql=`SELECT * FROM surveyform WHERE id=${searchid}`}
    else{sql=`SELECT * FROM surveyform`};
    db.query(sql, function (err, data) {
    if (err) throw err;
    console.log("Done!!");
    res.render('search', {profile:data});
  });
});

router.post('/delete',function(req,res){
    let id = req.body.id;
    let sql=`DELETE FROM surveyform WHERE id=${id}`;
    db.query(sql, function (err, data) {
        if (err) throw err;
        console.log("Deleted!!");
        res.render('search', {profile:data});
      });
    res.redirect("/search")
})

router.post('/update',function(req, res){
  let changeHunterName = req.body.changeHunterName;
  let changeHunterEmail= req.body.changeHunterEmail;
  let id = req.body.id;
  let sql=`UPDATE surveyform SET hunterName='${changeHunterName}', email='${changeHunterEmail}' WHERE id=${id}`;
  db.query(sql, function (err, data) {
    if (err) throw err;
    console.log("Changed!!!");
    res.render('search', {profile:data});
  });
  res.redirect("/search")
})

module.exports = router;