/* demonstrating callback use, with loadScript() that calls 
another function - which is what's referred to as the callback itself -
after the script is finished loading by the browser */

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

// the callback is a term to refer to the anonymous/arrow function following the first argument
// the function itself takes "script" as its argument
// based on the loadScript implementation, the "script" argument will store the references of the 
// script object that is the local object of loadScript.
// the callback will run two expressions of alert, making use the information that became 
// accessible through the script references

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Cool, the ${script.src} is loaded`);
  alert( _ ); // function declared in the loaded script
});