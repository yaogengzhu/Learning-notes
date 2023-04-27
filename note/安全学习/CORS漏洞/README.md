# CORS （跨域资源共享） cross origin resource sharing

Cors 是 h5 提供的一种机制，通过浏览器的请求头信息 来告诉浏览器，哪些不同来源的服务器是有权限访问本站资源的。

浏览器将 Cros 请求分为两类

- 简单请求
- 非简单请求

只要同时满足以下两种条件 即是非简单请求

- 请求方法是（post,get, head) 之一
- http 的头信息不超出（Accpet,Accpet-language, Content-language, Lat-Event-ID, Content-Type) 这几种字段。

* 需要弄清楚去简单请求 和 非简单请求的过程

[文章讲解](https://mp.weixin.qq.com/s/nfdIVUvUrxik8CMI6zJJqw)

CORS 跨域漏洞

- 核心原因是：服务端配置的规则不当所导致
