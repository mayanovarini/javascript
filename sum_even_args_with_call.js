function sumEvenArgs(){
	var newArgs = [].slice.call(newArgs); // turn array-like object into an array
	return newArgs.reduce(function(acc, next){
		if(next % 2 === 0 ) {
			return acc+next;
		}
		return acc;
	}, 0) // start reduce with 0
}