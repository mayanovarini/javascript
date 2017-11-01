// Default Parameters

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

// Rest Parameters

// ES6 
function a (x, y, ...b) {
	return (x + y) + b.length
}

a(4, 2, "hello", "world"); // 8

// ES5
function a (x, y) {
	var b = Array.prototype.slice.call(arguments, 2);
};

a(4, 2, "hello", "world") // 8