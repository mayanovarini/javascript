/*
There are times when a function may have many parameters, 
most of which are optional. That’s especially true for user interfaces. 
Imagine a function that creates a menu. 
It may have a width, a height, a title, items list and so on.
*/


// the bad way to do this :

function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
  // ...
}

// the better way : 

// we pass the following object to showMenu()

let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// ...and it immediately expands it to variables

function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – taken from options,
  // width, height – defaults used
  alert( title + ' ' + width + ' ' + height ); // My Menu 100 200
  alert( items ); // Item1, Item2
}

showMenu(options);