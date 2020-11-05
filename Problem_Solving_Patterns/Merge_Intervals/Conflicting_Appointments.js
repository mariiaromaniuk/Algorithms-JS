// Given an array of intervals representing ‘n’ appointments, find out if a person can attend all the appointments.
// Input: Appointments: [[1, 4], [2, 5], [7, 9]]
// Output: false -> since [1, 4] and [2, 5] overlap, a person cannot attend both of these appointments.


class Interval {
  constructor(start, end) {
    this.start = start; 
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

function can_attend_all_appointments(intervals) {
  intervals.sort((a, b) => a.start - b.start); 
  for (i = 1; i < intervals.length; i++) {
    if (intervals[i].start < intervals[i - 1].end) { 
      // the comparison above: "<" and not "<="
      // while merging we needed "<=" comparison, as we will be merging the two 
      // intervals having condition "intervals[i][start] === intervals[i - 1][end]" but 
      // such intervals don't represent conflicting appointments as one starts right
      // after the other
      return false;
    }
  }
  return true;
}

// Test
console.log(`Can attend all appointments: ${can_attend_all_appointments([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9),
])}`);

console.log(`Can attend all appointments: ${can_attend_all_appointments([
  new Interval(6, 7),
  new Interval(2, 4),
  new Interval(8, 12),
])}`);

console.log(`Can attend all appointments: ${can_attend_all_appointments([
  new Interval(4, 5),
  new Interval(2, 3),
  new Interval(3, 6),
])}`);


// Time: O(n log(n)), where 'n' is the total number of appointments. 
// Though we are iterating the intervals only once, O(n log(n)) required by sorting.
// Space: O(n), which we need for sorting (Java, Arrays.sort() uses Timsort, which needs O(n) space).
