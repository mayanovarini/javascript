<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
	<title>Bitcoin Current Prices</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet">
</head>
<body>
	<button>Fetch Does a Request</button>

<script>
	var btn = document.querySelector("button");
	btn.addEventListener("click", function(){
		var url = "https://api.github.com/users/thegirlfromipanema";

		fetch(url) // returns a promise that will be handled by handleErrors function below
		.then(handleErrorS) // returns a promise, that will be passed into request variable below
		.then(function(request){ // request variable contains the promise returned from previous then
			console.log("Everything is fine!");
		})
		.catch(function(error){ // error will be assigned to the Error object returned by handleErrors
			console.log(error); // or do something else to display the error to the user
		});
	});

	function handleErrorS(request){
		if(!request.ok) {
			throw Error(request.status);
		}
		return request;
	}

</script>
</body>

