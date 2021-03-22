const express = require('express')
const path = require('path')
const app = express() // 监听函数
// 使用静态文件中间件, 目录下public
app.use(express.static(path.resolve('public')))
// 创建一个app服务器对象
const server = require('http').createServer(app)

// 因为socket.io 握手需要http服务器
let io = require('socket.io')(server)

io.on('connection', function (socket) {
    console.log('客户端连接')
    // 通过socket.on() message事件来监听客户端传递过来的消息
    socket.on('message', function (message) {
        console.log(message)
        // 向所有的客户端进行广播
        io.emit('message', message)
        socket.send('我是服务端:' + message)
    })
})

server.listen(8080, function () {
    console.log('server is runing localhost:8080')
})