// sum up salaries array's values with Object.values() and reduce

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

let value = Object.values(salaries);

function sumSalaries(obj){
  return value.reduce((acc,val) => acc + val);
}

alert( sumSalaries(salaries) ); // 650

