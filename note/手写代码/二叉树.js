class BinaryTree {
    constructor() {
        this.root = null;
        // 节点构造函数
        this.Node = function Node(key) {
            this.key = key;
            this.left = null;
            this.right = null;
        };
    }
    // 生成二叉树
    buildTree(list) {
        list = list.filter((item) => item !== null && item !== undefined);
        // 将每个数据变成节点，放入数组中
        const nodeList = [];
        const len = list.length;
        for (let i = 0; i < len; i++) {
            nodeList[i] = new this.Node(list[i]);
        }
        this.root = nodeList[0];  // 取出第一个节点作为根节点
         // 分配节点
        for (let i = 0; i < len / 2; i++) {
            if (2 * i + 1 < len && nodeList[2 * i + 1]) {
                nodeList[i].left = nodeList[2 * i + 1];
            }
            if (2 * i + 2 < len && nodeList[2 * i + 2]) {
                nodeList[i].right = nodeList[2 * i + 2];
            }
        }
    }

    findTargetNode(node, targetSum) {
        if (node === null) {
            return false;
        }
        if (node.key > targetSum) {
            return false;
        }
        if (node.key === targetSum) {
            return true;
        }
        return (
            this.findTargetNode(node.left, targetSum - node.key) ||
            this.findTargetNode(node.right, targetSum - node.key)
        );
    }
}

const tree = new BinaryTree();
tree.buildTree([null, 1, 2, 4, 6, 8, 10, 133]);
// console.log(tree.root);
const result = tree.findTargetNode(tree.root, 10)
console.log('====================================');
console.log(result);
console.log('====================================');
