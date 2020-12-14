/*
 Minimum Meeting Rooms (hard)
 Given a list of intervals representing the start and end time of 'N' meetings, 
 find the minimum number of rooms required to hold all the meetings.

 Example 1: [[1,4], [2,5], [7,91] --> 2, Since [1,4] and [2,5] overlap, we need two 
 rooms to hold these two meetings. [7, 9] can occur in any of the two rooms later.

 Example 2: [[16,7], [2,4], [8,12]] --> 1, None of the meetings overlap, therefore 
 we only need one room to hold all meetings.

 Example 3: [[1,4], [2,3], [3,6]] --> 2, Since [1,4] overlaps with the other two 
 meetings [2,3] and [3,6], we need two rooms to hold all the meetings.


 Algorithm:
 1. Sort all the meetings on their start time.
 2. Create a min-heap to store all the active meetings. This min-heap will also be 
    used to find the active meeting with the smallest end time.
 3. Iterate through all the meetings one by one to add them in the min-heap. 
    Let's say we are trying to schedule the meeting mi.
 4. Since the min-heap contains all the active meetings, so before scheduling mi we can 
    remove all meetings from the heap that have ended before m1, i.e., remove all meetings 
    from the heap that have an end time smaller than or equal to the start time of mi.
 5. Now add ml to the heap.
 6. The heap will always have all the overlapping meetings, so we will need rooms for all 
    of them. Keep a counter to remember the maximum size of the heap at any time which will 
    be the minimum number of rooms needed.

 Similar Problems:
 1. Given a list of intervals, find the point where the maximum number of intervals overlap.
 2. Given a list of intervals representing the arrival and departure times of trains to a train station, 
    find the minimum number of platforms required for the train station so that no train has to wait.
*/

const Heap = require('./collections/heap'); // http://www.collectionsjs.com

class Meeting {
  constructor(start, end){
    this.start = start;
    this.end = end;
  }
}

// Time: O(n logn), where 'n' is the total number of meetings, Space: O(n).
function minMeetingsRooms(meetings){
  // sort the meetings by start time
  meetings.sort((a,b) => a.start - b.start);

  let minRooms = 0,
      minHeap = new Heap([], null, ((a,b) => b.end - a.end));
  for (let i = 0; i < meetings.length; i++){
    // remove all the meetings that have ended
    while (minHeap.length > 0 && meetings[i].start >= minHeap.peek().end){
      minHeap.pop();
    }
    // add the current meeting into minHeap
    minHeap.push(meetings[i]);
    // all active meetings are in the minHeap, so we need rooms for all of them
    minRooms = Math.max(minRooms, minHeap.length);
  }
  return minRooms;
}

// Test
console.log(minMeetingsRooms([new Meeting(4,5), new Meeting(2,3), new Meeting(2,4), new Meeting(3,5)]));
console.log(minMeetingsRooms([new Meeting(1,4), new Meeting(2,5), new Meeting(7,9)]));
console.log(minMeetingsRooms([new Meeting(6,7), new Meeting(2,4), new Meeting(8,12)]));
console.log(minMeetingsRooms([new Meeting(1,4), new Meeting(2,3), new Meeting(3,6)]));
