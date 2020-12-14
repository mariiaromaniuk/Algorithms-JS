/*
 Maximum CPU Load (hard)
 Given a list of Jobs - each job has a Start time, an End time, and a CPU load when it is running. 
 Find the maximum CPU load at any time if all the jobs are running on the same machine.

 Example 1: [[1,4,3], [2,5,4], [7,9,6]] --> 7, Since [1,4,3] and [2,5,4] overlap, their maximum CPU 
 load (3 + 4 = 7) will be when both jobs are running at the same time - during the interval [2,4].

 Example 2: [[6,7,10], [2,4,11], [8,12,15]] --> 15, None of the jobs overlap, therefore we will take 
 the maximum load of any job which is 15.

 Example 3: [[1,4,2], [2,4,1], [3,6,5]] --> 8, All jobs overlap during the time interval [3,4].

 Algorithm:
 The problem follows the Merge Intervals pattern and can easily be converted to Minimum Meeting Rooms.
 Similar to Minimum Meeting Rooms' where we were trying to find the maximum number of meetings happening 
 at any time, for 'Maximum CPU Load' we need to find the maximum number of jobs running at any time. We'll 
 need to keep a running count of the maximum CPU load at any time to find the overall maximum load.
 
 Time: O(n * log n), where 'n' is the total number of jobs. This is due to the sorting. Also, while iterating 
 the jobs, we might need to poll/offer jobs to the priority queue. Each of these operations can take O(logn).
 Space: O(n), which is required for sorting. Also, in the worst case, we have to insert all the jobs into the 
 priority queue (when all jobs overlap) which will also take O(n).
*/

const Heap = require('./collections/heap'); // http://www.collectionsjs.com

class Job {
  constructor(start, end, cpuLoad){
    this.start = start;
    this.end = end;
    this.cpuLoad = cpuLoad;
  }
}

function maxCpuLoad(jobs){
  // sort the jobs by the start time 
  jobs.sort((a, b) => a.start - b.start);

  let maxCPULoad = 0,
      currentCPULoad = 0;
  const minHeap = new Heap([], null, ((a,b) => b.end - a.end));

  for (let i = 0; i < jobs.length; i++){
    // remove all the jobs that have ended
    while (minHeap.length > 0 && jobs[i].start >= minHeap.peek().end){
      currentCPULoad -= minHeap.pop().cpuLoad;
    }
    // add the current job into minHeap
    minHeap.push(jobs[i]);
    currentCPULoad += jobs[i].cpuLoad;
    maxCPULoad = Math.max(maxCPULoad, currentCPULoad);
  }
  return maxCPULoad;
}
