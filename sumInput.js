function sumInput(){
  let sum = [];
  while (true) {
    let value = prompt("enter");
    
    if(!isFinite(value) || value === "" || value === null) break;
    sum.push(+(value));
  }
  return sum.reduce(function(acc, val){
    return acc + val;
  })
}

sumInput();