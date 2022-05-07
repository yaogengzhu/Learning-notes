const google = {
  show: function () {
    console.log('渲染goggle地图')
  },
}

const baidu = {
  show: function () {
    console.log('渲染baidu地图')
  },
}

const renderMap = function (map) {
  if (map.show instanceof Function) {
    map.show()
  }
}

renderMap(google)
renderMap(baidu)

/**
 * 异常，不是show
 */
const newBaidu = {
  display: function () {
    console.log('渲染新百度地图')
  },
}

const newBaiduAdapter = {
  // 重新一个写一个方法来适配现有的结构
  show: function () {
    return newBaidu.display()
  },
}

renderMap(newBaiduAdapter)
