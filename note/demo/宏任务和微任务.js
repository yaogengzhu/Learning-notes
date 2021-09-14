// Promise.resolve()
//     .then(() => {
//         console.log(0);
//         return Promise.resolve(4);
//     })
//     .then((res) => {
//         console.log(res);
//     });

// Promise.resolve()
//     .then(() => {
//         console.log(1);
//     })
//     .then(() => {
//         console.log(2);
//     })
//     .then(() => {
//         console.log(3);
//     })
//     .then(() => {
//         console.log(5);
//     })
//     .then(() => {
//         console.log(6);
//     });

/***
 *
 *  宏任务
 *  微任务
 */
const PENDIUG = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

/**
 *  状态和结果的管理
 */
class MyPromise {
    constructor(executor) {
        try {
            executor(this.resolve, this.reject);
        } catch (e) {
            this.reject(e);
        }
    }
    status = PENDIUG; // 初始值为pending
    value = null; // 成功后的值
    reason = null; // 失败后的值
    onFulfilled = []; // 成功回调 支持多个回调
    onRejected = []; // 失败回调

    resolve = (value) => {
        if (this.status === PENDIUG) {
            this.status = FULFILLED; // 将状态设置为成功状态
            this.value = value; // 保存成功后的值
            // this.onFulfilled && this.onFulfilled(value); // 判断回调是否存在，存在直接调用
            while (this.onFulfilled.length) {
                this.onFulfilled.shift()(value);
            }
        }
    };
    reject = (reason) => {
        if (this.status === PENDIUG) {
            this.status = REJECTED;
            this.reason = reason;
            // this.onRejected && this.onFulfilled(reason);
            while (this.onRejected.length) {
                this.onRejected.shift()(reason);
            }
        }
    };

    // then的实现
    then(onFulfilled, onRejected) {
        // 新增链式调用 直接创建一个Mypromise。并在后面return出去
        onFulfilled =
            typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
        onRejected =
            typeof onRejected === 'function'
                ? onRejected
                : (reason) => {
                      throw reason;
                  };
        const promise2 = new MyPromise((resolve, reject) => {
            // 这里的内容在执行器中，会直接被执行
            if (this.status === PENDIUG) {
                // 不知道成功和失败的状态时，需要将回调函数保存起来
                this.onFulfilled.push(onFulfilled);
                this.onRejected.push(onRejected);
            }
            if (this.status === FULFILLED) {
                const x = onFulfilled(this.value);
                // resolvePromise
                // resolvePromise(x, resolve, reject);
                // 创建一个微任务 等待promise2 完成初始化
                queueMicrotask(() => {
                    resolvePromise(promise2, x, resolve, reject);
                });
            }
            if (this.status === REJECTED) {
                onRejected(this.reason);
            }
        });
        return promise2;
    }
}
/**
 * Chaining cycle detected for promise #<Promise>
 */
function resolvePromise(promise2, x, resolve, reject) {
    // 判断x是不是Mypromise实例

    if (promise2 === x) {
        return reject(new TypeError('检测到 promise #<Promise> 的链接循环'));
    }
    if (x instanceof MyPromise) {
        x.then(resolve, reject);
    } else {
        // 结果是一个值
        resolve(x);
    }
}

const promise = new Promise((resolve, reject) => {
    // resolve('success');
    thorw('err')
});

// 这个时候将promise定义一个p1，然后返回的时候返回p1这个promise
var p1 = promise.then((value) => {
    console.log(1);
    // return p1;
});

// 运行的时候会走reject
p1.then(() => {
    console.log('rejectok');
}).then(() => {
    console.log('oks');
});
