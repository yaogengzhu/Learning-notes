function mountComponet(vnode, container) {
  // 调用组件函数，获取组件函数要渲染的内容 （虚拟dom)
  const subtree = vnode.tag()
  render(subtree, container);
}

function render(vnode, container) {
  if (typeof vnode.tag === 'string') {
    mountElement(vnode, container)
  } else if (typeof vnode.tag === 'function') {
    // 描述组件的虚拟节点
    mountComponet(vnode, container)
  }
}

funnction mountElement(vnode, container) {
  const el = document.createElement(vnode.tag)
  for (const key in vnode.props) {
    if (/^on/.test(key)) {
      const event = key.slice(2).toLowerCase()
      document.addEventListener(event, vnode.props[key])
    } else {
      el.setAttribute(key, vnode.props[key])
    }
  }

  if (typeof vnode.children === 'string') {
    el.appendChild(document.createTextNode(vnode.children))
  } else {
    vnode.children.forEach(child => render(child, el))
  }
  container.appendChild(el)
}
