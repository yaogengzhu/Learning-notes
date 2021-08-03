const obj = {
    name: 'zyg',
    say: function() {
        console.log(this.name, '中')
    }
}

function hello() {
    this.say()
}

Function.prototype.myApply = function(content) {
    content.fn = this // 将函数挂载到传入的对象中
    const arg = [...arguments].splice(1);//2.取参数
    if (!Array.isArray(arg)) {
        throw new Error('apply的第二个参数必须是数组') 
    }
    content.fn(arg) // 执行对象的方法
    delete content.fn // 移除对象的方法
}

hello.myApply(obj, ['hello', 'zs'])