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


const listToTree = (list) => {
    const newList = [];
    const newObjTree = list.reduce((pre, cur) => {
      let newKey = cur.cityCode;
      if (!pre[newKey]) {
        pre[newKey] = [];
      }
      pre[newKey].push(cur);
      return pre;
    });
    // eslint-disable-next-line guard-for-in
    for (let k in newObjTree) {
      newList.push({
        ...arr1.find((item) => item.cityCode === k),
        children: newObjTree[k],
      });
    }
    return newList;
  };
  const result = listToTree(arr1);
  console.log(result);