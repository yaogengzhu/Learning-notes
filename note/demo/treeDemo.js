class BinarySearchTree {
    constructor() {
        this.root = null;
        this.Node = function Node(key) {
            this.key = key;
            this.left = null;
            this.right = null;
        };
    }

    buildTree(list) {
        const nodeList = [];
        const len = list.length;

        for (let i = 0; i < len; i++) {
            if (list[i]) {
                nodeList[i] = new this.Node(list[i]);
            } else {
                nodeList[i] = undefined;
            }
        }
        this.root = nodeList[0];
        // 位置为 i 的节点，它的父节点位置为 i/2
        // 它的左子节点 2i
        // 它的右子节点 2i+1
        for (let i = 0; i < len / 2; i++) {
            if (nodeList[i]) {
                // 如果存在i节点
                if (i * 2 + 1 < len && nodeList[i * 2 + 1]) {
                    nodeList[i].left = nodeList[i * 2 + 1];
                }
                if (i * 2 + 2 < len && nodeList[i * 2 + 2]) {
                    nodeList[i].right = nodeList[i * 2 + 2];
                }
            }
        }
    }

    /**
     *  1.前序遍历
     *  对于二叉树中的任意一个节点，先打印该节点
     */
    preOrderTraverse(node, type) {
        if (node == null) {
            return;
        }
        console.log(node.key, type);
        this.preOrderTraverse(node.left, 'left');
        this.preOrderTraverse(node.right, 'right');

        // console.log(node);
    }
}

const tree = new BinarySearchTree();

tree.buildTree([1, 2, 5, 7, 9, 10, 43]);

tree.preOrderTraverse(tree.root);
console.log(tree.root);
