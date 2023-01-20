# DUAL 哑表 

# 当前日期
SELECT CURRENT_DATE() FROM DUAL;
-- CURRENT_TIME 当前时间
SELECT CURRENT_TIME() FROM DUAL;
--  CURRENT_TIMESTAMP 当前时间戳
SELECT CURRENT_TIMESTAMP FROM DUAL;
-- 创建测试表
CREATE  TABLE ems(
	id int,
	content VARCHAR(30),
	send_time DATETIME
);
show tables;
desc ems;

ALTER TABLE ems MODIFY id int PRIMARY KEY auto_increment;
-- 添加一条记录
INSERT INTO ems (content,  send_time)  VALUES('测试2', CURRENT_TIMESTAMP());
SELECT * FROM ems;
-- DATE(datetime) 返回datetime的日期部分
-- DATE_ADD(date,INTERVAL expr unit) 在date中加上一个日期或者时间
-- DATE_SUB(date,INTERVAL expr unit) 在date中减去一个时间 
-- DATEDIFF(expr1,expr2) 两个日期差（结果是天）
SELECT DATEDIFF('2011-11-11', '1990-1-1') FROM DUAL; 
SELECT DATEDIFF('2074-06-08', NOW()) FROM DUAL; 
SELECT NOW();
-- 给ems 表新增一个字段 
ALTER TABLE ems add date_time DATETIME;
SELECT NOW() FROM DUAL;
SELECT CURRENT_TIMESTAMP() FROM DUAL;
-- 查询时间
SELECT content, DATE(send_time) as time FROM ems;
-- 条件 查询在10分钟内发布的新闻
SELECT * FROM ems WHERE DATE_ADD(send_time, INTERVAL 30 MINUTE) >= NOW();

-- 有YEAR MONTH DAY HOUR MINUTE SECOND 相关函数
SELECT MONTH(NOW()) FROM DUAL;
-- 返回1970年到现在的秒数
SELECT UNIX_TIMESTAMP() FROM DUAL;
-- from_unixtime是MySQL里的时间函数date为需要处理的参数（该参数是Unix 时间戳），可以是字段名，也可以直接是Unix 时间戳字符串后面的 '%Y%m%d' 主要是将返回值格式化。
SELECT UNIX_TIMESTAMP() / (24 * 3600 * 365) as 结果 FROM DUAL;
-- 若时间用int 存储的话，可以使用from_unixtime函数来转换
SELECT FROM_UNIXTIME(unix_timestamp(),'%Y-%m-%d') FROM DUAL;

