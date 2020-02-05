//Database connection
var mysql = require('mysql');
var cfg = mysql.createConnection({
    host : "96.244.191.34",
    user : "jacobianonline",
    password : "VFO1092!@#4",
    database : "jdella1996"
 });

//Intialize MySQL session. If you end the connection
//you're gonna have to call it again to open the 
//database connection back up.
function InitializeMySQLSession(){
    cfg.connect(function(err) {
        if (err){
            console.log("Test connection to GRAVEYARD database server failed!! Please check dbcfg.js or contact database admin.");
            console.log("The application will not behave properly without the database connection. Quitting now....");
            console.log(err);
            process.exit();
        return;
        }
        console.log("Connection to database server successfully spawned!");
    });
};

 
module.exports = {cfg,  InitializeMySQLSession};