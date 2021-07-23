let express = require('express');
let router = express.Router();
let db = require('../database');

let userList = [];

function getData(callback){
  userList=[];
  let count =0;
  let sql='SELECT * FROM surveyform';
  db.query(sql,function (err, data){
    if (err) throw err;
    userList.push(data);
    console.log(userList);
  }).then(()=>callback());
}

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
  // res.redirect("/search")
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

module.exports = router;