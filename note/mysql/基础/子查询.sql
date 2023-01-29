# 子查询
# 子查询是指嵌套在其他sql语句中的select语句,也叫嵌套查询

# 单行子查询
-- 显示张三 同一部门所有员工
select * 
    from emp
    where deptno = (
        select deptno
            from emp
            where name = '张三'
    )

# 多行子查询 distinct(唯一性)
select distinct job 
    from emp
    where deptno = 10;

select ename, job, sal, deptno
    from emp
    where job in (
        select distinct job
            from emp
            where deptno = 10
    ) and deptno != 10;