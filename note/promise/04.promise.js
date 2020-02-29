function getOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok1')
        }, 1000)
    })
}


function getTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok12')
        }, 1000)
    })
}

Promise.all([getOne(), getTwo()]).then( res => {
    console.log(res)
})