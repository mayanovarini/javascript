// using Call method to redefine the context of 'this' 

// using Call to avoid repetition/method duplication 

let firstDog = {
	name: "Noodles",
	woof: function(){
		return "woooooof I am " + this.name
	}
}

let secondDog = {
	name: "Puma"
}

console.log(firstDog.woof());

console.log(firstDog.woof.call(secondDog));
