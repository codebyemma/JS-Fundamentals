const {argv} = require('node:process');

let num = Number(argv[2]);

function factorial(n) {
	if (n === 1 || isNaN(n)) {
		return 1;
	}
	else
	{
		let pro = factorial(n - 1) * n;
		return pro;
	}
}

console.log(factorial(num));
