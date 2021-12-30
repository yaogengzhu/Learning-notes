/**
 * se6
 * 模拟交集运算
 */
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

const union = (setA, setB) => {
    const unionAb = new Set();
    setA.forEach((x) => {
        if (setB.has(x)) {
            unionAb.add(x);
        }
    });

    return unionAb;
};

console.log([...union(setA, setB)]);
