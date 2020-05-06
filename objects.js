var running = true;
var mname;
var watched;
var stars;

var movieDB = [
	{
		name: "Knives Out",
		rating: 5,
		viewed: true
	}, {
		name: "Jojo Rabbit",
		rating: 3,
		viewed: false
	}, {
		name: "Parasite",
		rating: 4.5,
		viewed: true
	}
];

do {

	mname = prompt("Input a movie name: ");
	watched = prompt("Have you watched " + mname + "?");
	stars = prompt("What do you rate " + mname);

	if(name == "quit" || watched == "quit" || stars == "quit") break;

	movieDB.push({
		name: mname,
		rating: stars,
		viewed: watched
	});

} while (running);

printLibrary();

function printLibrary(){
	movieDB.forEach(function(movie){

		if(movie.viewed == false){
			console.log("You have not watched " + movie.name + " - " + movie.rating + " stars.");
		} else {
			console.log("You have watched " + movie.name + " - " + movie.rating + " stars.");
		}
	});
}
