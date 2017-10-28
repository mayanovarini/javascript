/* 
Given an integer array, move all elements containing '0' to the left while maintaining the order of other elements in the array.

Hints
Counting

Reader/Writer

Solution
Runtime Complexity
Linear, O(n).

Memory Complexity
Constant, O(1).

*/

let move_zeros_to_left = function(A) {
  if (A.length < 1) {
    return;
  }

  let lengthA = A.length;
  let write_index = lengthA - 1;
  let read_index = lengthA - 1;

  while (read_index >= 0) {
    if (A[read_index] != 0) {
      A[write_index] = A[read_index];
      write_index--;
    }
    
    read_index--;
  }
  
  while (write_index >= 0) {
    A[write_index] = 0;
    write_index--;
  }
};