
class Progrma {
    name = ''
    age = ''
    sex = ''
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.sex = options.sex
    }

    toString() {
        return this
    }
}

class Builer {
    name = ''
    age = ''
    sex = ''

    build() {
        if (this.name && this.age && this.sex) {
            return new Progrma(this)
        }
        throw new Error('缺少相关信息')
    }
    setName(name) {
        this.name = name
        return this
    }
    setAge(age) {
        this.age = age
        return this
    }
    setSex(sex){
        this.sex = sex
        return this
    }
}

const p = new Builer()
const result = p.setName('ok')
    .setAge(22)
    .setSex('南')
    .build()
    .toString()


// const result = p.build().toString()
console.log(result, '?')