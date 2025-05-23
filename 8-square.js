const {argv} = require('node:process');

let arr = [];

argv.forEach((val) => {
	arr.push(val);
});

let num = Number(arr[2]);
if (isNaN(num)) {
	console.log("Missing size");
}
else
	for(let i = 0; i < num; i++) {
		let str = "";
		for(let y = 0; y < num; y++) {
			str += "x";
		}
		console.log(str);
	}
