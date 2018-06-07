'use strict';

// REST entry point to do a fibonacci calculation
// IN: params.number = input number
exports.doFib = function(req, res) {
	let _number = req.params.number;

	var reply = fibonacci(_number);
	res.send(reply);
};

// fibonacci function
// input: n = number of fibonacci numbers to return
function fibonacci(n) {
	var rep = "";

	var num = Number.parseInt(n);
	// verify it is an integer, and is a positive integer
	if (Number.isInteger(num)) {
		if (n < 0) {
			rep = n + " is not a positive integer";
		} else {
			// we have a good integer at this point
			rep = fibIter(num);
		}
	} else {
		rep = n + " is not an integer";
	}


	return rep;
}

// iterative function to calculate fibonacci string
// input: n = number of fibonacci numbers to return
// output: array of string numbers with a 
function fibIter(n) {
	var f = "[";

	var f2 = 0;
	var f1 = 1;
	
	for (var i = 0; i < n; i++)
	{
		if (i != 0)	{
			f += " ";
		}
		f += f2;
		var f0 = f1 + f2;
		f2 = f1;
		f1 = f0;
	}
	
	f += "]";
	return f;
}
