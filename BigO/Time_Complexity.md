Big O allows us to talk formally about how the runtime of an algorithm grows as the inputs grows.  
- __Constant algorithm – O(n):__ Runtime is always constant.
- __Logarithmic algorithm – O(logn):__ Runtime grows logarithmically in proportion to n. The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to 1.
- __Linear algorithm – O(n):__ Runtime grows directly in proportion to n.
- __Superlinear algorithm – O(nlogn):__ Runtime grows in proportion to n.
- __Polynomial algorithm – O(n^c):__ Runtime grows quicker than previous all based on n (quadratic).
- __Exponential algorithm – O(c^n):__ Runtime grows even faster than polynomial algorithm based on n.
- __Factorial algorithm – O(n!):__ Runtime grows the fastest and becomes quickly unusable for even small values of n.

``` javascript
// Time: O(n)
function logAtLeast10(n){ 
   for (var i = 1; i <= Math.max(n, 10); i++) 
      console.log(i);
}

// Time: O(1)
function logAtMost10(n){ 
   for (var i = 1; i <= Math.min(n, 10); i++) 
      console.log(i);
}
```
__Big O Shorthands__:
1. Arithmetic operations are constant.  
- O(n + 10) => O(n)
- O(1000n + 50) => O(n)
- O(n^2 + 5n + 8) => O(n^2)
2. Variable assignment is constant.
3. Accessing elements in an array (by index) or object (by key) is constant.
4. In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop.  

__Objects:__  
- __Common Algoriths:__ __*Insert:*__ O(1), __*Remove:*__ O(1), __*Access:*__ O(1), __*Search:*__ O(n).  
- __Built in Methods:__ Object.keys: O(n), Object.values: O(n), Object.entries: O(n), hasOwnProperty: O(1).  

__Arrays:__  
- __Common Algoriths:__ __*Insert:*__ push():O(1), unshift():O(n), __*Remove:*__ pop():O(1), shift():O(n), __*Access:*__ O(1), __*Search:*__ O(n).  
- __Built in Methods:__ concat(): O(n), slice(): O(n), splice(): O(n), sort(): O(n log n), forEach/map/filter/reduce/etc.: O(n).
