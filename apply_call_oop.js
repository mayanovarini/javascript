function Car(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
	this.numWheels = 4;
}

function Motorcycle(make, model, year){
	// using call to borrow Car function 
	// this - refers to the object of Motorcycle that is created with New keyword
	Car.call(this, make, model, year) 
	this.numWheels = 2;
}

function Motorcycle(make, model, year){
	// using apply
	// this - refers to Motorcycle object 
	Car.apply(this, [make, model, year]); // apply only takes 2 arguments, 'this' and an array
	this.numWheels = 2;
}

function Motorcycle(make, model, year){
	// arguments is a special keyword
	// arguments is an array-like object storing all of the arguments that will be pased into the function
	car.apply(this, arguments); 
	this.numWheels = 2;
}
