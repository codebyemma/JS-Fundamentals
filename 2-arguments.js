const { argv } = require('node:process');

if (argv[2] == null) {
	console.log("No argument");
}
else
	console.log("Argument found");
