# 常见函数 
/**
调用 SELECT 函数名（实参列表）【FROM】表 


分类
1. 单行函数
	如 concat 、length 、 ifnull 等 
2. 分组函数 

*/

# 字符函数 

# LENGTH 获取参数的字节 
SELECT LENGTH('测试')
SHOW VARIABLES LIKE '%CHAR%'

# CONCAT(str1,str2,...) 字符串拼接 
SELECT CONCAT(last_name, first_name) FROM employees

# UPPER(str) LOWER(str)  变化大小写 
SELECT CONCAT(UPPER(first_name),LOWER(last_name)) 姓名 FROM employees

# SUBSTR(str FROM pos FOR len) 截取索引开始，后面所有的元素 (2个参数） 截图索引开始，后面指定的长度（3位参数）
# SUBSTRING(str FROM pos FOR len)

SELECT SUBSTR('测试22', '2', 1) 截取

# 姓名首字符大写 
SELECT CONCAT(SUBSTR(last_name,1,1), '_', SUBSTR(last_name, 2)) FROM employees

# instr 返回子窜第一次出现的索引，没有的话，返回0
SELECT INSTR('测试', '试') AS output

# trim

SELECT TRIM( 'a' FROM '.    aaa   ')

# lpad  用指定的字符实现左填充指定长度
# rpad  用指定的字符实现右填充指定长度
SELECT LPAD('测试',10,'***') 

# repalce 


SELECT REPLACE('张无忌爱上肘子肉', '肘子肉','赵敏')























