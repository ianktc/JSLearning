//including package
var mongoose = require("mongoose");

//deprecation 
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//connect to MongoDB, where cat_app is the database
mongoose.connect("mongodb://localhost/cat_app");

//define schema
var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

//take catSchema into a 'model' called Cat - this is really an object
//this allows us to use diff methods on Cat to manipulate data
var Cat = mongoose.model("Cat", catSchema);

// // adding new cat to db
// var george = new Cat({
// 	name: "Mrs. Norris",
// 	age: 7,
// 	temperament: "Evil"
// });

// //add this new cat to the db
// george.save(function(err, cat){
// 	//adding callback function to detect if item properly saved
// 	if(err){
// 		console.log("Something went wrong!");
// 	} else {
// 		console.log("Cat successfully saved");
// 		console.log(cat);
// 	}
// });

//create() makes a new object and saves it at the same time
Cat.create({
		name: "Snow White",
		age: 15,
		temperament: "Bland"
	}, function(err, cat){
		if(err) console.log(err);
		else console.log(cat);
});

//retrieving all cats from db and print each one
Cat.find({}, function(err, cats){
	if(err){
		console.log("Error");
		console.log(err);
	} else {
		console.log("All Cats: ");
		console.log(cats);
	}
})