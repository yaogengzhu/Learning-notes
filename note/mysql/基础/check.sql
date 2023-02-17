# check 约束 （5.7不支持， 语法支持，实际不生效）

-- 
create table t3(
    id int not null auto_increment,
    `name` varchar(32),
    sex varchar(6) check (sex In ('man', 'woman')),
    salary double check (salary > 0 and salary < 10000),
    primary key(id)
) engine=InnoDB default charset=utf8;

