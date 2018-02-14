function addThis() {
  console.log("addThis", this) // this is whatever that gets bound to the function

  childFuncArrow = () => {
    console.log("childFunc", this); // this is inherited from its outermost this
  };

  childFuncArrow();

  function childFuncNormal() {
    console.log("childFunc", this); // this is the window object
  }

  childFuncNormal();
}

let runMe = addThis.bind("hello");

runMe();
