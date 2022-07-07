// 定义状态值
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function MyPromise(fn) {
  this.status = PENDING; // 初始化状态为pending
  this.value = null;
  this.reason = null;

  // 构造函数里面添加两个数组存储成功和失败的回调函数！避免pendding状态下，then方法被调用时，回调函数还没有存储
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];

  const that = this;

  function resolve(value) {
    if (that.status === PENDING) {
      that.status = FULFILLED;
      that.value = value;
      // 将成功的回调函数拿出来执行
      that.onFulfilledCallbacks.forEach((fn) => fn(value));
    }
  }

  function reject(reason) {
    if (that.status === PENDING) {
      that.status = REJECTED;
      that.reason = reason;
      // 将失败的回调函数拿出来执行
      that.onRejectedCallbacks.forEach((fn) => fn(reason));
    }
  }

  // 调用构造函数参数的函数
  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }
  /*  */
}

// 写then 方法
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  // 需要检查入参数是否是函数
  onFulfilled = typeof onFulfilled === "function" ? onFulfilled : () => {};
  onRejected = typeof onRejected === "function" ? onRejected : () => {};
  if (this.status === PENDING) {
    // 如果是pendding状态，把成功和失败的回调函数存储到数组里面
    // 类似事件监听器的模式
    // this.onFulfilledCallbacks.push(onFulfilled);
    // this.onRejectedCallbacks.push(onRejected);
    const promise2 = new MyPromise((resolve, reject) => {
      this.onFulfilledCallbacks.push(() => {
        try {
          onFulfilled(this.value);
        } catch (e) {
          reject(e);
        }
      });
      this.onRejectedCallbacks.push(() => {
        try {
          onRejected(this.reason);
        } catch (e) {
          reject(e);
        }
      });
    });
    return promise2;
  }

  // 如果onFulfilled 或则 onRejected 抛出一个异常，则promise2必须拒绝执行，并返回原因e
  if (this.status === FULFILLED) {
    const promise2 = new MyPromise((_, reject) => {
      try {
        onFulfilled(this.value);
      } catch (e) {
        reject(e);
      }
    });

    return promise2;
  }

  if (this.status === REJECTED) {
    const promise2 = new MyPromise((_, reject) => {
      try {
        onRejected(this.reason);
      } catch (e) {
        reject(e);
      }
    });

    return promise2;
  }
};

// then 在实例对象以创建好就调用了，这时候fn 里面的异步操作可能还没结束呢，
// 也就是说他的status还是pending，这个时候我们肯定不能立即调用onFulfilled或者onRejected，所以我们需要把这个函数放到一个数组里面，等待他的状态改变后再调用。
// new Promise((resolve, reject) => {}).then(
//   () => {},
//   () => {}
// );

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  });
})
  .then((res) => {
    console.log(res);
    return res;
  })
  .then((res) => {
    console.log(res, "??");
  });

console.log("ok");

// then 返回值是一个新的promise对象，这个新的promise对象的状态和原来的promise对象一样
