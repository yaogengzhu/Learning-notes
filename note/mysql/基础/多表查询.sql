# 多表查询 (笛卡尔积)
# 在默认情况下，在第一表中，取出第一行 和 第二张表每一行进行组合，返回结果（含有两张表的所有的列）
# 在默认情况下，MySQL只允许在一个表中进行查询，如果要查询多个表，需要使用JOIN关键字

select dname, salary from emp, dept where emp.deptno = dept.deptno;