# 自连接
-- 将同一张表看成两张表，然后进行连接

# 1. 查询员工表中，员工的姓名、上级的姓名 （两张表查询）
select e1.name, e2.name from emp e1, emp e2 where e1.superior = e2.id;

# 2. 查询员工表中，员工的姓名、上级的姓名 (单张) --- 起别名（当成两张表使用）
select emp.name, other_emp.name from emp, emp other_emp where emp.id = other_emp.superior;

# 特点 
# 同一张表当成两张表使用，必须起别名
