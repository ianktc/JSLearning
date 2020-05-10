var size = 6;
var colours = createArray(size);
var pickedColour; 
var squares = document.querySelectorAll(".square");

//start with hard
document.querySelector("#easy").classList.remove("selected");
document.querySelector("#hard").classList.add("selected");

//play game
game();

//main game function
function game(){

	//change title to picked rgb
	var colourDisplay = document.getElementById("colourDisplay");
	var message = document.querySelector("#message");

	document.querySelector("h1").style.backgroundColor = "steelblue";
	document.querySelector("#reset").textContent = "New Colours";

	colourDisplay.textContent = pickedColour;
	
	for(i = 0; i < squares.length; i++){
		
		//assign square colours
		squares[i].style.backgroundColor = colours[i];

		//create event listeners (click) for each square
		squares[i].addEventListener("click", function(){

			//detect if correct or incorrect
			if(this.style.backgroundColor === pickedColour){
				win(size);
			} else {
				message.textContent = "Try Again";
				this.style.backgroundColor = "#232323";
			}

		});
	}

	//condition for easy mode
	if(size == 3){
		for(i = 3; i < 6; i++){
			squares[i].style.backgroundColor = "#232323";
		}
	}

}

//easy and hard buttons
document.querySelector("#easy").addEventListener("click", function(){
	document.querySelector("#easy").classList.add("selected");
	document.querySelector("#hard").classList.remove("selected");
	size = 3;
	colours = createArray(size);
	game();
});

document.querySelector("#hard").addEventListener("click", function(){
	document.querySelector("#easy").classList.remove("selected");
	document.querySelector("#hard").classList.add("selected");
	size = 6;
	colours = createArray(size);
	game();
});

//reset button event
document.querySelector("#reset").addEventListener("click", function(){
	colours = createArray(size);
	message.textContent = "";
	document.querySelector("h1").style.backgroundColor = "steelblue";
	game();
});

//construct a random colour
function colourConstruct(){
	colour = "rgb(";
	var red = Math.floor(Math.random() * 256).toString();
	var green = Math.floor(Math.random() * 256).toString();
	var blue = Math.floor(Math.random() * 256).toString();
	
	colour = colour + red + ", " + green + ", " + blue + ")"; 
	return colour;
}

//populate array
function createArray(size){
	var colours = [];

	for(i = 0; i < size; i++){
		colour = colourConstruct();
		colours.push(colour);
	}

	if(size == 6) pickedColour = colours[Math.floor(Math.random() * 6)];
	else pickedColour = colours[Math.floor(Math.random() * 3)];
	
	return colours;
}

//win - set all squares to same colour
function win(size){
	message.textContent = "Correct";

	for(i = 0; i < size; i++){
		squares[i].style.backgroundColor = pickedColour;
	}

	document.querySelector("h1").style.backgroundColor = pickedColour;
	document.querySelector("#reset").textContent = "Play Again?";
}
