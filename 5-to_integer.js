const {argv} = require('node:process');

const lis = [];

argv.forEach((val) => {
	lis.push(val);
});

let num = Number(lis[2]);
//console.log(num);
let x = typeof(num);
if (isNaN(num)) {
	console.log("Not a number");
}
else
	console.log(`My number: ${num}`);
