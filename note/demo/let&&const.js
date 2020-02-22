

for (let i = 0; i < 3; i ++) {
    setTimeout(() => {
        console.log(i)
    }, 100)
}

// 相当于 (es6转义之后)
for (var i = 0; i < 4; i++) {
    (function(i) {
        setTimeout(() => {
            console.log(i)
        }, 100)
    })(i)
}