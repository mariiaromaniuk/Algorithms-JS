// Add up - slower
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// performance.now() method returns a DOMHighResTimeStamp in milliseconds.
var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
// Difference between them will be the running time of our function 
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// Add up - faster
function addUpTo(n) {
  return n * (n + 1) / 2;
}

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);


// Different machines will record different times
// The same machine will record different times! 
// For fast algorithms, speed measurements may not be precise enough?
// So it is better to count the number of operations rather than time the code
