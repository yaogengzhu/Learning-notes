// function a() {
//     return 12
// }

// async function b() {
//     setTimeout(() => {
//         console.log(0)
//     }, 0)
//     const d = await a()
//     console.log(d)
//     console.log(33)
// }

// b()

/**
 *  
 *  微任务
 *  宏任务
 *  
 */
async function async1() {
    console.log("a");
    const res = await async2();
    console.log("b");
}

async function async2() {
    console.log("c");
    return 2;
}

console.log("d");

setTimeout(() => {
    console.log("e");
}, 0);

async1().then(res => {
    console.log("f")
})

new Promise((resolve) => {
    console.log("g");
    resolve();
}).then(() => {
    console.log("h");
});

console.log("i");
https://mp.weixin.qq.com/s/mJrdoAWMvVSvXc2xXShNxg