"use strict";

var Parent = function () {
  function Parent(name) {
    this.name = name; // 实例的私有属性
  } // 属于实例的公有属性， 也相当于原型上的属性


  var _proto = Parent.prototype

  _proto.getName = function getName() {
    console.log(this.name)
  }

  return Parent
}()