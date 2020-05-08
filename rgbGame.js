var colours = createArray();
var pickedColour; 
var squares = document.querySelectorAll(".square");

//change title to picked rgb
var colourDisplay = document.getElementById("colourDisplay");
var message = document.querySelector("#message");

//play game
game();

//game function
function game(){

	document.querySelector("h1").style.backgroundColor = "#232323";
	document.querySelector("#reset").textContent = "New Colours";

	colourDisplay.textContent = pickedColour;

	for(i = 0; i < squares.length; i++){
		
		//assign square colours
		squares[i].style.backgroundColor = colours[i];

		//create event listeners (click) for each square
		squares[i].addEventListener("click", function(){

			//detect if correct or incorrect
			if(this.style.backgroundColor === pickedColour){
				win();
			} else {
				message.textContent = "Try Again";
				this.style.backgroundColor = "#232323";
			}

		});
	}

}

//reset button event
document.querySelector("#reset").addEventListener("click", function(){
	colours = createArray();
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
function createArray(){
	var colours = [];

	for(i = 0; i < 6; i++){
		colour = colourConstruct();
		colours.push(colour);
	}

	pickedColour = colours[Math.floor(Math.random() * 6)];
	
	return colours;
}

//win - set all squares to same colour
function win(){
	message.textContent = "Correct";
	for(i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = pickedColour;
	}
	document.querySelector("h1").style.backgroundColor = pickedColour;
	document.querySelector("#reset").textContent = "Play Again?";
}
