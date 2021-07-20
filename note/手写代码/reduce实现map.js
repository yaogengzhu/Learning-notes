Array.prototype.myReduce = function(callback, thisArg) {
    return this.reduce(function(acc, cur, idx, src) {
        acc[idx] = callback.call(thisArg, cur, idx, src)
        console.log(acc[idx])
        return acc
    }, [])
} 
const arr = [1, 2, 3, 4]

arr.myReduce((item) => {
    return item
})