// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.
// Input: Intervals: [[1,4], [2,5], [7,9]]
// Output: [[1,5], [7,9]] -> Since the first two intervals [1,4] and [2,5] overlap, we merged them into one [1,5].

class Interval {
  constructor(start, end){
    this.start = start;
    this.end = end;
  }
  
  print_interval(){
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

function merge(intervals){
  if (intervals. length < 2) 
    return intervals;
  // sort the intervals on the start time 
  intervals.sort((a, b) => a.start - b.start);

  const mergedIntervals = []; 
  let start = intervals[0].start,
      end = intervals[0].end;

  for (let i = 1; i < intervals.length; i++){
    // overlapping intervals, adjust the 'end'
    if (intervals[i].start <= end){
      end = Math.max(intervals[i].end, end);
    // non-overlapping interval, add the previous interval 
    } else { 
      mergedIntervals.push(new Interval(start, end));
      start = intervals[i].start;
      end = intervals[i].end;
    }
  }
  // add the last interval
  mergedIntervals.push(new Interval(start, end));
  return mergedIntervals;
}


// Test
process.stdout.write('Merged intervals: ');
let result = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Merged intervals: ');
result = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Merged intervals: ');
result = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();


// Time: O(n log(n)), where ‘n’ is the total number of intervals. We are iterating the intervals only once 
// which will take O(n), but since we need to sort the intervals, our algorithm will take O(n log(n)).
// Space: O(n) as we need to return a list containing all the merged intervals. We will also need O(n) space for sorting. 
