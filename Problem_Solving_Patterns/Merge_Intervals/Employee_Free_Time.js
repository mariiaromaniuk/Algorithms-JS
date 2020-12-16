/*
 Employee Free Time (hard)
 For K employees, we're given a list of intervals representing the working hours of each employee.
 Find out if there is a free interval that is common to all employees. You can assume that each list 
 of employee working hours is sorted on the start time.
 
 Example 1: [[[1,3], [5,6]], [[2,3], [6,8]]];
 Output: [3,5] --> Both employees are free between [3,5].
 
 Example 2: [[[1,3], [9,12]], [[2,4], [6,8]]];
 Output: [4,6], [8,9]
 
 Example 3: [[[1,3], [2,4]], [[3,5], [7,9]]];
 Output: [5,7]
*/

const Heap = require('./collections/heap'); // http://www.collectionsjs.com

class Interval {
  constructor(start, end){
    this.start = start;
    this.end = end;
  }
  
  print_interval(){
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

class EmployeeInterval {
  constructor(interval, employeeIndex, intervalIndex){
    // interval representing employee's working hours
    this.interval = interval;
    // index of the list containing working hours of this employee
    this.employeeIndex = employeeIndex;
    // index of the interval in the employee list
    this.intervalIndex = intervalIndex;
  }
}

function employeeFreeTime(schedule){
  let result = [];
  if (!schedule || !schedule.length) 
    return result;
  
  minHeap = new Heap([], null, ((a,b) => a.interval.start < b.interval.start));
  // insert the first interval of each employee to the queue
  for (let i =0; i < schedule.length; i++) {
    minHeap.push(new EmployeeInterval(schedule[i][0], i, 0));
  }
  let previousInterval = minHeap.peek().interval;
  while (minHeap.length > 0){
    const queueTop = minHeap.pop();
    // if previousInterval is not oerlapping with the next interval, insert a free interval
    if (previousInterval.end < queueTop.interval.start){
      result.push( new Interval(previousInterval.end, queueTop.interval.start));
      previousInterval = queueTop.interval;
    // overlapping intervals, update the previousInterval if needed
    } else {
      if (previousInterval.end < queueTop.interval.end){
        previousInterval = queueTop.interval;
      }
    }
    // if there are more intervals available for the same employee, add their next interval
    const employeeSchedule = schedule[queueTop.employeeIndex];
    if (employeeSchedule.length > queueTop.intervalIndex + 1){
      minHeap.push(new EmployeeInterval(
        employeeSchedule[queueTop.intervalIndex + 1], queueTop.employeeIndex,
        queueTop.intervalIndex + 1,
      ));
    }
  }
  return result;
}


// Test
let input = [
  [new Interval(1,3), new Interval(5,6)],
  [new Interval(1,3), new Interval(5,6)],
];
process.stdout.write('Free intervals: ', end = '');
let result = employeeFreeTime(input);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

let input = [
  [new Interval(1,3), new Interval(9,12)],
  [new Interval(2,4)], 
  [new Interval(6,8)],
];
process.stdout.write('Free intervals: ', end = '');
let result = employeeFreeTime(input);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

let input = [
  [new Interval(1,3)],
  [new Interval(2,4)], 
  [new Interval(3,5), new Interval(7,9)],
];
process.stdout.write('Free intervals: ', end = '');
let result = employeeFreeTime(input);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

// Time: O(n log(n)), where ‘n’ is the total number of intervals. We are iterating the intervals only once 
// which will take O(n), but since we need to sort the intervals, our algorithm will take O(n log(n)).
// Space: O(n) as we need to return a list containing all the merged intervals. We will also need O(n) space for sorting. 
