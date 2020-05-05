var number = prompt("Input a number: ");
var number1 = prompt("Input another number: ");
var sentence = prompt("Input a sentence to case convert: ");

var result = isEven(number);
var factor = factorial(number1);
var conversion = caseConvert(sentence);

console.log("This number is " + result);
console.log("The factorial is " + factor);
console.log(conversion);


function isEven(number){
	if(Number(number) % 2 == 0) result = "even";
	else result = "odd";
	return result;
}

function factorial(number1){
	var it =  1;
	var factor = 1;
	while(Number(it) <= number1){
		factor *= it;
		it++;
	}
	return factor;
}

function caseConvert(sentence){
	var newSentence = "";
	var it = -1;

	while(it < sentence.length){
		it++;

		if(sentence.charAt(it).charCodeAt() < 97 || sentence.charAt(it).charCodeAt() > 122){
			newSentence += "_";
			continue;
		} else {
			newSentence += sentence.charAt(it);
		}
	}

	return newSentence;
}
