function Parent(name) {
    this.name = name
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child(name) {
    Parent.call(this, name)
    this.name = name
}

Child.prototype = new Parent()
Child.prototype.contructor = Child
