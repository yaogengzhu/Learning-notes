# 上传漏洞

## 基本介绍
文件上传漏洞就是利用服务器端嗲买对上传路径变量过滤不严格可执行的文件上传到一个服务器中，在通过URL取访问可执行的恶意代码。


## 危害
非法用户可以利用上传的恶意脚本控制整个网站，甚至控制服务器，这个恶意脚本文件，又被称为webShell, 也可以将webShell脚本称为一种网页后门，webshell 脚本非常强大的功能，比如查看服务器目录、服务器中的文件、执行系统命令等。

## 产生的原因
- 服务器配置不当
- 开源编辑器上传漏洞
- 本地文件上传限制被绕过
- 过滤不严格被绕过
- 文件解析漏洞导致文件执行
- 文件路径被截断

## 如何防御
- 文件扩展名服务器端白名单校验
- 判断文件的头部信息，防止上传非法文件 content-type, 以及文件的请求头信息
- 文件内容服务器校验
- 上传的文件重命名
- 限制相关目录的执行权限，防范webShell攻击

前端：
主要是分析javascript 对上传的文件的后缀名进行校验完整性。

后端：
- 分析黑名单扩展名拦截
- http header content-type 验证
- 文件头验证

参考
[上传漏洞](https://wiki.wgpsec.org/knowledge/ctf/uploadfile.html)
[实战 | 文件上传漏洞之最全代码检测绕过总结](https://cloud.tencent.com/developer/article/1944149)



svg 图片攻击

```js
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
   <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
   <script>alert(1)</script>
</svg>
```