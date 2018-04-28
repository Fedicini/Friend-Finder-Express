var path = require('path');
var express = require('express');
var friends = require("../data/friends")

module.exports = function(){
    var router = express.Router();
    router.get("/survey",function(req,res){
        return res.sendFile(path.join(__dirname,"../public/survey.html"))
    })
    router.get("*",function(req,res){
        return res.sendFile(path.join(__dirname,"../public/home.html"))
    })
    return router;
}