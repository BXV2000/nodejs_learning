let express = require('express');
let router = express.Router();
let db = require('../database');

router.get('/', function(req, res) {
  let sql='SELECT * FROM surveyform WHERE isActive=1';
  db.query(sql, function (err, data) { 
    if (err) {
      console.log(err);
      res.status(500).json({message: 'Hello there!'});
    };
    console.log("Search db connected");
    res.render('search', {profile:data});
  });
});

router.post('/data', function(req, res) {
  let sql='SELECT * FROM surveyform WHERE isActive=1';
  db.query(sql, function (err, data) { 
    if (err) {
      console.log(err);
      res.status(500).json({message: 'Hello there!'});
    };
    console.log("Search db connected");
    res.render('search', {profile:data});
  });
});

router.post('/delete',function(req,res){
  let id = req.body.id;
  let sql=`UPDATE surveyform SET isActive=0 WHERE id=${id}`;
  db.query(sql, function (err, data) {
    if (err) {
      console.log(err);
      res.status(500).json({message: 'Hello there!'});
    };
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