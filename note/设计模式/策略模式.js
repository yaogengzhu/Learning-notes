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