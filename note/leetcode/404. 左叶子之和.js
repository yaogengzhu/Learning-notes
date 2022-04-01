/**
 * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var sumOfLeftLeaves = function (root) {
//     let sum = 0;
//     const fn = (root) => {
//         if (root) {
//             console.log(root.val);
//             fn(root.left);
//             fn(root.right);
//         }
//     };
//     fn(root);
//     return sum;
// };

const root = [1, 2, 3, 4, 5];

// sumOfLeftLeaves(root);

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
        let newList = list.filter((item) => item !== null);
        newList = newList.map((item) => new this.Node(item));
        this.root = newList[0];
        let len = newList.length;
        for (let i = 0; i < len; i++) {
            if (i * 2 + 1 < len) {
                newList[i].left = newList[i * 2 + 1];
            }
            if (i * 2 + 2 < len) {
                newList[i].right = newList[i * 2 + 2];
            }
        }
    }

    sumOfLeftLeaves(root) {
        let sum = 0;
        const fn = (root) => {
            if (root) {
                // 存在左节点----> 但是左节点不存在 左右节点了
                if (root.left && !root.left.left && !root.left.right) {
                    console.log(root.left.val);
                    sum += root.left.val;
                }
                fn(root.left);
                fn(root.right);
            }
        };
        fn(root);
        return sum;
    }
}

const tree = new BinaryTree();
tree.buildTree(root);
console.log(tree.root);

tree.sumOfLeftLeaves(tree.root);
