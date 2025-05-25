const {argv} = require('node:process');

lis =[];

argv.forEach((val) => lis.push(val));

let num = Number(lis[2]);
if (isNaN(num)) {
	console.log("Missing size");
}
else if (num > 0)
{
	for(let i = 0; i < num; i++) {
		let str = "";
		for(let y = 0; y < num; y++) {
			str += "X";
		}
		console.log(str);
	}
}
