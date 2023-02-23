// vue3.0源码中的queueJob方法
const queue = new Set();
let p = Promise.resolve();

let isFlushing = false;

function queueJob(job) {
  console.log("add");
  queue.add(job);
  if (!isFlushing) {
    isFlushing = true;

    p.then(() => {
      try {
        queue.forEach((job) => {
          job();
        });
      } catch (e) {
        isFlushing = false;
        queue.clear();
      }
    });
  }
}

function t1() {
  console.log("xx", ">>>>>>>>");
}
function t2() {
  console.log("2222", ">>>>>>>>");
}
function t3() {
  console.log("3333", ">>>>>>>>");
}

queueJob(t1);
queueJob(t2);
queueJob(t3);

// vue3.0源码中的queueJob方法

function mountComponent(vnode, container, anchor) {
  const componentOptions = vnode.type;
  const { render, data } = componentOptions;

  const state = reactive(data);

  const instance = {
    // 组件自身的状态
    state,
    // 一个布尔值，用来表示组件是否被挂载，初始值为 false
    isMounted: false,
    // 组件被渲染的内容，即获得子树
    subTree: null, // 存储组件渲染函数返回的虚拟DOM，即组件的子树
  };

  // 将组件实例设置到vnode上，用于后续逻辑更新
  vnode.component = instance;

  effect(() => {
    // 调用组件的渲染函数，获得子树
    const subTree = render.call(state, state);
    // 检查组件事否被挂载
    if (!instance.isMounted) {
      // 初次挂载，调用patch函数 第一个参数传递null
      patch(null, subTree, container, anchor);
      instance.isMounted = true; // 重点： 将isMounted设置为true，这样当更新时就会再次挂载操作，而是执行更新
    } else {
        patch(instance.subTree, subTree, container, anchor)
    }
    // 更新组件实例的subTree属性（子树）
  }, { scheduler: queueJob});
}
