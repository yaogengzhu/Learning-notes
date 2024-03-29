# 越权漏洞

## 漏洞描述
什么是越权漏洞？

越权访问是web应用程序中一种常见的漏洞，由于其存在范围广，危害大，被OWASP列外十大安全隐患第二名。

## 漏洞分类

越权漏洞主要分为：水平越权、垂直越权

水平越权：指的是攻击者尝试访问和他拥有相同权限的用户资源，例如，用户A和用户B属于同一个角色，拥有相同的权限等级，他们能获得自己的私有数据（数据A和数据B），但如果系统只验证了能访问数据的角色，而没有对数据做细分或则校验，导致用户A能访问用户B的数据，那么用户A访问用户B的这种行为叫做越权。

垂直越权：由于后台应用没有做权限控制，或仅仅在菜单、按钮上做了权限控制，导致恶意用户只要猜测其他页面的URL或则敏感的参数，就可以访问或控制其他角色拥有的数据或则页面，达到权限提升的目的。


## 漏洞产生的原因

一般情况： 登录-> 提交请求 -> 验证权限 -> 数据库查询。。 如果权限验证不足，便会导致越权，常见的程序都会认为通过登录后即可验证用户的身份，从而不会做下一步的验证，导致越权。

产生的途径
1. 通过隐藏的URL
   实现控制访问有些程序的管理员的管理页面只有管理员才显示，普通用户看不到，利用URL实现访问控制，但URL泄漏或被恶意攻击者猜到后，这会导致越权攻击。

2. 直接引用对象
    直接通过修改一下参数就可以产生水平越权，例如查看某个用户信息页面URL后加上自己的id便可以查看，当修改为其他人的id时会返回他人的信息，变产生了水平越权。

3. 多阶段功能
   多阶段功能是一个功能有多个阶段的实现。例如密码修改，第一步验证的是用户身份信息，号码验证类的，当验证成功后，跳到第二步，输入新的密码，很多程序在这一步不再校验用户身份，导致恶意攻击者抓包直接修改参数，导致可修改任意用户密码。

4. 静态文件
   很多网站的下载功能，一些被下载的静态文件，例如pdf，word,xls 等。可能只有付费用户或会员可下载，但当这些文件的URL地址被泄漏后，导致任何人可下载，如果知道URL命名规则，则会导致便利的收费文档被进行批量下载

5. 平台配置错误
   一些程序会通过控件来限制用户的访问，例如后台地址，普通用户不属于管理员组，则不能访问。当配置或者配置控件错误时，就会出现越权访问。


## 防范措施
- 前后端同时对用户信息输入进行校验，双重验证机制
- 执行关键操作前必须验证用户身份，验证用户是否有操作的权限
- 特别敏感的操作可以让用户再次输入密码或其他的验证信息
- 可以从用户的加密认证cookie中获取当前的用户id, 防止攻击者伪造用户id， 或在session、cookie加入不可预测、不可猜解的user信息
- 直接饮用的加密资源ID，防止攻击者枚举id, 敏感资源特殊化处理
- 永远不要相信来自用户的输入，对于可控参数进行严格的检查和过滤

参考： 
- [越权漏洞原理及防御方案](https://zhuanlan.zhihu.com/p/130919069)