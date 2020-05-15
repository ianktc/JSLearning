//ejs - embedded javascript

var express = require("express");
var app = express();

var bodyParser = require("body-parser");

//use body-parser
app.use(bodyParser.urlencoded({extended: true}));

//serve contents of public directory (including style sheets)
app.use(express.static("public"));

//forgo file extensions (tell it to expect ejs files)
app.set("view engine", "ejs");



var friends = [ "John", "Amy", "Ana", "Alex", "Susan"];


//home directory
app.get("/", function(req, res){
	//can render html files - like dynamic html files
	res.render("home.ejs");

	//res.send("<h1>Welcome</h1>");
});

//love page
app.get("/fallinlovewith/:thing", function(req, res){
	var thing = req.params.thing;

	//use key value pair to pass vars to love.ejs
	res.render("love.ejs", {thingVar: thing});
});

app.post("/addFriend", function(req, res){
	var newFriend = req.body.newFriend;
	console.log(req.body.newFriend);
	console.log(req.body);
	friends.push(newFriend);
	res.redirect("/posts");
});

//posts page
app.get("/posts", function(req, res){
	res.render("posts.ejs", {friends: friends});
});

app.listen(3000, function(){
	console.log("Server run on port 3000");
});