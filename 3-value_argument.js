const {argv} = require('node:process');

lis = [];

argv.forEach((val) => {
	lis.push(val);
});

if (lis.length < 3) {
	console.log("No argument");
}
else
	console.log(lis[2]);
