/***
 *  命令模式是最简单和优雅的模式之一，命令模式中的命令指的是一个执行某些特定事情的指令。
 *  命令模式也是最常见的应用场景是：有时候需要向某些对象发送请求，但是并不知道请求的接收者是谁，也不知道请求的操作是是什么。
 */

const setCommad = function (button, command) {
    button.click = function () {
        command.execute()
    }
}

const MenuBar = {
    refresh: function () {
        console.log('刷新')
    },
}

const SubMenu = {
    add: function () {
        console.log('新增子菜单')
    },

    del: function () {
        console.log('删除子菜单')
    },
}

// 封装命令类
const RefreshMenuCommad = function (recevicer) {
    this.recevicer = recevicer
}

RefreshMenuCommad.prototype.execute = function () {
    this.recevicer.refresh()
}

const AddSubMenuCommand = function (recevicer) {
    this.recevicer = recevicer
}

AddSubMenuCommand.prototype.execute = function () {
    this.recevicer.add()
}

const DelSubMenuCommand = function (recevicer) {
    this.recevicer = recevicer
}

DelSubMenuCommand.prototype.execute = function () {
    // console.log('删除子菜单')
    this.recevicer.del()
}

// 将命令接受者传入到command对象中，并且将command对象安装到button 上

const refreshMenuBarCommand = new RefreshMenuCommad(MenuBar)
const addSubMenuCommand = new AddSubMenuCommand(SubMenu)
const delSubMenuCommand = new DelSubMenuCommand(SubMenu)

setCommad(button1, refreshMenuBarCommand)
setCommad(button2, addSubMenuCommand)
setCommad(button3, delSubMenuCommand)

// javascript

const bindClick = function (button, fn) {
    button.click = fn
}

bindClick(button1, MenuBar.refresh)

// 游戏
const Ryu = {
    attack: function () {
        console.log('攻击')
    },

    defense: function () {
        console.log('防御')
    },

    jump: function () {
        console.log('跳跃')
    },

    crouch: function () {
        console.log('蹲下')
    },
}

// 创建命令
const makeCommand = function (recevicer, state) {
    return function () {
        recevicer[state]()
    }
}

const commands = {
    119: 'jump',
    115: 'crouch',
    97: ' defense',
    100: 'attach',
}

const commandStack = [] // 保存命令栈

document.onKeypress = function (ev) {
    const keyCode = ev.keyCode,
        command = makeCommand(Ryu, commands[keyCode])

    if (command) {
        command()
        commandStack.push(command) // 将刚执行过的命令推到栈里
    }
}

// 点击播放录像
document.getElementById('replay').onclick = function () {
    let command
    while (command === commandStack.shift()) {
        // 从堆栈里一次取出命令并执行
        command()
    }
}

/**
 * 宏命令
 *
 * 宏命令是一组命令的集合，通过执行宏命令，可以支持一次执行一批命令
 */

// 依次创建好各种command

const closeDoorCommand = {
    execute: function () {
        console.log('关门')
    },
}

const openPcCommand = {
    execute: function () {
        console.log('开电脑')
    },
}

const openQQCommand = {
    execute: function () {
        console.log('登QQ')
    },
}

const MaroCommand = function () {
    return {
        commandList: [],
        add: function (command) {
            this.commandList.push(command)
        },
        execute: function () {
            this.commandList.forEach((fn) => fn.execute())
        },
    }
}

const macroCommand = new MaroCommand()

macroCommand.add(closeDoorCommand)
macroCommand.add(openPcCommand)
macroCommand.add(openQQCommand)
macroCommand.execute()
