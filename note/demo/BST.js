function BinarySearchTree() {
    let root = null;
    let Node = function Node(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    // 插入
    this.insert = function (key) {
        // 创建新的节点
        const newNode = new Node(key);
        if (root === null) {
            /**
             *
             *   第一个节点
             *   {
             *     key: 10,
             *     left: null,
             *     right: null
             *   }
             *
             *  {
             *      key: 12,
             *      left: null,
             *      right: null
             *  }
             */
            root = newNode; // 如果根节点为空，则直接赋值创建的新的节点
        } else {
            insertNode(root, newNode); // root不为空的话，需要判断左右节点值
        }

        console.log(root, 'root');
    };

    function insertNode(node, newNode) {
        // 如果要插入的节点小于当前节点，则插入左边额树
        if (newNode.key < node.key) {
            if (node.left === null) {
                // 判断左边节点是否为空
                node.left = newNode; // 空的话，直接赋值创建的新的节点
            } else {
                insertNode(node.left, newNode); // 有值得的话需要进行判断
            }
        }

        if (newNode.key > node.key) {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }

    // 搜索
    this.search = function (key) {
        return searchNode(root, key);
    };
    function searchNode(node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true;
        }
    }

    // 删除节点
    this.remove = function (key) {
        root = removeNode(root, key);
    };

    function removeNode(node, key) {
        if (node === null) {
            // 如果根节点为空，则直接返回空
            return null;
        }
        if (key < node.key) {
            return removeNode(node.left, key);
        } else if (key > node.key) {
            return removeNode(node.right, key);
        } else {
            // key = node.key 删除  叶子结点
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            // 只有一个子节点
            if (node.left === null) {
                node = node.right;
                return node;
            }
            if (node.right === null) {
                node = node.left;
                return node;
            }
            // 有两个子节点
            // 获取右子树的最小节点
            const minRight = findMinNode(node.right);
            node.key = minRight.key;
            node.right = removeNode(node.right, minRight.key);
            return node;
        }
    }
    /**
     * 获取最右子树小节点
     * @param {} node
     * @param {*} key
     */
    function findMinNode(node) {
        if (node === null) {
            return null;
        }
        while (node && node.right !== null) {
            node = node.right;
        }
        return node;
    }

    // 最大值
    this.max = function () {
        // 最右端的最右节点
        let node = root;
        if (node === null) {
            return null;
        }
        while (node.right !== null) {
            node = node.right;
        }
        return node.key;
    };

    // 最小值
    this.min = function () {
        // 最左端的最右节点
        let node = root;
        if (node === null) {
            return null;
        }
        while (node.left !== null) {
            node = node.left;
        }
        return node.key;
    };

    // 中序排列
    this.inOrderTraverse = function (node = root, type) {
        if (node !== null) {
            this.inOrderTraverse(node.left, 'left');
            console.log(node.key, type, '中序排列');
            this.inOrderTraverse(node.right, 'right');
        }
    };

    // 先序排列
    this.preOrderTraverse = function (node = root, type) {
        if (node !== null) {
            console.log(node.key, type, '先序排列');
            this.preOrderTraverse(node.left, 'left');
            this.preOrderTraverse(node.right, 'right');
        }
    };

    // 后续排列
    this.postOrderTraverse = function (node = root, type) {
        if (node !== null) {
            this.postOrderTraverse(node.left, 'left');
            this.postOrderTraverse(node.right, 'right');
            console.log(node.key, type, '后序排列');
        }
    };
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(12);
tree.insert(8);
tree.insert(9);
tree.insert(30);
tree.insert(1);
tree.insert(13);
console.log('====================================');
console.log(tree.max());
console.log(tree.min());
console.log(tree.preOrderTraverse());
console.log(tree.postOrderTraverse());
console.log(tree.inOrderTraverse());

// tree.remove(8);
console.log(tree.min(), '???');
console.log(tree.search(10));
console.log('====================================');
