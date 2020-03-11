// console.log(global)

// console.log(process.env)
// process.env.NODE_ENV = 'dev'

// console.log(process.env.NODE_ENV)
// let url = ''
// if (!process.env.NODE_ENV) {
//     url = 'localhost:3000'
// } else {
//     url = 'yaogeng.top'
// }

// console.log(url)

function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(333)   
        }, 0);
    })
}

async function f1() {
    const result = await f2()
    console.log(result)
    console.log('await')
}

console.log(f1())