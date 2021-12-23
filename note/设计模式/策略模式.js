/**
 * 策略模式：定义一系列的算法，把她们一个个封装起来
 *
 * 模式目的：就是将算法的使用 和 算法的实现分离开来
 *
 *
 *  策略类 + 环境类  (两个部分组成)
 *
 *  策略类： 封装了具体的算法，并负责具体的计算过程
 *  环境类： 接收客户的请求，随后把请求委托给某一个策略类
 *
 *  环境类中--- 维持着某个策略对象的引用
 */

// 策略类
var performaceS = function () {}
performaceS.prototype.calculate = function (salary) {
    return salary * 4
}

// 定义奖金类   ---环境类
var Bonus = function () {
    this.salary = null // 原始工资
    this.strategy = null // 绩效等级对应的策略对象
}

Bonus.prototype.setSalary = function (salary) {
    this.salary = salary // 设置员工的原始工资
}

Bonus.prototype.setStrategy = function (strategy) {
    this.strategy = strategy // 设置员工绩效等级对应的策略对象
}

Bonus.prototype.getBonus = function () {
    // 取得奖金数额
    if (!this.strategy) {
        throw Error('未设置strateg 属性')
    }

    return this.strategy.calculate(this.salary) // 把计算的奖金委托给对应的策略对象
}

var bonus = new Bonus()
bonus.setSalary(1000)
bonus.setStrategy(new performaceS())
console.log(bonus.getBonus())

/**
 *  javaScript的实现方式
 */

const strategyObj = {
    S: function (salary) {
        return salary * 4
    },
    A: function (salary) {
        return salary * 3
    },
}

function getBonusByStrategy(type, salary) {
    return strategyObj[type](salary)
}
console.log(getBonusByStrategy('A', 1000))

/**
 * 表单验证策略模式
 *
 */

// 策略对象
const strategyForm = {
    isNotEmpty: function (value, errorMsg) {
        if (value === '') {
            return errorMsg
        }
    },
}

// 环境类：

const validForm = function () {
    this.cache = [] // 保存有效规则
}

validForm.prototype.add = function (dom, rule, erroMsg) {
    const str = rule.split(':')
    this.cache.push(function () {
        let strategy = str.shift() // 取出第一个策略模式
        str.unshift(dom.value) // 把input的值驾到参数列表中
        str.push(erroMsg) // 把错误信息添加到参数列表中
        return strategyForm[strategy].apply(dom, str)
    })
}

validForm.prototype.start = function () {
    for (let i = 0; valildFunc; valildFunc = this.cache[i++]) {
        const msg = valildFunc()
        if (msg) {
            return msg
        }
    }
}

var validataFunc = function () {
    var validator = new validForm() // 创建一个 validForm 对象
    validator.add(registerForm.userName, 'isNonEmpty', '用户名不能为空')
    validator.add(registerForm.password, 'minLength:6', '密码长度不能少于 6 位')
    validator.add(registerForm.phoneNumber, 'isMobile', '手机号码格式不正确')
    var errorMsg = validator.start() // 获得校验结果
    return errorMsg // 返回校验结果
}
var registerForm = document.getElementById('registerForm')
registerForm.onsubmit = function () {
    var errorMsg = validataFunc() // 如果 errorMsg 有确切的返回值，说明未通过校验
    if (errorMsg) {
        alert(errorMsg)
        return false // 阻止表单提交
    }
}
