// Import database session authentication information
// and initializaiton functions.
//Main Driver JS file
var fs = require('fs');
var database = require('./apisupport/dbcfg.js');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
var port = 7234;
var URL = "192.168.1.19";

//Express crap
app.use(session({
    secret: 'eccothedolphin',
    resave: true,
    saveUninitialized: true
}));

console.log("API running on " +  URL + ":" + port);

//Express uses the bodyparser to create JSON
//Bodyparsing arguements for the login page.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
console.log('\nServer spooling up. \n');
database.InitializeMySQLSession();

// Fetch your endpoints in react and handle the frontend there
// These endpoints here should only do things like returning json to the frontend
// or handle requests to the database, create files/directories, etc.
                                             
// Pulls blog posts from the database server.
app.post('/api/displayposts', function(req, res) {    
 	database.cfg.query('SELECT * FROM posts', function(err, results, fields){
		if(err){
            res.send({message: 'Failed to get blog posts'});
            console.log(err);
		} else {
			res.send(results);
		}
	});
});

app.post('/api/displayquotes', function(req, res) {    
    database.cfg.query('SELECT * FROM quotes', function(err, results, fields){
       if(err){
           res.send({message: 'Failed to get blog quotes'});
           console.log(err);
       } else {
           res.send(results);
       }
   });
});

app.post('/api/sendmessage', function(req, res) {
   let message = req.body.message;
   let name = req.body.name;
   let email = req.body.email;
    database.cfg.query('INSERT INTO messages (message_body, message_sendername, message_email) VALUES (? ,?,?)'
    ,[message, name, email], function(err, results, fields) {
        if (!err){
            console.log("Message submitted")
        } else {
            console.log(err);
        }
    });
});

app.listen(port, URL);

