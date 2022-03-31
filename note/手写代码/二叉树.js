class BinaryTree {
    constructor() {
        this.root = null
        // 节点构造函数
        this.Node = function Node(key) {
            this.key = key
            this.left = null
            this.right = null
        }
    }
    // 生成二叉树
    buildTree(list) {
        list = list.filter((item) => item !== null && item !== undefined)
        // 将每个数据变成节点，放入数组中
        const nodeList = []
        const len = list.length
        for (let i = 0; i < len; i++) {
            nodeList[i] = new this.Node(list[i])
        }
        this.root = nodeList[0] // 取出第一个节点作为根节点
        // 分配节点
        for (let i = 0; i < len / 2; i++) {
            if (2 * i + 1 < len && nodeList[2 * i + 1]) {
                nodeList[i].left = nodeList[2 * i + 1]
            }
            if (2 * i + 2 < len && nodeList[2 * i + 2]) {
                nodeList[i].right = nodeList[2 * i + 2]
            }
        }
    }

    findTargetNode(node, targetSum) {
        if (node === null) {
            return false
        }
        if (node.key > targetSum) {
            return false
        }
        if (node.key === targetSum) {
            return true
        }
        return (
            this.findTargetNode(node.left, targetSum - node.key) ||
            this.findTargetNode(node.right, targetSum - node.key)
        )
    }

    /**
     *  左->根->右
     * @param {*} root
     * @param {*} arr
     * @returns
     */
    preOrder(root, arr = []) {
        if (root !== null) {
            /* 将根节点的值放入数组中 */
            console.log(root.key)
            arr.push(root.key)
            this.preOrder(root.left, arr)
            this.preOrder(root.right, arr)
        }
        return arr
    }

    newPreOrder(root) {
        if (!root) return []
        const arr = []
        const stack = [root]
        while (stack.length) {
            // 取出第一个
            const currentNode = stack.pop()
            arr.push(currentNode.key)
            currentNode.right && stack.push(currentNode.right)
            currentNode.left && stack.push(currentNode.left)
        }
        return arr
    }

    centerOder(root) {
        if (root !== null) {
            this.preOrder(root.left)
            console.log(root.key)
            this.preOrder(root.right)
        }
    }

    lastOrder(root) {
        if (root !== null) {
            this.preOrder(root.left)
            this.preOrder(root.right)
            console.log(root.key)
        }
    }
}

const tree = new BinaryTree()
tree.buildTree([null, 1, 2, 3, 4, 5, 6, 7])
console.log(tree.root)
const result = tree.findTargetNode(tree.root, 10)
console.log('====================================')
console.log(result)
console.log('====================================')
const test1 = tree.preOrder(tree.root)
console.log(test1)
// tree.centerOder(tree.root)
// tree.lastOrder(tree.root)
const result1 = tree.newPreOrder(tree.root)
console.log(result1)
