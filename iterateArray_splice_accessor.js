let iterateArr = [1,3,5];

let arr = ["mango", "remove apple", "orange", "remove blueberry", "strawberry", "remove banana"]

newArr = [];

iterateArr.forEach(function(i) {
  //newArr.push(arr[i]); // [ 'remove apple', 'remove blueberry', 'remove banana' ]
  newArr.push(...arr.splice(i, 1, "new fruit")); // [ 'remove apple', 'remove blueberry', 'remove banana' ]

})

console.log(newArr);

console.log(arr); // because splice mutates, although the replacement word mantains the index integrity, but the content has changed
