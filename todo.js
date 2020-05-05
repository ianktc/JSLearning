var running = true;
var command;
var list = []


do {

	command = prompt("What would you like to do: ");

	if(command == "new") {
		var item = prompt("Provide an entry: ");
		list.push(item);
		console.log("Successfully entered.");
	}else if(command == "list") {
		list.forEach(function(entry, i){
			console.log(i + ": " + entry);
		});
	}else if(command == "delete"){
		var index = prompt("which index: ");
		list.splice(index, 1);
		console.log("Successfully deleted.");
	}else if(command == "quit") {
		console.log("Successfully quit.");
		running = false;
	} 

} while(running)