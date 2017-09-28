/* 

Given a sorted array of integers, return the index of the given key. Return -1 if not found.


Solution #1 

Runtime Complexity
Logarithmic, O(logn).

Memory Complexity
Logarithmic, O(logn). 
*/

let binary_search_rec = function(a, key, low, high) {
  if (low > high) {
    return -1;
  }
  
  let mid = low + Math.floor((high - low) / 2);
  if (a[mid] === key) {
    return mid;
  } else if (key < a[mid]) {
    return binary_search_rec(a, key, low, (mid - 1));
  } else {
    return binary_search_rec(a, key, (mid + 1), high);
  }
};

let binary_search = function(a, key) {
  return binary_search_rec(a, key, 0, (a.length - 1));
};

/* 
Solution #2

Runtime Complexity
Logarithmic, O(logn).

Memory Complexity
Constant, O(1).
*/

let binary_search_iterative = function(a, key) {
  
  let low = 0;
  let high = a.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (a[mid] === key) {
      return mid;
    }

    if (key < a[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  
  return -1;
};