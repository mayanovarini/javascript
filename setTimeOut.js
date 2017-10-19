var timerId = setTImeout(function() {
	console.log("This function runs in 30 seconds");
}, 30000); // this will never run

setTImeout(function() {
	console.log("Canceling the first setTImeout", timerId)
}, 2000);