
/***
 * createElement
 */
function createElement(type, config, ...children) {
    if(config) {
        delete config._self
        delete config._socure
    }
    const props = {
        ...config,
        children: children.map( child => typeof child === 'object' ? child : createTextNode(child))
    }
    return {
        type,
        props
    }
}

function createTextNode(text) {
    return {
        type: 'TEXT',
        prpos: {
            children: [],
            nodeValue: text
        }
    }
}


/***
 * render
 * 
 * vnode 虚拟dom
 * node 真实dom
 */
function render(vnode, container, callback) {
    // 将vnode->node
    const node = creatNode(vnode)
    container.appendChild(node)
    // 再将node插入container
}

// 几种节点类型---元素-文本
// 创建node
function creatNode(vnode) {
    const { type, props } = vnode
    let node = null
    if (type === 'text') {
        node = ndoe.createNode('')
    } else if (typeof type === 'string') {
        node = document.createElement(type)
    }
    // 将props.children遍历，转成真实dom,在插入node
    reconcileChildren(props.children, node)

    // 处理属性值
    updateNode(node, props)
    return node
}

// 更新属性值，如className 
function updateNode(node, nextVal) {
    Object.keys(nextVal).filter(k => k !== 'children' ).forEach( k => {
        node[k] = nextVal[k]
    })
}

// 源码中children可以是单个对象或者是数组，这里统一处理成数组
function reconcileChildren(children, node) {
    for(let i = 0; children.length; i++) {
        let child = children[i]
        render(child, node)
    }
}