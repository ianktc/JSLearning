var mongoose = require("mongoose");

//deprecation 
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//connect to MongoDB, where yelp_camp is the database
mongoose.connect("mongodb://localhost/associations_demo");

var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
});

var User = mongoose.model("User", userSchema);
var Post = mongoose.model("Post", postSchema);

// var newUser = new User({
// 	email:"hermione@hogwarts.com",
// 	name: "Hermione Granger"
// });

// newUser.posts.push({
// 	title: "How to brew polyjuice potion",
// 	content: "Go to potions to learn it."
// });

User.findOne({name: "Hermione Granger"}, function(err, user){
	if(err) console.log(err);
	else {
		user.posts.push({
			title: "Things I hate",
			content: "Malfoy, blah, blah"
		});

		user.save(function(err, user){
			if(err) console.log(err);
			else console.log(user);
		});

		console.log(user);
	}
});

// Post.create({
// 	title: "My first post",
// 	content: "This is my first post on this demo app"
// }, function(err, post){
// 	if(err) console.log(err);
// 	else console.log(post);
// })

// User.create({
// 	title: "My first post",
// 	content: "This is my first post on this demo app",
// }, function(err, post){
// 	if(err) console.log(err);
// 	else console.log(post);
// })