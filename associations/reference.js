var mongoose = require("mongoose");

//deprecation 
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//connect to MongoDB, where yelp_camp is the database
mongoose.connect("mongodb://localhost/associations_demo");

//use model exports instead 
var Post = require("./models/post");
var Post = require("./models/user");

// User.create({
// 	email: "bob@gmail.com",
// 	name: "Bob Smith"
// });

//note the id that is created within the post object 
// Post.create({
// 	title: "My first post using reference method of associations",
// 	content: "This is an example of making a post with the reference method."
// }, function(err, post){
// 	if(err) console.log(err);
// 	else console.log(post);
// });


// Post.create({
// 	title: "My first post using reference method of associations",
// 	content: "This is an example of making a post with the reference method."
// }, function(err, post){
// 	if(err) console.log(err);
// 	else {
// 		User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
// 			if(err) console.log(err);
// 			else {
// 				foundUser.posts.push(post);
// 				// foundUser.save(function(err, data){
// 				// 	if(err) console.log(err);
// 				// 	else console.log(data);
// 				// });
// 			}
// 		});
// 	}
// });

//finding one user
//finding all posts for that user - populate("posts")

User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err. user){
	if(err) console.log(err);
	else console.log(user);
}