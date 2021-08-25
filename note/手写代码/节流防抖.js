function throttle() {
    let timer = null
    return function () {
        if (timer) return
        const args = Array.prototype.slice.call(arguments)
        timer = setinterval(() => {
            fn.call(this, ...args)
            timer = null
        }, delay)
    }
}

function debounce(fn, delay) {
    let timer = null
    return function () {
        if (timer) {
            clearInterval(timer)
        }
        const args = Array.prototype.slice.call(arguments)
        timer = setinterval(() => {
            fn.call(this, ...args)
        }, delay)
    }
}