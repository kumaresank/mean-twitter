var mysql = require('mysql');
var config = require('../config');
var connection = mysql.createConnection(config.connection);

connection.connect();

exports.insertTweet = function(twits) {
    connection.query('insert into tweets set ?',twits,function(err,result){
        if(!err) console.log(err);
        return;
    });
};