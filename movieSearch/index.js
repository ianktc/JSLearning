var express = require("express");
var request = require("request");

var app = express();
app.set("variew engine", "ejs");

// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
	res.render("search");
});

app.get("/results", function(req, res){

	var url = "http://omdbapi.com/?s="; 
	
	//get searched item
	var title = req.query.search;
	var key = "&apikey=thewdb";
	
	request(url + title + key, function(error, response, body){
		if(error){
				console.log("Something went wrong");
				console.log(error);
		} else if(!error && response.statusCode == 200){
			//must parse the body string to get it into an object
			var parsedData = JSON.parse(body);
			// console.log(parsedData); 
			res.render("results", {parsedData: parsedData});
		}
	});
});

app.listen(3000, function(){
	console.log("Server begun");
})