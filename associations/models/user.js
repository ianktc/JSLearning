var mongoose = require("mongoose");

//USER model
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Post"
	}]
});

//exporting out 
module.exports = mongoose.model("User", userSchema);