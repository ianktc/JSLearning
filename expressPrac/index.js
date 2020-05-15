var express = require("express");
var app = express();

//get request is made to root path
app.get("/", function(req, res){
	//send response
	res.send("Hi there, welcome to my assignment!");
});

//speak page
app.get("/speak/:animal", function(req,res){

	var subpage = req.params.animal;
	var sound;

	if(subpage === "pig") sound = "Oink";
	else if(subpage === "dog") sound = "Woof Woof";
	else sound = "Moo";

	res.send("The " + subpage + " says " + sound);

});

//repeat page
app.get("/repeat/:repeated/:times", function(req,res){

	var string = req.params.repeated;
	var times = Number(req.params.times);

	var printed = "";

	for(var i = 0; i < times; i++){
		printed += string + " ";
	}

	res.send(printed);

});

//error
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



