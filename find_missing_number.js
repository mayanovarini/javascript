/*
Given an unsorted array of positive numbers from 1 to n,
such that all numbers from 1 to n are present except one number 'x'.

Objective : Find 'x'.

Solution :
Runtime Complexity
Linear, O(n).

Memory Complexity
Constant, O(1).
*/

arr = [3,7,1,2,8,4,5]; // with n = 8
n = 8;
// missing number = 6

let find_missing = function(input) {
  //  calculate sum of all integers
  //  in input list

  let actual_sum = 0;
  for (let i in input) {
    actual_sum += input[i];
  }
  //  There is exactly 1 number missing
  let n = input.length + 1;
  let sum_of_n = Math.floor((n * (n + 1)) / 2);
  return sum_of_n - actual_sum;
};
