/**
 * 独立必须继承的类
 */

class Person {
  constructor() {
    if (new.target === Person) {
      throw Error("该class不能被实例化");
    }
  }

  getname() {
    console.log("zyg");
  }
}

// new Person()

class Child extends Person {
  constructor() {
    super();
  }
}

const child = new Child();

child.getname();
