//var firstName = prompt("What is your first name: ");
//var lastName = prompt("What is your last name: ");
var age = prompt("How old are you: ");

//leap year every 4 years
//age / 4 = num leap years

//alert("Nice to meet you " + firstName + " " + lastName + "\nYour age is " + age);

var leapYears = age/4;
alert("You are roughly " + (age*365 + leapYears) + " days old!");
