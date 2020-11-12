// Dijkstra's Algorithm uses:
// • GPS - finding fastest route
// • Network Routing - finds open shortest path for data
// • Biology - used to model the spread of viruses among humans
// • Airline tickets - finding cheapest route to your destination
// • Biology - used to model the spread of viruses among humans

// We use Priority Queue to determine which node to visit next 
// the goal is to get the smallest value from the top of the queue
class PriorityQueue {
  constructor(){
    this.values = [];
  }

  enqueue(val, priority){
    this.values.push({ val, priority });
    // sort by priority so when we dequeue 
    // it will be the smallest val (shortest path)
    this.values.sort((a, b) => a.priority - b.priority);
  }

  dequeue(){
    return this.values.shift();
  }
}


class WeightedGraph {
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(vertex){
    if (!this.adjacencyList[vertex])
      this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight){
    if (this.adjacencyList[v1]) 
      this.adjacencyList[v1].push({ node: v2, weight });
    if (this.adjacencyList[v2]) 
      this.adjacencyList[v2].push({ node: v1, weight });
  }

  /* This function should accept a starting and ending vertex 
  1. Create an object 'distances' and set each key to be every vertex in the adjacency list with a value of Infinity, 
     except for the starting vertex which should have a value of 0.
  2. Add each vertex to the priority queue with a priority of Infinity, except the starting vertex, which should have 
     a priority of 0 because that's where we begin.
  3. Create object called 'previous' and set each key to be every vertex in the adjacency list with a value of null 
  4. Loop as long as there is anything in the priority queue:
     - dequeue a vertex from the priority queue 
     - if that vertex is the same as the ending vertex - we are done!
     - otherwise loop through each value in the adjacency list at that vertex:
       • calculate the distance to that vertex from the starting vertex 
       • if the distance is less than what is currently stored in our distances object
       • update the distances object with new lower distance
       • update the previous object to contain that vertex
       • enqueue the vertex with the total distance from the start node */

  Dijkstra(start, finish){
    // stores priorities (distance from starting point) for each node
    // smallest value (shortest path) on top of the queue
    const nodes = new PriorityQueue();
    // to store current shortest distance from starting point to each node
    // we will calculate distances using paths from 'previous' and their path values(priorities) from 'nodes'
    const distances = {};
    // to keep track of how did we get to each node
    // previous shortest path {'A':null,'B':'A','C':'A', ...}
    const previous = {};
    // the next node we need to go with smallest path value (priority)
    // we will take next node from priority queue
    let smallest;
    // shortest path to return at the end
    let path = []; 
    // build up initial state
    for (let vertex in this.adjacencyList){
      if (vertex === start){
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit (in the queue)
    while (nodes.values.length){
      smallest = nodes.dequeue().val;
      if (smallest === finish){
        // we are done
        // build up path to return at the end
        while (previous[smallest]){
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      // if (smallest != finish) check each of its neighbors and
      // calculate the distance to that vertex from the starting vertex 
      if (smallest || distances[smallest] !== Infinity){
        for (let neighbor in this.adjacencyList[smallest]){
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]){
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous -- how we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }

}
