var express = require('express');
var router = express.Router();
var config = require('../config');
var Twitter = require('twitter');
var Tweet = require('../models/tweet');
 
var client = new Twitter(config.twitter);

router.get('/', function(req, res) {
    client.get('search/tweets', req.query, function(error, tweets, response) {
        if (!error) {
            tweets.statuses.forEach(function(item) {
                var twit = {
                    tweet_id : item.id_str,
                    name : item.user.name,
                    query : req.query.q,
                    text : escape(item.text),
                    followers : item.user.followers_count,
                    location : item.user.location,
                    profile_image : item.user.profile_image_url,
                    created_at : new Date(item.created_at)
                };               
                Tweet.insertTweet(twit);
            }); 
            res.json(tweets);       
        }
    }); 
});

module.exports = router;