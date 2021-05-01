var { Graph } = require("../lib/graph");
var { Node } = require("../lib/node");

var graph;
graph = new Graph();

var node1;
node1 = new Node(23);

var node2;
node2 = new Node(2);

var node3;
node3 = new Node(3);

var node4;
node4 = new Node(22);

var node5;
node5 = new Node(21);

var node6;
node6 = new Node(9);

node2.addAdjacent(node1);
node1.addAdjacent(node3);
node2.addAdjacent(node4);
node3.addAdjacent(node6);
node6.addAdjacent(node1);


graph.addNode(node1);
graph.addNode(node2);
graph.addNode(node3);
graph.addNode(node4);
graph.addNode(node5);
graph.addNode(node6);

module.exports = { graph };
