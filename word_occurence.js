// Which word that shows up the most in the array? 

let story = "the girl plays with the girl that plays with the dog that plays with the girl, and oh my dog that is awesome"

let arr = story.split(/[ ,]+/).filter(Boolean); // separate the words based on space and comma delimiter, and also filter out the falsey-valued word such as "" and empty string

let counts = {}; // we declare and define an object named counts

// we then run a loop on the new array - that contains every single word in the story string - using forEach

arr.forEach((value, index) => {
  let word = arr[index];
  counts[word] = counts[word] ? counts[word] + 1 : 1;
})

let arrTwo = Object.values(counts); // just take and store the values of the counts into a new array

let max = Math.max(...arrTwo); // converts the arrTwo into comma-separated parameters that are needed by max()

let maxKey; // we declare it here but assign a value later

for(key in counts) {
  if(counts[key] == max) {
    maxKey = key; // assign the value 
    break
  }
}

console.log("the word that shows up the most is " + "\"" + maxKey + "\"")