// ES6 allows easy setup for default valued parameters

function a (x, y = "bar") {
	return x + ' ' + y
}

a("foo") // "foo bar"


// ES5 is not as simple

function a (x, y) {
	if (y === undefined)
		y = "bar";
	return x + " " + y;
};

a("foo") // "foo bar"
