/**
 *  发布订阅模式， 可以先发布后订阅吗？
 *
 *
 */

const Event = (function () {
  let clientList = {},
    listen,
    trigger,
    offline = {},
    remove;

  listen = function (key, fn) {
    if (!clientList[key]) {
      clientList[key] = [];
    }
    clientList[key].push(fn);

    const fns = offline[key];
    if (!fns) {
      return false;
    }
    for (let i = fns.length - 1; (fn1 = fns[i--]); ) {
      fn.apply(this, fn1);
    }
  };

  trigger = function () {
    let key = Array.prototype.shift.call(arguments);
    fns = clientList[key];
    if (!fns || fns.length === 0) {
      if (!offline[key]) {
        offline[key] = [];
      }
      offline[key].push(arguments);
      return false;
    }
    for (let i = 0, fn; (fn = fns[i++]); ) {
      fn.apply(this, arguments);
    }
  };

  remove = function (key, fn) {
    let fns = clientList[key];
    if (!fns) {
      return false;
    }
    if (!fn) {
      fns && (fns.length = 0);
    } else {
      for (let i = fns.length - 1; i >= 0; i--) {
        let _fn = fns[i];
        if (_fn === fn) {
          fns.splice(i, 1);
        }
      }
    }
  };

  return {
    listen,
    trigger,
    remove,
  };
})();

Event.trigger("key", "avd");
Event.trigger("key", "avd111");
Event.listen("key", function (a) {
  console.log("得到啦什么", a);
});
