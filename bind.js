// bind is similar to call, but make a function to be able to be invoked later 

function hello(a,b,c,d) {
	return this.name + "says hello to " + a,b,c,d;
}

var me = {
	name: "Maya";
}

var greetThem = hello.bind(me, "lucas", "jill"); // return the function definition of hello

greetThem("matt", "gigi"); // amount of arguments are correctly corresponding to the function definition
// Maya says hello to lucas, jill, matt, gigi


var you = {
	name: "Noodles";
	greet: function(){
		setTimeout(function(){
			console.log("Hi, this is $(this.name");
		}.bind(this), 2000); // without bind, invoking the function later, 
		// will make 'this' a global variable / undefined
	}
}