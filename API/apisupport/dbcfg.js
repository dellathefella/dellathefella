//Database connection
var mysql = require('mysql');
var cfg = mysql.createConnection({
    host : "98.117.196.205",
    user : "jacobianonline",
    password : "VFO1092!@#4",
    database : "jacobianonline"
});

//Intialize MySQL session. If you end the connection
//you're gonna have to call it again to open the 
//database connection back up.
function InitializeMySQLSession(){
    cfg.connect(function(err) {
        if (err){
            console.log("Test connection to GRAVEYARD database server failed!! Please check dbcfg.js or contact database admin.");
            console.log("The application will not behave properly without the database connection. Quitting now....");
            process.exit();
        return;
        }
        console.log("Connection to database server successfully created!");
    });
};

module.exports = {cfg,  InitializeMySQLSession};