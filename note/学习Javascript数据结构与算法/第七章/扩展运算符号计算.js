/**
 * se6
 * 扩展运算符
 */
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

// 并集
console.log(new Set([...setA, ...setB]));