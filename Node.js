class Node {
  constructor(val, x, y) {
    this.value = val;
    this.parent = null;
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;
  }
};

Node.prototype.visit = function(parent) {
  if(this.left !== null) {
    this.left.visit(this);
  }
  // figure styles
  stroke(255);
  strokeWeight(2);
  fill(255);
  ellipse(this.x, this.y, 35, 35);
  line(parent.x, parent.y, this.x, this.y);

  // text styles
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(18);
  textStyle(BOLD);
  text(this.value, this.x, this.y);

  if(this.right !== null) {
    this.right.visit(this);
  }
}

Node.prototype.find = function(n) {
  if (this.value == n) {
    return this;
  } else if (n < this.value && this.left !== null) {
    return this.left.find(n);
  } else if (n > this.value && this.right !== null) {
    return this.right.find(n);
  }

  return null;
}

Node.prototype.addNode = function(n) {
  if (n.value < this.value) {
    if (this.left == null) {
      this.left = n;
      this.left.parent = this;
      this.left.x = this.x - 80;
      this.left.y = this.y + 40;
      this.left.visit(this);
    } else {
      this.left.addNode(n);
    }
  } else if (n.value > this.value) {
    if (this.right == null) {
      this.right = n;
      this.right.parent = this;
      this.right.x = this.x + 80;
      this.right.y = this.y + 40;
      this.right.visit(this);
    } else {
      this.right.addNode(n);
    }
    
  }
}

function removeNode(root, n) {
  if(n === root.value) {
    // no children
    if (root.left === null && root.right === null) {
      root.removeStyles();
      return null;
    }

    // has one child
    if (root.left == null) {
      root.right.parent = root.parent;
      root.removeStyles();
      return root.right;
    }
    else if (root.right == null) {
      root.left.parent = root.parent;
      root.removeStyles();
      return root.left;
    }

    // has two children
    let tempNode = root.right;
    while(tempNode.left !== null) {
      tempNode = tempNode.left;
    }
    root.value = tempNode.value;
    tempNode.parent = root.parent;
    root.right = removeNode(root.right, tempNode.value);

    root.removeStyles();
    root.visit(root.parent);

    return root;
  } else if (n < root.value) {
    root.left = removeNode(root.left, n);
    return root;
  } else {
    root.right = removeNode(root.right, n);
    return root;
  }
}

Node.prototype.removeStyles = function() {
  stroke(51);
  strokeWeight(51);
  fill(51);
  ellipse(this.x, this.y, 0, 0);
}

Node.prototype.findByCoordinates = function(x, y) {
  let result = null;

  if (this.x >= x - 35 && this.x <= x + 35) {
    if (this.y >= y - 35 && this.y <= y + 35) {
      result = this.value;
    }
  }

  if(this.right !== null && result === null) { 
    result = this.right.findByCoordinates(x, y);
  }
  if(this.left !== null && result === null) {
    result = this.left.findByCoordinates(x, y);
  }
  
  return result;
}

