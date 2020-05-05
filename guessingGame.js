var guess;
var number = 9;
var correct = false;

while(!correct){

	guess = prompt("Input a guess");

	if(guess == 9) {
		alert("Correct Guess!");
		correct = true;
	}
	else if (guess < number) alert("Too Low");
	else alert("Too High");
}

var num1 = -10;
while(num1 < 20){
	console.log(num1);
	num1++;
}

var num2 = 10;
while(num2 <= 40){
	console.log(num2);
	num2 += 2;
}

var num3 = 300;
while(num3 <= 333){
	if(num3 % 2 != 0) console.log(num3);
	num3++;
}

var num4 = 5;
while(num4 <= 50){
	if(num4 % 5 == 0 || num4 % 3 == 0) console.log(num4);
	num4++;
}

var response = prompt("Are we there yet?");

while(response.indexOf("yes") === -1 || response.indexOf("yeah") === -1){
	response = prompt("Are we there yet?");
}

alert("Yay we made it");