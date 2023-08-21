const data = {};

// 存储副作用的函数桶
const buket = new WeakMap();

let activeEffect;

function effect(fn) {
  activeEffect = fn;
  fn();
}

const obj = new Proxy(data, {
  get(target, key) {
    // 没有activeEffect， 直接return，表示不存在副作用
    if (!activeEffect) return target[key];
    let depsMap = buket.get(target);
    if (!depsMap) {
      buket.set(target, (depsMap = new Map()));
    }
    let deps = depsMap.get(key);
    if (!deps) {
      depsMap.set(key, (deps = new Set()));
    }
    deps.add(activeEffect);
    return target[key];
  },
  set(target, key, newVal) {
    target[key] = newVal;
    const depsMap = buket.get(target);
    if (!depsMap) return;
    const effects = depsMap.get(key);
    effects && effects.forEach((fn) => fn());
  },
});

effect(() => {
  document.body.innerText = obj.text
});

setTimeout(() => {
  obj.text = "ok";
}, 1000);
