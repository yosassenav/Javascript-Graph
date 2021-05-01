var { Debug } = require("./src/utils/debug");
var { graph } = require("./src/mock/test");

var debug;
debug = new Debug(graph);

/*graph.nodes.forEach((node) => {
  debug.printNode(node);
});*/

debug.printAdjacentList();
