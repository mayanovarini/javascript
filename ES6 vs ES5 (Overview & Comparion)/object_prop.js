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

// Method properties

// ES6 - Support for method notation in object property definitions, for both regular functions and generator functions.


obj = {
    foo (a, b) {
        …
    },
    bar (x, y) {
        …
    },
    *doThat (x, y) { // method notation with asterisk
        …
    }
}

// ES5

obj = {
    foo: function (a, b) {
        …
    },
    bar: function (x, y) {
        …
    },
    //  sayThat: no equivalent in ES5
    …
};