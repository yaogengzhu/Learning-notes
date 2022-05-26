// 简化版
function toTree(list) {
  function transformToList(list, id) {
    const newList = list.filter((item) => item.pid === id)
    newList.forEach((val) => {
      val.children = transformToList(list, val.id)
    })
    return newList
  }
  return transformToList(list, 0)
}
