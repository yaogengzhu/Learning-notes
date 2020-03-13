

const p = new Promise((reslove, reject) => {
    setTimeout(() => {
        Math.random() * 100 > 60 ? reslove('ok') : reject('error')
    }, 1000);
})

p.then( res => {
    console.log(res)
})