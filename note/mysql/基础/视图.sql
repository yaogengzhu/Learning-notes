# 视图
# 视图是一种虚拟表，它是基于一个或多个表的查询结果集的虚拟表，视图中的数据并不真实存在，而是通过查询语句动态生成的。
# 视图也有列，数据来自基表
# 基表的改变也会影响视图，视图的改变也会影响基表

# 创建视图
# 语法：create view 视图名 as select语句
# 例子：创建一个视图，显示员工的姓名、工资、部门
create view emp_view as select name, salary, dept from emp;

# 修改视图
# 语法：alter view 视图名 as select语句
# 例子：修改视图，显示员工的姓名、工资、部门、工龄
alter view emp_view as select name, salary, dept, datediff(now(), hiredate) as 工龄 from emp;

# show create view emp_view;
# 删除视图
# 语法：drop view 视图名

