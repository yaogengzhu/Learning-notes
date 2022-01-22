# 排序查询 

/*
SELECT
	*
FROM
	employees

WHERE [条件]

ORDER BY [字段] ASC | DESC

asc代表升序 
desc 降序 

不写 默认 生序 

**/

SELECT
	*
FROM	
	employees

ORDER BY salary ASC


# 员工入职的先后顺序 

SELECT
	*
FROM
	employees
WHERE department_id >= 90
ORDER BY hiredate ASC



SELECT
	*,salary * 12 * (1 + IFNULL(commission_pct, 0)) 年薪
FROM
	employees
ORDER BY salary * 12 * (1 + IFNULL(commission_pct, 0)) DESC


# 按姓名的长度显示长度 
SELECT
	LENGTH(last_name) 字节长度, last_name, salary 工资
FROM
	employees
ORDER BY LENGTH(last_name),salary DESC

