class Tree {
  constructor() {
    this.root = null;
  }
};

Tree.prototype.traverse = function() {
  this.root.visit(this.root);
}

Tree.prototype.find = function(n) {
  return this.root.find(n);
}

Tree.prototype.add = function(n) {
  let node = new Node(n);

  if (this.root == null) {
    this.root = node;
    this.root.x = 600;
    this.root.y = 50;
  } else {
    this.root.addNode(node);
  }
}

Tree.prototype.remove = function(n) {
  if (this.root == null) {
    return root;
  } else {
    this.root = removeNode(this.root, n);
  }
}

Tree.prototype.findByCoordinates = function(x, y) {
  return this.root.findByCoordinates(x, y);
}
