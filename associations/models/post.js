var mongoose = require("mongoose");

//POST model
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

//exporting out 
module.exports = mongoose.model("Post", postSchema);