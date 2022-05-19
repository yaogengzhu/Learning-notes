function getNunmber(n) {
  if (n === 0 || n === 1) {
    return 1
  }
  return getNunmber(n - 1) + getNunmber(n - 2)
}

const s = getNunmber(6)
console.log(s)

function getNunmber1(n) {
  if (n === 0 || n === 1) {
    return 1
  }
  // while()
  let fn1 = 1
  let fn2 = 1
  while (n > 1) {
    n--
    let temp = fn1
    fn1 = fn2
    fn2 = temp + fn1
  }
  return fn2
}

const s1 = getNunmber1(6)
console.log(s1)

function sum(n) {
  if (n === 1) {
    return 1
  }
  return sum(n - 1) + n
}

console.log(sum(100))

const arr = [1, 2, 3, 4, 2, 8, 1, 5]

const l = arr.reduce((acc, cur) => {
  if (!acc.includes(cur)) {
    acc.push(cur)
  }
  return acc
}, [])

const obj = arr.reduce((acc, cur) => {
  if (!acc[cur]) {
    acc[cur] = 0
  }
  acc[cur] += 1
  return acc
}, {})

const c = Object.entries(obj).map(([item, value], val) => {
  return {
    [item]: value + '次',
  }
})

console.log(c)

var data = [
  { id: 1, name: '办公管理', pid: 0 },
  { id: 2, name: '请假申请', pid: 1 },
  { id: 3, name: '出差申请', pid: 1 },
  { id: 4, name: '请假记录', pid: 2 },
  { id: 5, name: '系统设置', pid: 0 },
  { id: 6, name: '权限管理', pid: 5 },
  { id: 7, name: '用户角色', pid: 6 },
  { id: 8, name: '菜单设置', pid: 6 },
]

function handleTree(list) {
  const parentList = list.filter((item) => item.pid === 0)
  const children = list.filter((item) => item.pid !== 0)
  // 这里能不能递归下？
  parentList.forEach((item) => {
    children.forEach((child) => {
      if (item.id === child.pid) {
        if (!item.children) {
          item.children = []
        }
        item.children.push({
          ...child,
        })
      }
    })
  })

  return parentList
}

// console.log(handleTree(data));

var data1 = [
  {
    id: 1,
    name: '办公管理',
    pid: 0,
    children: [
      {
        id: 2,
        name: '请假申请',
        pid: 1,
        hildren: [{ id: 4, name: '请假记录', pid: 2 }],
      },
      { id: 3, name: '出差申请', pid: 1 },
    ],
  },
  {
    id: 5,
    name: '系统设置',
    pid: 0,
    children: [
      {
        id: 6,
        name: '权限管理',
        pid: 5,
        hildren: [
          { id: 7, name: '用户角色', pid: 6 },
          { id: 8, name: '菜单设置', pid: 6 },
        ],
      },
    ],
  },
]

function toTree(data) {
  // 删除 所有 children,以防止多次调用
  data.forEach(function (item) {
    delete item.children
  })

  // 将数据存储为 以 id 为 KEY 的 map 索引数据列
  var map = {}
  data.forEach(function (item) {
    map[item.id] = item
  })
  //        console.log(map);
  var val = []
  data.forEach(function (item) {
    // 以当前遍历项，的pid,去map对象中找到索引的id
    var parent = map[item.pid]
    console.log(parent, '????')
    // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
    if (parent) {
      ;(parent.children || (parent.children = [])).push(item)
    } else {
      //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
      val.push(item)
    }
  })
  return val
}
toTree(data)
// console.log();

var data = [
  { id: 1, name: '办公管理', pid: 0 },
  { id: 2, name: '请假申请', pid: 1 },
  { id: 3, name: '出差申请', pid: 1 },
  { id: 4, name: '请假记录', pid: 2 },
  { id: 5, name: '系统设置', pid: 0 },
  { id: 6, name: '权限管理', pid: 5 },
  { id: 7, name: '用户角色', pid: 6 },
  { id: 8, name: '菜单设置', pid: 6 },
]

// function toTree(data, pid) {
//   const newList = data.filter((item) => item.pid === pid)
//   newList.forEach((item) => {
//     const children = toTree(data, item.id)
//     item.children = children
//   })
//   return newList
// }

function toTree(list, id) {
  function tree(list, id) {
    const newList = list.filter((item) => item.pid === id)
    newList.forEach((item) => {
      item.children = tree(list, item.id)
    })
    return newList
  }
  return tree(list, id)
}

console.log(toTree(data, 0))
