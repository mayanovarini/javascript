// Before ES6, prototype syntax:

var Dog = function(name, breed) {
  this.name = name;
  this.breed = breed;
}
Dog.prototype.greet = function() {
  return "Hello, my name is " + this.name + " and I'm a " + this.breed;
}

// With ES6 class syntax:

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  greet() {
    return "Hello, my name is " + this.name + " and I'm a " + this.breed;
  }
}

const myPet = new Dog("Noodles", "corgi");
console.log(myPet.breed) // corgi
console.log(myPet.greet()) // "Hello, my name is Noodles and I'm a corgi