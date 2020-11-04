// Write a function which accepts a variable number of arguments, and checks whether there 
// are any duplicates among the arguments passed in.

function areThereDuplicates(){
  const collection = {};

  for (let values in arguments)
    collection[arguments[values]] = (collection[arguments[values]] || 0) + 1;

  for (let key in collection){
    if (collection[key] > 1)
      return true;
  }
    return false;
}

// Test
console.log(areThereDuplicates(1, 2, 3)) // false;
console.log(areThereDuplicates(1, 2, 2)) // true;
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true;
