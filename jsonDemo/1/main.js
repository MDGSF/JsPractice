var fs = require('fs');

console.log("json demo");

fs.readFile('./test.json', 'utf8', function(err, data) {
	console.log(typeof data, data);

	obj = JSON.parse(data);
	console.log(typeof obj, obj);
	console.log(obj.name);
	console.log(obj.name2);
});
