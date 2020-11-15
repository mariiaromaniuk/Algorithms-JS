// Write a function which accepts a base and an exponent, and returns the power of the base to the exponent. 
function power(base, exponent){
  if (exponent === 0) return 1;
  return base * power(base,exponent-1);
}

// Factorial
function factorial(x){
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x-1);
}

// Write a function called productofArray which takes in an array of numbers and returns the product of them all.
function productOfArray(arr){
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// Write a function which accepts a number and adds up all the numbers from 0 to the number passed to the function
function recursiveRange(x){
  if (x === 0) return 0;
  return x + recursiveRange(x-1);
}

// Fibonacci
function fib(n){
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}
