// Any number will be called a happy number if, after repeatedly replacing it with a number equal 
// to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers 
// will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.
// Input: 23   
// Output: true (23 is a happy number) -> here are the steps to find out that 23 is a happy number:
// 2^2 + 3 ^2 = 4 + 9 = 13
// 1^2 + 3^2 = 1 + 9 = 10
// 1^2 + 0^2 = 1 + 0 = 1

function find_happy_number(num) {
    let slow = num,
        fast = num;
    while (true) {
        slow = find_square_sum(slow); // move one step
        fast = find_square_sum(find_square_sum(fast)); // move two steps
        if (slow === fast) { // found the cycle
            break;
        }
    }
    return slow === 1; // see if the cycle is stuck on the number '1'
}

function find_square_sum(num) {
    let sum = 0;
    while ((num > 0)) {
        digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

// Test
console.log(find_happy_number(23));
console.log(find_happy_number(12));


// Time: all unhappy numbers eventually get stuck in the cycle: 4 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4
// If the number n <= 1000, then we reach the cycle or ‘1’ in at most 1001 steps.
// For n > 1000, suppose the number has ‘m’ digits and the next number is ‘n1’. 
// the sum of the squares of the digits of ‘n’ is at most 9^2m, or 81m (this will happen when all digits of ‘n’ are ‘9’).
// n1 < 81m
// As we know m = log(n+1), therefore: n1 < 81 * log(n+1) => n1 = Time: O(log(n))
// Space: O(1).
