const fs = require('fs');
const { promisify } = require('util');
const read = promisify(fs.readFile);

// Promise.race([read('x.txt', 'utf-8'), read('y.txt', 'utf-8')]).then(
//     () => {},
//     (err) => {
//         console.log(err);
//     }
// );

// fs.stat('/', function (err, stat) {
//     console.log(stat);
// });

/**
 *  插入排序, 循环新建文件
 */
function makep(url, cb) {
    const urlArr = url.split('/');
    let index = 0;
    function make(p) {
        // 在创建之前，判断路径是否存在
        if (urlArr.length < index) return;
        fs.stat(p, function (err, stat) {
            if (err) {
                fs.mkdir(p, function (err) {
                    make(urlArr.slice(0, ++index + 1).join('/'));
                });
            } else {
                make(urlArr.slice(0, ++index + 1).join('/'));
            }
        });
        if (urlArr.length === index) {
            cb();
        }
    }
    make(urlArr[index]);
}

makep('src/app/demo', function () {
    console.log('文件新建成功');
});
