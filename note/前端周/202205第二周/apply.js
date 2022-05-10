const obj1 = {
  name: 'zyg',
  getName: function () {
    console.log(this.name)
  },
}

const obj2 = {
  name: 'zs',
  getName: function() {
    console.log(this.name)
  }
}


obj1.getName()

const fn = obj1.getName
const fn1 = fn.bind(obj1)
fn()
fn.apply(obj1)
fn1()
