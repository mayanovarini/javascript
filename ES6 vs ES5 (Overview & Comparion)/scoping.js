// Block-scoped variables

// ES6 - Not hoisted 

// both scopes can use the same named variables - 
// but they have their own context

for (let i = 0; i < a.length; i++) {
    let x = a[i] // not the same x defined below
    …
}
for (let i = 0; i < b.length; i++) {
    let x = b[i] // not the same x defined above
    …
}

// ES5 - Hoisted
// variables are declared upfront - at the beginning of execution

var i, x, y;
for (i = 0; i < a.length; i++) {
    x = a[i];
    …
}
for (i = 0; i < b.length; i++) {
    y = b[i];
    …
}

// Block-scoped functions

// ES6

{
    function foo () { return 100 }
    foo() === 100 // scope A returns 100
    {
        function foo () { return 200 } // altering the return value of foo()
        foo() === 200 // just in this scope, it becomes 200 
    }
    foo() === 100 // scope A - value returned by the function is still the same : 100
}

// ES5 

//  only in ES5 with the help of block-scope emulating
//  function scopes and function expressions

(function () {
    var foo = function () { return 100; }
    foo() === 100;

    (function () {
        var foo = function () { return 200; }
        foo() === 200;
        
    })();
    foo() === 100;
})();
