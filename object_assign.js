/* using Object.assign to define default values and
shallow-clone or merge objects into one object

the last variable takes higher presedence
*/

function spinner(target, options = {}) {
  let defaults = {
    message: "Please wait",
    spinningSpeed: 5,
    cssClass: ".is-spinning"
  };

  let settings = Object.assign({} , defaults , options);

  console.log(`Message: ${settings.message}`);
  console.log(`spinningSpeed: ${settings.spinningSpeed}`);
  console.log(`cssClass: ${settings.cssClass}`);
}

// running this :

spinner(targetElement, {
  cssClass: ".is-fast-spinning",
  spinningSpeed: 8
});

/*will output :


Message: Please wait  --> from defaults, because not specified when the function called
spinningSpeed: 8 --> from options
cssClass: .is-fast-spinning ---> from options
*/
