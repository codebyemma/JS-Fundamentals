const {argv} = require('node:process');

let num = Number(argv[2]);
if (isNaN(num) || num == 0) {
	console.log("Missing size");
}
else
{
	for(let i = 0; i < num; i++) {
		let str = "";
		for(let y = 0; y < num; y++) {
			str += "x";
		}
		console.log(str);
	}
}
