var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var api = require("./app/routing/apiRoutes")
var html = require("./app/routing/htmlRoutes")

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(api());
app.use(html());


app.listen(PORT, function(){
    console.log("App listening on PORT " +PORT);
})