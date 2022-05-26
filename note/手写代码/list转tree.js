function listTransfromToTree(list) {
    const tree = []
    for (const node of list) {
        // 如果没有pid就可以认为是根节点
        if (node.parentId === '0') {
            let p = { ...node }
            p.children = getChildren(p.id, list)
            tree.push(p)
        }
    }
    function getChildren(id, list) {
        const children = []
        for (const node of list) {
            if (node.parentId === id) {
                children.push(node)
            }
        }
        for (const node of children) {
            const nextChildren = getChildren(node.id, list)
            if (nextChildren.length) {
                node.children = nextChildren
            }
        }
        return children
    }
    return tree
}

function toList(tree, list = []) {
    tree.forEach((item) => {
        list.push(item)
        toList(item.children, list)
    })
}