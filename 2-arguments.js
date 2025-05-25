const { argv } = require('node:process');

if (argv[2] == null) {
	console.log("No argument");
}
else if (argv[3])
	console.log("Arguments found");
else
	console.log("Argument found");
