//check off todos with clicking - assign click event for each li
var input = document.getElementById("input");
var items = document.getElementsByTagName("li");
var remove = document.getElementsByTagName("span");	
var plus = document.querySelector(".fa-plus");

for(i = 0; i < items.length; i++){
	listen(i);
}

var number = i;

//add listeners for all tasks
function listen(i){
	
	remove = document.getElementsByTagName("span");	
	items = document.getElementsByTagName("li");

	//complete item
	items[i].addEventListener("click", function(){
		this.classList.toggle("completed");
	});

	//remove item
	remove[i].addEventListener("click", function(){
		this.parentNode.remove();
		number--;
	});

}

//get new entries
input.addEventListener("keydown", function(event){
	
	//look for enter key
	if(event.keyCode === 13){
		
		var newEntry = this.value;

		var task = document.createElement("li");							//create li 
		var del = document.createElement("span");							//create del
		var sign = document.createElement("i");								//create icon 

		var text = document.createTextNode(newEntry);						//create text element
		sign.innerHTML = '<i class="fa fa-trash" aria-hidden="true" </i>';	//create class for icon
		del.appendChild(sign);												//append sign to span
		task.appendChild(del);												//append span to li
		task.appendChild(text);												//append text to li
		document.getElementById("list").appendChild(task);					//add li to ul

		this.value = "";

		listen(number);
		number++;	
	}

});

//fade in and out the entry bar
plus.addEventListener("click", function(){
	input.classList.toggle("hide");
});