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
// apply will need the parameters to be just two, the object and an array of 
// the required parameters
// call will take them as comma separated values

// use apply when the function DOES NOT take an array as an argument, 
// apply will then spread the array for you - see example below :

function sumValues(a,b,c) {
	return a+b+c;
}

var values = [1,3,5]; 

sumValues(values); // "1,3,5undefinedundefined"

sumValues.apply(this, values); // 9 

