var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.render('index');
})

router.get('/Profile',function(req,res){
    res.render('profile');
})

router.post('/addDonation',function(req,res){
    var user = req.body.name;
    var amount = req.body.amount;
    var org = req.body.org;
    var date = req.body.date;
    var reply = `A donation of amount ${amount} has been made by ${user} to ${org}`;
    console.log(reply);
    res.send(reply);

})

module.exports = router;