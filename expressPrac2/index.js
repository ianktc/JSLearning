//ejs - embedded javascript

var express = require("express");
var app = express();

//serve contents of public directory (including style sheets)
app.use(express.static("public"));

//forgo file extensions (tell it to expect ejs files)
app.set("view engine", "ejs");

app.get("/", function(req, res){
	//can render html files - like dynamic html files
	res.render("home.ejs");

	//res.send("<h1>Welcome</h1>");
});

app.get("/fallinlovewith/:thing", function(req, res){
	var thing = req.params.thing;

	//use key value pair to pass vars to love.ejs
	res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", author: "Person"},
		{title: "Post 2", author: "Person"},
		{title: "Post 3", author: "Person"}
	];

	res.render("posts.ejs", {posts: posts});
});

app.listen(3000, function(){
	console.log("Server run on port 3000");
});