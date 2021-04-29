class Node {
  constructor(value) {
    this.value = value;
    this.adjacents = [];
  }

  addAdjacent(nodeValue) {
    this.adjacents.push(nodeValue);
  }

  deleteAdjacent(nodeValue) {
    if (this.adjacentExists(nodeValue)) {
      this.adjacents.pop(nodeValue);
    }
  }

  getAdjacent() {
    return JSON.stringify(this.adjacents);
  }

  isAdjacent() {
    if (this.adjacents.length() >= 1) {
      return true;
    } else {
      return false;
    }
  }

  adjacentExists(nodeValue) {
    var exists = this.adjacents.includes(nodeValue);
    return exists;
  }
}

module.exports = { Node };
