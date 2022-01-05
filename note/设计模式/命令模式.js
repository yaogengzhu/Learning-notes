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