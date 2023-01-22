-- 删除数据库
drop database egg;
-- 创建数据库
create database egg;
-- 创建表
use egg;
create table user(
    id int(10) not null auto_increment,
    name varchar(20) not null default 'admin' comment '用户名',
    pwd varchar(50) not null comment '密码',
    primary key(id)
)engine=InnoDB charset=utf8;

-- 查看表
show tables;
-- 查看表结构
desc user;
-- 删除表
drop table user;

-- 删除数据库
drop dabaase egg;

-- 插入表数据
insert into user values(1, 'user1', '123');
insert into user(name, pwd) values('user2', '123');
insert into user(name, pwd) values('user1', '123');

-- 查询表数据
select * from user;

select id, name from user;
select id, name from user where id = 1;

-- 修改表数据
update user set pwd = '123456' where id = 1;

-- 删除表数据
delete from user where id = 2；


-- 修改字段类型

alter table `表名` modify `字段名` varchar(25)

-- ALTER table `user`  modify user_name varchar(100);

-- 清空表数据

---delete from tablename;  而如果你只是删除一部分数据，就只能使用delete：
-- truncate table tablename;

-- 查询表结构
show create table emp;