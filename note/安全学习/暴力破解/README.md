# 暴力破解账号密码

对于密码强度不高的项目，且没有验证码的项目，可采用暴力破解的方式去攻击获取到密码

## 步骤
- 第一步使用burp-suite 抓包工具抓到相应的接口，并使用火狐浏览器配置好相关代理
<img src="./images/1.png" /> 

- 第二步 选中抓到的请求 右键 send to intruder，并且做好配置
<img src="./images/2.png" />

- 配置的话，可以考虑使用事先准备好的 user.txt password.txt 
<img src="./images/3.png" />

- 如何看到是否成功匹配
<img src="./images/4.png" />
<img src="./images/5.png" />


### 安全措施
- 设计的安全验证码
- 对输入多次错误的用户，进行时间锁定
- 必要的情况使用双因素认证


### token 对防爆破的意义

一般的做法
- 将token 以type="hidden" 的形式输出在表单中，在提交的认证的时候一起提交，并在后台对其校验。

这种方式 token会被暴露在前端的源码中，容易被获取，因此也失去了防暴力破解的意义。


**参考**
- https://github.com/shadowabi/S-BlastingDictionary
- https://github.com/zhuifengshaonianhanlu/pikachu