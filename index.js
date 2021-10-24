var express=require('express');
var app=express();
var register=require('./controller/newRegister');
app.use(express.json());

app.use(register);

app.listen(3000,()=>
{
	console.log("Server is running at 3000");
});