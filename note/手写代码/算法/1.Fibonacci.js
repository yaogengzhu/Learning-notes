/**
 * 斐波那契数列
 * 1 1 2 3 5 8 13 21 34 55 89 144
 * n = 1 时，f(n) = 1, n = 2 时，f(n) = 1, n > 2 时，f(n) = f(n-1) + f(n-2)
 * @param {*} n 
 * @returns 
 */
function fibonacci(n) {
    if (n <= 2) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}
