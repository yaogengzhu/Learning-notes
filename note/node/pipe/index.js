const fs = require('fs');
// 可写流
const ws = fs.createWriteStream('./1.txt', { highWaterMark: 1 });
// 可写流有两个方法
// write end
// console.log(ws)
// 用可写流写数据必须是字符串类型，或者是buffer类型
const flag = ws.write(1 + '', function() {
    console.log('i')
});
console.log(flag);
ws.write(1 + '');
const flag1 = ws.write(1 + '', function() {
    console.log('i')
});
console.log(flag1);
const flag3 = ws.write(1 + '', function() {
    console.log('i')
});
console.log(flag3);
ws.on('drain', function() { // 当读入的文件 全部写入后，就恢复读取
    console.log('ok 测试')
})
ws.end(); // end 调用后，会把所有的write的内容以最快的速度写入
