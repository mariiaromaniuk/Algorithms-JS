// Adjacency Matrix representation of a graph
const adjacencyMatrix = [
  [false, true, true, false],
  [false, false, true, true],
  [false, false, false, false],
  [false, false, true, false],
];


// Adjacency List representation of a graph
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
}
