var express=require('express');
var app=express();
var conn=require('../model/dbconfig');
var router=express.Router();
var validateEmail=require('email-validator');
var bcrypt=require('bcryptjs');
app.use(express.json());

router.post('/register',function(req,res)
{
    var mail=req.body.email;
	var pass=req.body.pass;
	var cpass=req.body.cpass;
	if((validateEmail.validate(mail)&&(pass.length>=10)&&(pass == cpass))
    {
		var sql="SELECT email FROM register WHERE email = '"+mail+"'";
		conn.query(sql,(err,result)=>
		{
			if(err) throw(err);
			if(result.length == 0)       
			{
				pass=bcrypt.hashSync(pass,10);
				var sql1="INSERT INTO register VALUES('"+req.body.fname+"','"+req.body.lname+"','"+mail+"','"+req.body.mobile+"','"+pass+"','"+req.body.country+"')";
				conn.query(sql1,(err,result1)=>
				{
					if(err) throw err;
				});
				console.log("Successfuly registered.")
				var mesg = "Successfuly registered.";				
			}
			else
			{
				console.log("Email already exist.!!");
				var mesg="Email already exist.!!";
			}
		});
	}	
	else	
	{
		var mesg="Email and Password in Invalid..!!";
	}
	res.send(mesg);			
});

module.exports = router;