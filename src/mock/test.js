var { Graph } = require("../lib/graph");
var { Node } = require("../lib/node");

var graph;
graph = new Graph();

var node1;
node1 = new Node(23);

var node2;
node2 = new Node(2);

node2.addAdjacent(node1);

graph.addNode(node1);
graph.addNode(node2);

module.exports = { graph };
