//30b 读取4b 8次 读取第一次开始写 只能写1b
const fs = require('fs');

function pipe(socure, targt) {
    const rs = fs.createReadStream(socure, { highWaterMark: 4 });
    const ws = fs.createWriteStream(targt, { highWaterMark: 1 });
    // 开启可读流
    rs.on('data', function (chunk) {
        // console.log(chunk, 'chunk')
        // console.log(ws.write(chunk), '???')
        if (ws.write(chunk) === false) {
            // 可写流 不能在继续写入了
            rs.pause(); // 暂停读取
        }
    });
    ws.on('drain', function () {
        console.log('xxx')
        rs.resume(); // 当前读入的文件中，调用继续读取
    });
    rs.on('end', function () { // 读取完毕，强制将未写完的内容写入到文件中
        ws.end(); //
    });
}

pipe('./1.txt', './2.txt');
