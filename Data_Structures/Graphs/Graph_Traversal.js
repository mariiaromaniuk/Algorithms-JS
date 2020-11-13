// Graph Traversal Uses:
// • Peer to peer networking
// • Web crawlers
// • Finding "closest" matches/recommendations
// • Shortest path problems.
// • GPS Navigation
// • Solving mazes
// • AI (shortest path to win the game)

class Graph {
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(vertex){
    if (!this.adjacencyList[vertex]) 
      this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2){
    if (this.adjacencyList[v1]) 
      this.adjacencyList[v1].push[v2];
    if (this.adjacencyList[v2]) 
      this.adjacencyList[v2].push[v1];
  }

  removeEdge(v1, v2){
    if (this.adjacencyList[v1].includes(v2) && this.adjacencyList[v2].includes(v1)){
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((val) => val !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((val) => val !== v1);
    }
  }

  removeVertex(vertex){
    while (this.adjacencyList[vertex].length){
      const adjacentVertex = this.adjacencyList.pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // It goes to the 'first neigbor track'
  // Function that accepts a starting node
  // Create a list to store end result, to be returned at the very end
  // Create an object to store visited vertices (or we can use an array)
  // Create a heper function that accepts a vertex:
  // • it returns early if the vertex is empty
  // • it places the vertex it accepts into the visited object and push that vertex into the result array
  // • it loops over all of the values in the adjacency list for that vertex
  // If any of those values have not been visited, recursively invoke the helper function with that vertex
  // Invoke this helper function with the starting vertex

  DFSrecursive(start){
    let result = [];
    let visited = {};
    // we need to reassign it here because inside of depth 
    // function the context of 'this' will be changed
    let adjacencyList = this.adjacencyList;
    function depth(vertex){
      if (!vertex) 
        return null;
      visited[vertex] = true;
      result.push(vertex);
      for (let i = 0; i < adjacencyList[vertex].length; i++){
        if (!visited[adjacencyList[vertex][i]]) 
          return depth(adjacencyList[vertex][i]);
      }
    }
    depth(start);
    return result;
  }

  // For Iterative DFS instead of call stack we simply use stack data structure
  // It goes to the 'last neigbor track'
  // Accept a starting node
  // Create a stack to keep track of vertices (use a list/array)
  // Create a list to store the end result, to be returned at the very end
  // Create an object to store visited vertices (or we can use an array)
  // Add the starting vertex to the stack and mark it visited
  // While the stack has something in it:
  // Pop the next vertex from the stack and if it hasn't been visited yet:
  // • mark it as visited, add it to the result list
  // • Push all of its neighbors into the stack

  DFSiterative(start){
    // we need to put 'start' in it right away
    // so we can use (stack.length) in the while loop
    let stack = [start];
    let result = [];
    let visited = {};
    // mark start as visited because we put it in the stack already
    visited[start] = true;

    while (stack.length){
      let currVertex = stack.pop();
      result.push(currVertex);
      if (!visited[currVertex]){
        visited[currVertex] = true;
        stack.push(...this.adjacencyList[currentVertex]);
        // OR this.adjacencyList[currentVertex].forEach(neighbor => {
        //   if(!visited[neighbor]){
        //     visited[neighbor] = true;
        //     stack.push(neighbor);
        //   } 
        // });
      }
    }
    return result;
  }

  // Here we're using queue
  // Accept a starting vertex
  // Create a queue (array) and place starting vertex in it
  // Create an array to store visited nodes
  // Create an objec tto store visited nodes
  // Mark starting vertex as visted
  // Loop through while queue
  // Remove first vertex from queue and push to array that stores visted nodes
  // Loop over each vertex in the list for the vertex you are visiting
  // If it's not inside the object, mark it as visited and enqueue that vertex
  // Once you have finished looping, return the array of visited nodes

  BFS(start){
    let queue = [start];
    let result = [];
    let visited = {};
    visited[start] = true;

    while (queue.length){
      // use shift() to remove from beginning
      let currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    return result;
  }
}

// Test
let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// Queue: []
// Result: [A, B, C, D, E, F]
