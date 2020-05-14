var faker = require("faker");
var prod, price;

for(var i = 0; i < 10; i++){

	prod = faker.commerce.productName();
	price = faker.commerce.price();

	console.log(prod + " - $" + price);

}
