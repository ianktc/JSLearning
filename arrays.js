//function that prints an array in reverse order

var input = [1, 2, 3, 4, 5, 6, 7, 8];

function printReverse(input){
	for(var i = input.length; i >= 0; i--){
		console.log(input[i]);
	}
}

//functino that prints whether an array is uniform

var input1 = [1, 2, 1, 1, 1];
var uniform = true;

function isUniform(input1){
	var same = input1[0];

	input1.forEach(function(item){
		if(item != same) uniform = false;
	});

	if(uniform) console.log("True");
	else console.log("False");
}

//function that finds sum of array

var input2 = [1, 2, 3, 4, 5, 6, 7, 8];
var sum = 0;

function sumArray(input2){
	input2.forEach(function(item){
		sum += item;
	});

	console.log("Sume is: " + sum);
}

//function that finds the max element of an array

var input3 = [1, 4, 6, 453, 4512, 41, 300043, 390910349, 1000000000];
var max = 0;

function findMax(input3){
	input3.forEach(function(item){
		if(item > max) max = item;
	});

	console.log("Max element is " + max);
}

//function that emulates forEach()

function myForEach(arr, func){
	for(i = 0; i < arr.length; ++i){
		func(arr[i]);
	}
}