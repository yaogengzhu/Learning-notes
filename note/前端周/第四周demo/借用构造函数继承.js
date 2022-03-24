function Parent() {
    this.names = ['zyg', 'ygz']
}

function Child() {
    Parent.call(this)
}

const child1 = new Child()
child1.names.push('cs')
console.log(child1.names)

const child2 = new Child()

console.log(child2.names)