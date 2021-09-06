function find(list, num) {
    let res = -1; // 没有找到则返回为-1
    if (list.length === 0) {
        //数组为空， 返回-1
        return res;
    }
    let right = list.length - 1; // 右侧的长度值
    let mid; // 中间值
    let left = 0;
    while (left <= right) {
        if (list[0] === num) {
            //list[0]就是要找的数
            return (res = 0);
        } else {
            while (left <= right) {
                mid = Math.floor(left + (right - left) / 2); // 取中间值
                if (list[mid] === num && list[mid] > list[mid - 1]) {
                    res = mid;
                    break; //一定要写，否则死循环
                } else if (list[mid] < num) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            return res;
        }
    }
}

const result = find([1, 2, 3, 4, 6, 9, 10], 10);
console.log(result);
