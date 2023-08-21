// 副作用函数
function effect() {
  document.body.innerText = obj.text;
  console.log("ok");
}

const data = {
  text: "hello world",
};
const buket = new Set();
const obj = new Proxy(data, {
  get(target, key) {
    buket.add(effect);
    return target[key];
  },
  set(target, key, newVal) {
    target[key] = newVal;
    console.log(buket);
    buket.forEach((fn) => fn());
    return true;
  },
});
effect();

setTimeout(() => {
  obj.text = "您好！";
}, 1000);
