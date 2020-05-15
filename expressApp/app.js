var express = require("express");
var app = express();

//get request is made to root path
app.get("/", function(req, res){
	//send response
	res.send("Hi there!");
});

app.get("/bye", function(req, res){
	res.send("Bye");
});

app.get("/:anyString", function(req,res){

	//log the param anyString in the request
	console.log(req.params);
	
	var subpage = req.params.anyString;

	res.send("Welcome to " + subpage);
});

app.get("*", function(req,res){
	res.send("404 Error");
});

//listen for other requests
app.listen(3000, function(){
	console.log("Server listening on port 3000");
});

//notes:

//route order matters - only match one route ever
//use : to match any
//use params to make webpages dynamic - isn't possible to guess every single request



