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

# lpad  用指定的字符实现左填充指定长度 (左右填充)
# rpad  用指定的字符实现右填充指定长度 (左右填充)
SELECT LPAD('测试',10,'***') 

# repalce 


SELECT REPLACE('张无忌爱上肘子肉', '肘子肉','赵敏')


# 数字函数

# CELL(x) 向上取整
# FLOOD(X) 向下取整
# MOD(x,y)	返回x/y的模
# RAND()	返回0-1内的随机数
# ROUND(x, y) 求参数x的四舍五入的值, 保留y位小数


# 日期函数

# CURDATE() 返回当前日期
# CURTIME() 返回当前时间
# NOW() 返回当前日期+事件
# YEAR(date)  返回date指定的年份
# MONTH(date)	返回date的月份
# DAY(date)		返回date的日期
# DATE_ADD(date, interveal_expr type) 返回上一个日期/时间值加上一个时间间隔expr后的时间值
# DATEDIFF(date1, data2) 返回起始时间date1 和 结束时间date2之间的天数






















