// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {};

class BinaryTree {
    constructor() {
        this.root = null;
        this.Node = function (val) {
            this.val = val;
            this.left = null;
            this.right = null;
        };
    }
    buildTree(list) {
        const newList = list
            .filter((item) => item !== null && item)
            .map((item) => new this.Node(item));

        this.root = newList[0];
        const len = newList.length;
        for (let i = 0; i < len; i++) {
            if (i * 2 + 1 < len) {
                newList[i].left = newList[i * 2 + 1];
            }
            if (i * 2 + 2 < len) {
                newList[i].right = newList[i * 2 + 2];
            }
        }
    }

    maxDepth(root) {
        let i = 0; // 最大深度
        const fn = (root, l) => {
            if (!root) return;
            if (root.left === null && root.right === null) {
                i = Math.max(i, l); // 取出i，叶子节点
            }
            fn(root.left, l + 1);
            fn(root.right, l + 1);
        };
        fn(root, 1);

        return i;
    }
}

const arr = [3, 4, 5, -7, -6, null, null, -7, null, -5, null, null, null, -4];

const tree = new BinaryTree(arr);
tree.buildTree(arr);

// console.log(JSON.stringify(tree.root));
const result = tree.maxDepth(tree.root);
console.log(result);
