/**
 * 代理是为一个对象提供一个替代品或者占位符，以便控制对它的访问
 */

const Flower = function () {}

const xiaoming = {
    sendFlower: function (target) {
        const flower = new Flower()
        target.receiveFlower(flower)
    },
}

const A = {
    receiveFlower: function (flower) {
        console.log('收到花了')
    },
}

const B = {
    receiveFlower: function (flower) {
        A.receiveFlower(flower)
    },
}

xiaoming.sendFlower(B)