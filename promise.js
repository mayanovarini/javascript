// promise example

// loadScript will not require a callback. 
// Instead it will create and return a promise object 
// that settles when the loading is complete. 

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error("Script load error: " + src));

    document.head.append(script);
  });
}

// usage
// The outer code can add handlers to it using .then

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js");

promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);

promise.then(script => alert('One more handler to do something else!'));

// the promise above is equivalent to the following callback :

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error ` + src));

  document.head.append(script);
}

// usage 

loadScript('/my/script.js', function(error, script) {
  if (error) {
    // handle error
  } else {
    // script loaded successfully
  }
});


/* 

Why promises are better than callbacks?

Callbacks
We must have a ready callback function when calling loadScript. 
In other words, we must know what to do with the result before loadScript is called.
There can be only one callback. So, wait what, who cares? lol

Promises
Promises allow us to code things in the natural order. First we run loadScript, and .then write what to do with the result.
We can call .then on a promise as many times as we want, at any time later.

*/
