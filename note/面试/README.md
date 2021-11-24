# 面试

[其他人笔记](https://blog.csdn.net/mus123/article/details/106499506)

## css部分

### 垂直居中的多种方案
- 定位方式三种
- display:flex
- javascript
- display: table-cell 

要求父级元素固定宽高
```css
.father {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
.box {
    display: inline-block;
}
```

### css3盒模型
content-box--->
```css
box-sizing: border-box;
```
- 标准盒模型 width = content;
- ie盒模型 width = content + padding + border (目前都在用怪异和模型, 用css3 box-sizing 解决)
- flex弹性伸缩模型
- 多列布局模型


### 掌握几大布局方案
- 圣杯布局
- 双飞翼布局
- 左右固定,中间自适应


## JS

###