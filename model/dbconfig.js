var mysql=require('mysql');

var con=mysql.createConnection({

    host : "localhost",
    user : "root",
    password: "",
    database: "drive"
});

con.connect(function(err){
    if(err) throw (err);
    else
        console.log("Connected to DB");
});

module.exports = con;
