class BinarySearchTree {
    constructor() {
        this.root = null;
        this.Node = function Node(key) {
            this.key = key;
            this.left = null;
            this.right = null;
        };
    }

    insert = (key) => {
        let newNode = new this.Node(key);
        this.root === null
            ? (this.root = newNode)
            : this.insertNode(this.root, newNode);
    };

    insertNode = (root, newNode) => {
        if (root.key < newNode.key) {
            root.left === null
                ? (root.left = newNode)
                : this.insertNode(root.left, newNode);
        } else {
            root.right === null
                ? (root.right = newNode)
                : this.insertNode(root.right, newNode);
        }
    };

    insertWhile = (key) => {
        let node = new this.Node(key);
        if (this.root === null) {
            this.root = node;
        } else {
            let buffer = this.root;

            while (true) {
                if (node.value < buffer.value) {
                    if (buffer.left === null) {
                        buffer.left = node;
                        break;
                    } else {
                        buffer = buffer.left;
                    }
                } else {
                    if (buffer.right === null) {
                        buffer.right = node;
                        break;
                    } else {
                        buffer = buffer.right;
                    }
                }
            }
        }
    };

    buildTree = (list) => {
        const nodeList = [];
        const len = list.length;
        for (let i = 0; i < len; i++) {
            if (list[i] !== null) {
                nodeList[i] = new this.Node(list[i]);
            } else {
                nodeList[i] = undefined;
            }
        }
        this.root = nodeList[0];
        /**
         *  将数组的每个元素遍历成想要的节
         *  节点都满足以下三种关系：
         *  1. 位置为i的节点，它的父节点位置为i/2
         *  2. 它的左节点2i
         *  3. 它的右节点2i + 1
         */
        for (let i = 0; i < len / 2; i++) {
            if (nodeList[i]) {
                if (2 * i + 1 < len && nodeList[2 * i + 1]) {
                    nodeList[i].left = nodeList[2 * i + 1];
                }
                if (2 * i + 2 < len && nodeList[2 * i + 2]) {
                    nodeList[i].right = nodeList[2 * i + 2];
                }
            }
        }
    };

    // 中序
    inOrderTraverse = (cb) => {
        this.inOrderTraverseNode(this.root, cb);
    };

    inOrderTraverseNode = (root, cb) => {
        if (node !== null) {
            this.inOrderTraverseNode(root.left, cb);
            cb(node.key);
            this.inOrderTraverseNode(root.right, cb);
        }
    };

    // 先序
    preOrderTraverse = (cb) => {
        this.preOrderTraverseNode(this.root, cb);
    };

    preOrderTraverseNode = (root, cb) => {
        if (node !== null) {
            cb(node.key);
            this.preOrderTraverseNode(root.left, cb);
            this.preOrderTraverseNode(root.right, cb);
        }
    };
    // 后序
    postOrderTraverse = (cb) => {
        this.postOrderTraverseNode(this.root, cb);
    };

    postOrderTraverseNode = (root, cb) => {
        if (node !== null) {
            this.postOrderTraverseNode(root.left, cb);
            this.postOrderTraverseNode(root.right, cb);
            cb(node.key);
        }
    };

    mini = () => {
        return this.miniNode(this.root);
    };

    miniNode = (node) => {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    };

    max = () => {
        return this.maxNode(this.root);
    };

    maxNode = (node) => {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    };

    search = (key) => {
        return this.searchNode(this.root, key);
    };

    searchNode = (node, key) => {
        if (node === null) {
            return false;
        }

        if (key < node.key) {
            return this.searchNode(node.left, key);
        } else if (key > node.key) {
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    };

    // 发现最小节点
    findMinNode = (node) => {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node;
        }
        return null;
    };

    remove = (key) => {
        this.root = this.removeNode(this.root, key);
    };

    removeNode = (node, key) => {
        if (node === null) {
            return null;
        }

        if (key < node.key) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            let aux = this.findMinNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    };
}

const tree = new BinarySearchTree();
console.log('====================================');
// console.log(tree);
tree.buildTree([1, 3, 5, 8]);
tree.inOrderTraverse()
console.log(tree.root);
console.log('====================================');
