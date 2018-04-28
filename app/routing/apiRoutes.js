var path = require('path');
var express = require('express');
var friends = require("../data/friends")

module.exports = function(){
    var router = express.Router();

    router.get("/api/friends",function(req,res){
        return res.json(friends);
    })
    router.post("/api/friends",function(req,res){
        var guy = req.body;
        
        friends.push(guy);
        var match;
        var matchDiff = 1000;
        for(var i = 0; i<friends.length;i++){
            var diff=0;
            for(var j = 0; j<friends[0].scores.length; j++){
                diff += Math.abs(guy.scores[j]-friends[i].scores[j]);
            }
            if(diff<matchDiff){
                match = friends[i];
                matchDiff = diff;
            }
        }
        return res.json(match);
        
    })
    router.post("/api/clear",function(req,res){
        friends = [];
    })
    return router;
}