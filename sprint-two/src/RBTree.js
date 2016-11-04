

var RBTree = function() {
  const RED = 1;
  const BLACK = -1;

  RBNode = function(value, parent) {
    this._color = RED;
    this._value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  };

  RBNode.prototype.setColor = function(value) {
    if (value === RED || value === BLACK) {
      this.color = value;
    } else {
      throw new TypeError(value);
    }
  };

  RBNode.prototype.getValue = function() {
    return this.value;
  };

  RBNode.prototype.getColor = function() {
    return this.color;
  };

  this.root = null;

  isRed = function(node) {
    return (node === null) ? false : node.getColor() === RED;
  };

  colorRed = function(node) {
    if (node !== null) {
      node.setColor(RED);
    }
  };

  colorBlack = function(node) {
    if (node !== null) {
      node.setColor(BLACK);
    }
  };



  this.insert = function(value) {
    if (this.root === null) {
      this.root = new RBNode(value, null);
      colorBlack(this.root);
      inserted = true;
    }
    var curr = this.root;
    while (!inserted) {
      if (value <= curr.value) {
        if (curr.left === null) {
          curr.left = new RBNode(value, curr);
          inserted = true;
        } else {
          curr = curr.left;
        }
      } else {
        if (curr.right === null) {
          curr.right = new RBNode(value, curr);
          inserted = true;
        } else {
          curr = curr.right;
        }
      }
    }
  };

  this.depthFirst = function(callBack, order) {
    var preOrder = function(node) {
      if (node === null) {
        return;
      } else {
        callBack(node.value);
        preOrder(node.left);
        preOrder(node.right);
      }
    };
  };
  var inOrder = function(node) {
    if (node === null) {
      return;
    } else {
      inOrder(node.left);
      callBack(node.value);
      inOrder(node.right);
    }
  };
  var postOrder = function(node) {
    if (node === null) {
      return;
    } else {
      postOrder(node.left);
      postOrder(node.right);
      callBack(node.value);
    }
  };
  if (order === 'post') {
    postOrder(this.root);
  } else if (order === 'pre') {
    preOrder(this.root);
  } else {
    inOrder(this.root);
  }
};

var tree = new RBTree();
tree.insert(5);
console.log(tree.root);