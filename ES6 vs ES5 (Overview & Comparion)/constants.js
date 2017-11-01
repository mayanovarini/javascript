/* const variables can not be reassigned and redeclared 
BUT! const object and array are mutable! */

// ES6

const dog = "Noodles" // value is set, and won't be able to be reassigned/redeclared
dog = "Pillow" // ERROR reassignment
const dog = "Pillow" // ERROR redeclaration


//  only in ES5 through the help of object properties
//  and only in global context and not in a block scope

Object.defineProperty(typeof global === "object" ? global : window, "dog", { // it has to be global
    value:        "Noodles",
    enumerable:   true,
    writable:     false, // back in ES5, we need to set the value of writable property to be "false" - to make the object mutable
    configurable: false
});