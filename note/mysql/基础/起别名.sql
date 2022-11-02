#. 起别名
-- 1. 便于理解
-- 2. 重名字段，便于区分

# 方式1
SELECT id AS '结果' FROM crm_customer WHERE id = 3

# 方式2
SELECT id '结果' FROM crm_customer WHERE id = 4

# 方式3
SELECT city_name AS 'Out Put' FROM crm_customer WHERE id = 5