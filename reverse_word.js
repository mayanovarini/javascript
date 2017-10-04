/*
Solution
Runtime Complexity
Linear, O(n).

Position of all the elements in the sentence is changed.

Memory Comlexity
Constant, O(1). 
*/

let replaceAt = function(string, index, character){
  return string.substr(0, index) + character + string.substr(index+character.length);
};

let str_rev = function(str, start, end) {
  if (!str || str.length < 2) {
    return;
  }
  while (start < end) {
    let temp = str[start];
    str = replaceAt(str, start, str[end]);
    str = replaceAt(str, end, temp);

    start++;
    end--;
  }
  return str;
};

let reverse_words = function(sentence) {

  //  Here sentence is a null-terminated string ending with char '\0'.
  if (!sentence || sentence.length === 0) {
    return;
  }

  //   To reverse all words in the string, we will first reverse
  //   the string. Now all the words are in the desired location, but
  //   in reverse order: "Hello World" -> "dlroW olleH".

  let str_len = sentence.length;
  sentence = str_rev(sentence, 0, str_len - 1);

  //  Now, let's iterate the sentence and reverse each word in place.
  //  "dlroW olleH" -> "World Hello"

  let start = 0;
  let end = 0;
  while (true) {
    //  find the  start index of a word while skipping spaces.
    while (sentence[start] === ' ') {
      start++;
    }
    if (start >= sentence.length) {
      break;
    }

    //  find the end index of the word.
    end = start + 1;
    while (end < sentence.length && sentence[end] != ' ') {
      end++;
    }

    //  let's reverse the word in-place.
    sentence = str_rev(sentence, start, end - 1);

    start = end;
  }
  return sentence;
};