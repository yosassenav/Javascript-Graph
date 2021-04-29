var { Debug } = require("./src/utils/debug");
var { graph } = require("./src/mock/test");

var debug;
debug = new Debug(graph);

debug.printGraph();

//debug.printNode(graph.nodes[1]);
