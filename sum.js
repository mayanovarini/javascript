let args = [1,2,3,5];

function sumAll(...args) { 
  let sum = 0;

  for(let arg of args) sum += arg;

  return sum;
}