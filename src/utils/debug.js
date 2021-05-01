class Debug {
  constructor(graph) {
    this.graph = graph;
  }

  printAdjacentList() {
    this.graph.nodes.map((node) => {
      //console.log("node -> ", node.getAdjacent()[0].value);
      // if node has adjacents, print adjacents
      if (node.adjacents.length >= 1) {
        var str = "node " + node.value + " ->";
        node.adjacents.forEach((node) => {
          str += " adjacent: " + node.value + " ";
        });
        console.log(str);
        //console.log(node.adjacents[0].value);
      } else {
        console.log("node " + node.value + " ->" + " ''");
      }
    });
  }

  printAdjacentMatrix() {}

  printNode(node) {
    var exists = this.graph.nodes.includes(node);
    if (exists == true) {
      console.log(node);
    }
  }
}

module.exports = { Debug };
