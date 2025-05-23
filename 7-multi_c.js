const {argv} = require('node:process');

const arr = [];
argv.forEach((val) => {
	arr.push(val);
});

let num = Number(arr[2]);
if (isNaN(num)) {
	console.log("Missing number of occurrences");
}
else
	for(let i = 0; i < num; i++) {
		console.log("C is fun");
	}
