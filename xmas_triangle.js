/*
Christmas is coming. We want to make our own xmas tree.

If we build a Christmas trees with digits, we will got a digit Christmas tree. For example, using chars = "1234" and n = 6, we got:

     1
    2 3
   4 1 2
  3 4 1 2
 3 4 1 2 3
4 1 2 3 4 1
     |
     |
As you can see, there are lot of 3-digits triangles in the tree:

 1    2   2 3   3
2 3  4 1   1   1 2  etc..

You are given a positive integer m. Your task is to count the number of 3-digits triangles, where its digits sum equlas to m.

Inputs:
chars: the specified characters. In this kata, they always be digits.
n: the specified height. A positive integer greater than 2.
m: the target sum value. A positive integer greater than 2.
Output:
The number of triangles that satisfy the above conditions.
Still not understand the task? Look at the following example ;-)

Examples
For chars = "1234" n = 6 and m = 6,the output should be 7

The Christmas Tree looks like:
     1
    2 3
   4 1 2
  3 4 1 2
 3 4 1 2 3
4 1 2 3 4 1
     |
     |

There are 7 triangles' digits sum equal to 6:

     1         1
    2 3       2 3  2 3   3
   4 1 2            1   1 2   1
  3 4 1 2                    4 1 4 1
 3 4 1 2 3                        1  1 2   1
4 1 2 3 4 1                           3   2 3
     |
     |
For chars = "123456789" n = 3 and m = 5,the output should be 0

The Christmas Tree looks like:
  1
 2 3
4 5 6
  |

There is no such a triangle's digits sum equlas to 5.
For chars = "1234" n = 6 and m = 10,the output should be 1

The Christmas Tree looks like:
     1
    2 3
   4 1 2
  3 4 1 2
 3 4 1 2 3
4 1 2 3 4 1
     |
     |

There is only 1 triangle's digits sum equals to 10:

     1
    2 3
   4 1 2
  3 4 1 2      3
 3 4 1 2 3    3 4
4 1 2 3 4 1
     |
     |

*/

function countTriangles(chars, n, m) {
  let array = [[]]
  let r = 0, c = 0, i = 0
  while (r < n) {
    array[r].push(+chars[i])
    c++, i = (i + 1) % chars.length
    if (r < c) { r++, c = 0, array.push([]) }
  }
  let cnt = 0
  for (let r = 0; r < n - 1; ++r) {
    for (let c = 0; c <= r; ++c) {
      if (array[r][c] + array[r+1][c] + array[r+1][c+1] == m) cnt++
      if (c < r && array[r][c] + array[r][c+1] + array[r+1][c+1] == m) cnt++
    }
  }
  return cnt
}
