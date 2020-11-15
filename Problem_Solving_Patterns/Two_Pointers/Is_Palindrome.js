// Write a function to check if given integer is a palindrome without using integer.toString().
// Time Complexity: O(n), Space Complexity: O(1).

// OPTION 1 - Using array
function isPalindrome(num){
  let arr = [];

  while(num){
    arr.push(num % 10);
    num = Math.floor(num/10);
  }

  for (let i = 0; i < Math.floor(arr.length/2); i++){
    if (arr[i] !== arr[arr.length-1-i]) return false;
  }
  return true;
}

// OPTION 2 - Not using any other data structure
function isPalindrome(num){
  let divisor = 1; 
  let first, last;

  while (num / divisor >= 10) 
     divisor *= 10; 

  while (num){
    first = Math.floor(num/divisor);
    last = num % 10;
    num = Math.floor((num % divisor)/10);
    divisor = divisor/100;

    if (first !== last) return false;
  }
  return true;
}
