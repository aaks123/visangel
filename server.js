const express = require('express');
var app = express();
var routes = require("./routes");
var port = process.env.port || 8080

app.use(express.static(__dirname+'/public'));

app.use('/',routes);

app.listen(port,function(){
    console.log("Connected to "+port+" ...")
});