// Syntax discounts

// ES6

obj = { x, y }

// ES5

obj = { x: x, y: y };

// Computed property names

// ES6 can do it inside the object literal declaration

let obj = {
    studentId: 42,
    [ "First Name" + lastName() ]: "Exists"
}

// ES5 has to be outside the object declaration

var obj = {
    studentId: 42,
};
obj[ "First Name" + lastName() ]: "Exists"; 