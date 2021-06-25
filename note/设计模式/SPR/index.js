/**
 *  1. 代理模式
 */
// myImage 负责往页面中添加 img 标签
const myImage = (function() {
    const imgNode = document.createElement('img');
    document.body.appendChild(imgNode);

    return {
        setStr: (src) => {
            imgNode.src = src
        }
    }
})()

// proxyImage 负责预加载图片，并在预加载完成之后把请求交给本体 myImage:
const proxyImage = (function() {
    const img = new Image()
    img.onload = function() {
        myImage.setStr(this.src)
    }

    return {
        setStr: function(src) {
            myImage.setStr('')
            img.src = src
        }
    }
})();

proxyImage.setSrc( 'http://imgcache.qq.com/music/photo/000GGDys0yA0Nk.jpg' );