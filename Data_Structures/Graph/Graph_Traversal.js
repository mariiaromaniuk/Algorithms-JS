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

  // Function that accepts a starting node
  // Create a list to store end result, to be returned at the very end
  // Create an object to store visited vertices
  // Create a heper function that accepts a vertex:
  // • it returns early if the vertex is empty
  // • it places the vertex it accepts into the visited object and push that vertex into the result array
  // • it loops over all of the values in the adjacency list for that vertex
  // If any of those values have not been visited, recursively invoke the helper function with that vertex
  // Invoke this helper function with the starting vertex

  DFSrecursive(start){
    let listResult = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;
    function depth(vertex){
      if (!vertex) 
        return null;
      visited[vertex] = true;
      listResult.push(vertex);
      for (let i = 0; i < adjacencyList[vertex].length; i++){
        if (!visited[adjacencyList[vertex][i]]) 
          return depth(adjacencyList[vertex][i]);
      }
    }
    depth(start);
    return listResult;
  }

  // Accept a starting node
  // Create a stack to keep track of vertices (use a list/array)
  // Create a list to store the end result, to be returned at the very end
  // Create an object to store visited vertices
  // Add the starting vertex to the stack & mark it visited
  // While the stack has something in it -- pop the next vertex from the stack -- if that one hasn't been visited yet
  // Mark it as visited, add it to the result list
  // Push all of its neighbors into the stack

  DFSiterative(start){
    let stackOfVertices = [start];
    let listResult = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;
    let nextVertex;
    visited[start] = true;
    while (stackOfVertices.length !== 0){
      nextVertex = stackOfVertices.pop();
      listResult.push(nextVertex);
      if (!visited[nextVertex]){
        visited[nextVertex] = true;
        stackOfVertices.push(...adjacencyList[nextVertex]);
        //or adjacencyList.forEach(neighbor => {
        //     if (!visited[neighbor]){
        //         visited[neighbor] = true
        //         stackOfVertices.push(neighbor)
        //     }
        // })
      }
    }
    return listResult;
  }

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

  breadthFirst(start){
    let queue = [start];
    let returnArray = [];
    let visited = {};
    visited[start] = true;
    let currentVertex;
    while (queue.length){
      currentVertex = queue.shift();
      returnArray.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    return returnArray;
  }

}
