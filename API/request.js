var request = require("request");
request("http://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&APPID=962fb7f344aea98c3f2a985f892c8dad", function(error, response, body){
	if(error){
		console.log("Something went wrong");
		console.log(error);
	}
	else if(!error && response.statusCode == 200){

		//must parse the body string to get it into an object
		var parsedData = JSON.parse(body);
		
		var date = new Date(parsedData["sys"]["sunrise"] * 1000);

		var hours;

		//UNIX time conversion kinda wack

		if(date.getHours() - 8 < 0) hours = date.getHours() + 4;
		else hours = date.getHours() - 8;
		var minutes = "0" + date.getMinutes();
		var seconds = "0" + date.getSeconds();

		var time = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

		console.log(time); 	
	}
})