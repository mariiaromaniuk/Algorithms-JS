// Write a function which accepts a variable number of arguments, and checks whether there 
// are any duplicates among the arguments passed in.

// OPTION 1 --> O(n log n)
function areThereDuplicates(...args){
  args.sort();
  let start = 0;
  let next = 1;

  while (next < args.length){
    if (args[start] === args[next])
       return true;
    start++;
    next++;
  }
  return false;
}

// OPTION 2 --> O(n)
function areThereDuplicates(...args){
  let arr = [...args];
  let map = {};
  for (let i of arr){
      if (!map[i]) map[i] = 1;
      else return true;
  }
  return false;
}

// OPTION 3 --> O(n)
function areThereDuplicates(arguments){
  return new Set(arguments).size !== arguments.length;
}

// Test
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
