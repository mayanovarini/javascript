// Array matching and storing certain item into individual variables

// ES6

let list = [ 1, 2, 3 ];
let [ a, , b ] = list; // the second item is stored is not stored

console.log(b); // b is 3 

[ b, a ] = [ a, b ]; // swapped

console.log(b); // b is 1 

// ES5

var list = [ 1, 2, 3 ];
var a = list[0], b = list[2];
var tmp = a; a = b; b = tmp; // need a temporary storage in order to swap things around


// ES6 - Simple and intuitive default values for destructuring of Objects and Arrays.

let obj = { a: 1 }
let list = [ "hello" ]

let { a, b = 2 } = obj
let [ x, y = "world!" ] = list

console.log(a) // 1 
console.log(b) // 2 

console.log(x, y) // "hello world"

// ES5


var obj = { a: 1 }
var list = [ "hello" ]

var a = obj.a;
var b = obj.b === undefined ? 2 : obj.b;

var x = list[0];
var y = list[1] === undefined ? "world" : list[1];

console.log(a) // 1 
console.log(b) // 2 

console.log(x, y) // "hello world"


