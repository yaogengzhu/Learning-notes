/**
 *  构建一个二叉树
 *  每个节点包含： root left right
 */

/**
 *  生成一个Tree的构造函数
 */
function Tree() {
    this.root = null;
}

/**
 * 给树添加节点
 */
Tree.prototype.addNode = function (v) {
    const node = new Node(v); // 实例化节点
    if (this.root === null) {
        // 判断树的根节点是否有值，没有的话，将这个节点添加到树
        this.root = node;
    } else {
        this.root.addOtherNode(node);
    }
};

Tree.prototype.sort = function () {
    this.root.sort();
};

/**
 * 生成一个节点的构造函数
 * @param {*} v
 */
function Node(v) {
    this.val = v;
    this.left = null;
    this.right = null;
}
/**
 *  给节点添加节点方法
 */
Node.prototype.addOtherNode = function (node) {
    // console.log(this.val, node.val)
    if (this.val > node.val) {
        if (this.left === null) {
            this.left = node;
        } else {
            this.left.addOtherNode(node);
        }
    }

    if (this.val < node.val) {
        if (this.right === null) {
            this.right = node;
        } else {
            this.right.addOtherNode(node);
        }
    }
};

Node.prototype.sort = function () {
    if (this.left !== null) {
        this.left.sort();
    }
    console.log(this.val);

    // console.log(this.left, this.right);
    if (this.right !== null) {
        this.right.sort();
    }
    // console.log(this.val);
};

// 实例一颗树
const tree = new Tree();

tree.addNode(10);
tree.addNode(16);
tree.addNode(1);
tree.addNode(6);
tree.addNode(3);
tree.addNode(4);

tree.sort();

console.log('====================================');
// console.log(tree);
console.log('====================================');
