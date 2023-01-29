SELECT  count(*) as 总数, AVG(age), staff from emp group by staff;
SELECT COUNT(age), age  FROM  emp group by age;
SELECT COUNT(*) as 数量, staff  FROM emp WHERE staff = '前端';

# 显示年龄的最大差额
SELECT Max(age) - MIN(age) from emp;


-- GROUP BY *** HAVING *** ORDER BY
select dept, avg(salary) 
    from emp 
    group by dept
    having avg(salary) > 3000 # 条件
    order by avg(salary) desc 
    limit 0, 2;