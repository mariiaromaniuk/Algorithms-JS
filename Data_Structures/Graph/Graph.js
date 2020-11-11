// Adjacency Matrix representation of a graph
// • Takes up more space (in sparse graphs) 
// • Slower to iterate over all edges 
// • Faster to lookup specific edge

const adjacencyMatrix = [
  [false, true, true, false],
  [false, false, true, true],
  [false, false, false, false],
  [false, false, true, false],
];


// Adjacency List representation of a graph
// • Can take up less space (in sparse graphs)
// • Faster to iterate over all edges
// • Can be slower to lookup specific edge

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
    // Remove all the adjacent vertices in this vertex's adjacency list
    while (this.adjacencyList[vertex].length){
      // Remove each vertex
      const adjacentVertex = this.adjacencyList.pop();
      // Remove the connection 
      this.removeEdge(vertex, adjacentVertex);
    }
    // Delete vertex itself
    delete this.adjacencyList[vertex];
  }
}
