class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(node) {
    this.nodes.push(node);
  }

  deleteNode(node) {
    if (this.nodeExists(node)) {
      this.nodes.pop(node);
    }
  }

  getNodes() {
    return this.nodes;
  }

  nodeExists(node) {
    var exists = this.nodes.includes(node);
    return exists;
  }
}

module.exports = { Graph };
