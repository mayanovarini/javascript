function Person(type){
  this.type = type;
}

Person.prototype.sayHi = function(){
  return "I am a " + this.type;
}

let maya = new Person("student");
console.log(maya.sayHi()); // I am a student

function Employee(type, name){
  this.name = name;
  return Person.apply(this, arguments );
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.constructor = Employee;

Employee.prototype.greet = function(){
  return "hey, I am " + this.name + " what's your name?";
}

let noodles = new Employee("dog","noodles");

noodles.sayHi = function(){
  return "I am a " + this.type + " and my name is " + this.name;
}

console.log(noodles.sayHi()); // I am a dog and my name is noodles
console.log(noodles.greet()); // hey, I am noodles what's your name?
