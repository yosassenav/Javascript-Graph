class Debug {
  constructor(graph) {
    this.graph = graph;
  }

  printAdjacentList() {}

  printAdjacentMatrix() {}

  printGraph() {
    console.log({ graph: this.graph });
  }

  printNode(node) {
    var exists = this.graph.nodes.includes(node);
    if (exists == true) {
      console.log(node);
    }
  }
}

module.exports = { Debug };
