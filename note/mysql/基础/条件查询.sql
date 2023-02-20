# 工资在一万到两万之间
SELECT last_name, salary FROM employees WHERE salary > 10000 AND salary <= 20000

# 部门编号不是在90-110之间， or. 工资高于15000

# AND NOT 使用
SELECT * FROM employees WHERE department_id < 90 OR department_id > 110 OR salary < 15000

# 模糊查询
/**
LIKE
1. 一般和通配符使用
% 任意多个字符(包含0字符)
_ 任意单个字符

BETWEEN AND
1. 包含临界值 
2. 两个临界值位置不能替换


IN
1. 用于判断某个字段值属于列表的某一项
2. 类型必须统一 
3. 不支持通配符


IS NULL NOT NULL
1. = <> 不能判断null值 



*/

# 查询员工名中包含a的员工信息
/**
% 代表通配符
*/
SELECT
	*
FROM
	employees
WHERE
	last_name LIKE '%D%'
	
	
# 第三个字符 为a 第五个为e
SELECT
	*
FROM
	employees
WHERE
	last_name LIKE '___n__l%'

# 第二个字符为下划线的
/**
ESCAPE 说明为转义
*/
SELECT
	last_name
FROM
	employees
WHERE
	last_name LIKE '_$_%' ESCAPE '$'

# BETWEEN AND  在什么之间
SELECT
	*
FROM
	employees
WHERE
	employee_id BETWEEN 40 AND 120


# IN关键字 
# 查询员工的工种编号： IT_ 
SELECT
	*
FROM
	employees
WHERE job_id IN('IT_PROT', 'AD_VP')


# is null

# 没有奖金的员工和奖金率

SELECT
	last_name
FROM
	employees
WHERE
	commission_pct is NULL

# 查询有奖金的 
SELECT
	last_name
FROM
	employees
WHERE
	commission_pct is NOT NULL

# 查询也是分先后顺序的， and 的优先级高于 or 可使用（） 来改变优先级

# 范围检查
select * from image WHERE img_size BETWEEN 800 and 1000

# 检查某个数据是空值
select * from image where img_key is null;

# 过滤操作符 and OR 
select count(*) as 数量 from image WHERE id > 100 or img_size  > 1000;

# in 操作符号指定圆括号里所有的数据范围() 数据(,,,,) 逗号分隔
select * from image where img_size in(914, 915, 1000)

select * from image where category_id in(11, 23, 32, 42) limit 32, 10;
select count(*) from image where category_id in(11, 23, 32, 42);

# 在or 和 in 之间的区别 优先使用in，in的效率更高，因为in是一个集合，而or是一个一个的比较

# not 操作符号，就是否定not 后面所有跟的条件 
select count(*) from image where category_id not in(11, 23, 32, 42);













