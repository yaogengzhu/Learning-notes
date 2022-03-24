function Parent() {
    this.names = ['zy', 'yg']
}
Parent.prototype.getName = function () {
    console.log(this.names)
}

function Child() {}
Child.prototype = new Parent()
const child1 = new Child()
child1.names.push('2')
const child2 = new Child()
console.log(child1.getName())
console.log(child2.getName())

/**
 * 引用类型被所有实例共享
 */


