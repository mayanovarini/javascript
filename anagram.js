/* anagram */

function aclean(arr) {
  let map = new Map();

  for(let word of arr) {
    // split the word by letters, sort them and join back
    let sorted = word.toLowerCase().split('').sort().join('');

    /* 
    If we ever meet a word the same letter-sorted form again, 
    then it would overwrite the previous value with the same key in the map. 
    So we’ll always have at maximum one word per letter-form.*/

    map.set(sorted, word); #
  }

  // takes an iterable over map values (we don’t need keys in the result) and returns an array of them.
  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );