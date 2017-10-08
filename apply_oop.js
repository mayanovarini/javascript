function Person(firstName, lastName, favoriteColor, favoriteNumber){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.multiplyFavoriteNumber = function(num){
		return num * this.favoriteNumber;
	}
}

function Parent(firstName, lastName, favoriteColor, favoriteNumber){
	Person.apply(this, arguments);
}

function Child(firstName, lastName, favoriteColor, favoriteNumber){
	Parent.apply(this, arguments);
}