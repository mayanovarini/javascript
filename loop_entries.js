// looping using entries()

let user = {
  name: "John",
  age: 30
};

// loop over keys-and-values
for(let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}

// using map:

let user = new Map();
user.set("name", "John");
user.set("age", "30");

for(let [key, value] of user.entries()) {
  alert(`${key}:${value}`); // name:John, then age:30
}