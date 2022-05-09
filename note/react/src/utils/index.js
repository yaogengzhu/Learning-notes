export default class Singer {
    constructor({name, age}) {
        this.name = name
        this.age = age
    }
}
function jsonp(url, opts) {
    // 实现Promise化
    return new Promise((resolve, reject) => {
      //设置默认参数
      const { 
        param = 'callback',
        name = 'cb', // 依据后端回调
        timeout = 60000,
        data = {}
      } = opts;
      let timer;
      //清除script标签以及注册的全局函数以及超时定时器
      function cleanup() { // 清除函数
        if (script.parentNode) {
          script.parentNode.removeChild(script);
          window[name] = null;
          if (timer) {
            clearTimeout(timer);
          }
        }
      }
      if (timeout) { // 超时
        timer = setTimeout(() => {
          cleanup();
          reject('timeout');
        }, timeout);
      }
      // 注册全局函数，等待执行中...
      window[name] = res => {
        // 只要这个函数一执行，就表示请求成功，可以使用清除函数了
        if (window[name]) {
          cleanup();
        }
        // 将请求到的数据扔给then
        resolve(res);
      }
      // 以下将data对象格式的参数拼接到url的后面
      let str = '';
      for (const key in data) {
        const value = data[key] !== undefined ? data[key] : '';
        str += `&${key}=${encodeURIComponent(value)}`;
      }
      url = url + (url.indexOf('?') > 0 ? '' : '?') + str.substr(1);
      // 最后加上与服务端协商的jsonp请求字段
      url = `${url}&${param}=${name}`;
      const script = document.createElement('script');
      script.src = url;
      // 以下这条执行且成功后，全局等待函数就会被执行
      document.head.appendChild(script);
    })
}