class PagePlugin {
    options = {}
    constructor(options) {
        this.options = Object.assign({}, {
            imgZIndex: 10000,
            autoShow: false,
            autoShowDelayTime: 5000
        }, options)
        console.log('senguo consulting plugin install')
        this.initLib().then(this.initPlugin.bind(this)).catch(e => {
            console.error(e)
            throw '咨询插件初始化失败'
        })
    }

    // 创建script
    _createScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script')
            script.src = src
            script.onload = resolve
            script.onerror = reject
            document.body.appendChild(script)
        })
    }

    // 创建css链接
    _createStyleLink(src) {
        return new Promise((resolve, reject) => {
            const link = document.createElement('link')
            link.rel = "stylesheet"
            link.href = src

            link.onload = resolve
            link.onerror = reject
            document.head.appendChild(link)
        })
    }

    // 加载资源
    initLib() {
        const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
        let list = []
        if (!(window.Vue && window.Vue.version)) {
            list.push(this._createScript('https://cdn.staticfile.org/vue/2.6.10/vue.min.js'))
        }

        if (!(window.$ && window.$.fn)) {
            list.push(this._createScript('https://cdn.staticfile.org/jquery/2.2.4/jquery.min.js'))
        }
        if (isMobile) {
            if (!(window.vant && window.vant.version)) {
                list = list.concat([
                    this._createStyleLink("https://cdn.jsdelivr.net/npm/vant@2.10/lib/index.css"),
                    this._createScript('https://cdn.jsdelivr.net/npm/vant@2.10/lib/vant.min.js')
                ])
            }
            
            return Promise.all(list)
        } else {
            list = list.concat([
                this._createStyleLink("https://cdn.staticfile.org/element-ui/2.7.2/theme-chalk/index.css"),
                this._createScript('https://cdn.staticfile.org/element-ui/2.7.2/index.js')
            ])
            
            return Promise.all(list)
        }
    }

    // 挂载资源
    initPlugin() {
        const div = document.createElement('div')
        
        document.body.appendChild(div)

        const Plugin = Vue.extend(App)

        this.instance = new Plugin({
            propsData: this.options
        })
        this.instance.$mount(div)
    }
    // 显示
    show() {
        if (this.instance) {
            this.instance.show()
        }
    }

}

export default PagePlugin