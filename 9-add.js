const {argv} = require('node:process');

const arr = [];

argv.forEach((val) => {
	arr.push(val);
});

let nun = Number(arr[2]);
let num = Number(arr[3]);

function add(a, b) {
	return a + b
}
if (isNaN(nun) || isNaN(num)) {
	console.log("NaN");
}
else
{
	let sum = add(nun, num);
	console.log(sum);
}
