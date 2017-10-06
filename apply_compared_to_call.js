function sumThem(a,b,c,d) {
	return "the sum is " + a+b+c+d;
}

let calcOne = {
	brand: "samsung",
}

let calcTwo = {
	brand = "sony",
}

sumThem.call(calcOne, 1,2,3,4);

sumThem.apply(calcTwo, [1,2,3,4]);

// the difference is apparent when a function that call/apply gets called on using parameters
// apply will need the parameters to be just two, the object and an array of the required parameters
// call will take them as is