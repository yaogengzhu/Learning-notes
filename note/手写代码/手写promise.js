class MyPromise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";

  constructor(fn) {
    this.status = MyPromise.PENDING;
    this.result = null;
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];
    try {
      fn(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }

  resolve(value) {
    if (this.status === MyPromise.PENDING) {
      this.status = MyPromise.FULFILLED;
      this.result = value;
      this.resolvedCallbacks.forEach((fn) => fn(this.result));
    }
  }
  reject(value) {
    if (this.status === MyPromise.PENDING) {
      this.status = MyPromise.REJECTED;
      this.result = value;
      this.rejectedCallbacks.forEach((fn) => fn(this.result));
    }
  }

  /**
   *
   * @param {*} onFulfilled
   * @param {*} onRejected
   */
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : () => {};
    onRejected = typeof onRejected === "function" ? onRejected : () => {};
    if (this.status === MyPromise.PENDING) {
      this.resolvedCallbacks.push(onFulfilled);
      this.rejectedCallbacks.push(onRejected);
    }
    if (this.status === MyPromise.FULFILLED) {
      //  设置异步执行
      setTimeout(() => {
        onFulfilled && onFulfilled(this.result);
      });
    }
    if (this.status === MyPromise.REJECTED) {
      setTimeout(() => {
        onRejected && onRejected(this.result);
      });
    }
  }
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  });
});
p.then((res) => {
  console.log(res);
});

console.log("zs");
