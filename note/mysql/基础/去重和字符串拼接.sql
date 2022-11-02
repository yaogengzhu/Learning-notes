# 去重
SELECT DISTINCT address FROM crm_customer 

# + 作用

-- 拼接字段

SELECT DISTINCT id + creator_id as result FROM crm_customer

-- 操作数，两个为数字型，则做加法运算
-- 如果一方为字符型，试图转换成数字型，则进行加法元算
-- 如果转换失败，则转换成0
-- 如果一个为NULL 则结果为NULL
SELECT 100 + NULL

# 拼接字符串 CONCAT(str1,str2,...)

SELECT DISTINCT CONCAT(id, address) as result FROM crm_customer
