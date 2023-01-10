function render(vnode, container) {
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
  } else if (Array.isArray(vnode.children)) {
    vnode.children.forEach(child => render(child, el))
  }
  container.appendChild(el)
}