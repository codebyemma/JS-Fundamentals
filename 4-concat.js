const {argv} = require('node:process');

lis = [];

argv.forEach((val) => {
	lis.push(val);
});

console.log(`${lis[2]} is ${lis[3]}`); 
