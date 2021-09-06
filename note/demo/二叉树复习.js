function Tree() {
    this.root = null;
}

Tree.prototype.addNode = function (v) {
    const node = new Node(v);
    if (this.root === null) {
        this.root = node;
    } else {
        this.root.addOhterNode(node);
    }
};

function Node(v) {
    this.val = v;
    this.left = null;
    this.right = null;
}

Node.prototype.addOhterNode = function (v) {
    if (this.val > v.val) {
        if (this.left === null) {
            this.left = v;
        } else {
            this.left.addOhterNode(v);
        }
    }

    if (this.val < v.val) {
        if (this.right === null) {
            this.right = v;
        } else {
            this.right.addOhterNode(v);
        }
    }
};

const tree = new Tree();
tree.addNode(10);
tree.addNode(11);
tree.addNode(13);

console.log(tree, 'tree');
