pets = ["Noodles", "Pillow", "Gigi" ];

// ES6 has a short/concise arrow function 
// note! Arrow function does not have 'this'
// in 'use strict'; mode, 'this' of arrow function == 'undefined'
// in non strict mode (old js), 'this' of arrow function == 'window' object

dogs = pets.filter(i => i.length > 4);

// ES5 - longer and more convoluted 

dogs = pets.filter(function (i) { return i.length > 4 })