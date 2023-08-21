const data = {
  text: "测试",
};
let activeEffect;

function effect(fn) {
  activeEffect = fn;
  fn();
}

const set = new Set();

const obj = new Proxy(data, {
  get(target, key) {
    if (activeEffect) {
      console.log(key, target);
      set.add(activeEffect);
    }
    return target[key];
  },
  set(target, key, newVal) {
    target[key] = newVal;
    set.forEach((fn) => fn());
    console.log(set);
    return true;
  },
});
effect(() => {
  console.log("OK");
  document.body.innerText = obj.text;
});

setTimeout(() => {
  //   data.text = "这是啥？";
  // obj.text = "hello world~";
  obj.a = 'hhkfa';
  console.log("ok");
}, 2000);
