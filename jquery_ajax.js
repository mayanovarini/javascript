$.ajax({
	method: "GET",
	url: "some.api.com",
})
.done(function(result){
	console.log("it is done"); // or do something with the dom
})
.fail(function(){
	//do something
})