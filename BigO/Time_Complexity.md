BigO allows us to talk formally about how the runtime of an algorithm grows as the inputs grows.  
- __Logarithmic algorithm – O(logn):__ Runtime grows logarithmically in proportion to n.
- __Linear algorithm – O(n):__ Runtime grows directly in proportion to n.
- __Superlinear algorithm – O(nlogn):__ Runtime grows in proportion to n.
- __Polynomial algorithm – O(n^c):__ Runtime grows quicker than previous all based on n.
- __Exponential algorithm – O(c^n):__ Runtime grows even faster than polynomial algorithm based on n.
- __Factorial algorithm – O(n!):__ Runtime grows the fastest and becomes quickly unusable for even small values of n.

We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases
- f(n) could be linear: f(n) = n
- f(n) could be quadratic: f(n) = n2
- f(n) could be constant: f(n) = 1
- f(n) could be something entirely different!
