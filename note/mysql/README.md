# MYSQL

## 表
row(行) column(列)

字段(存在数据类型) 约束


## SQL语句的分类
- DQL 数据库查询语言
   select
- DML 数据库操作语言
   insert delete update
- DDL
   数据定义语言，凡事带有create、drop、 alter 操作表的结构
- TCL
   事务控制
      事务提交：commit
      事务回滚：rollback
- DCL
   数据控制
   授权 grant 撤销 revoke

### 关系刑数据库（RDBMDS） 、非关系型数据库 （非relation-ship)的数据库     redies（key-value) 非关系型数据库

关系型数据库实质：复杂的数据结构归结简单的二元关系，以行和列构成的关系


### 关系型数据库的设计规则

1. 表、记录、字段
   1. E - R (entity-relationship) 实体集、属性、联系集
   2. 一个实体集class 对应于数据库中的一个表，一个实体则对应数据表中的一行（row),也称为一个一个记录。一个属性 对应数据库表中的一列，也称为一个字段。

ORM 思想（Object Relationl Mapping )
数据库中的一个表 （Java 或者 python 中的一个类）
表中的一条数据 类中的一个对象（或实体）
表中的一个列 类中的一个字段 （filed）

2. 对应关系
   1. 一对一关联
   2. 一对多关联
   3. 多对多关系
   4. 自我引用关系

### SQL 基本规范

- 在Windows下大小写不敏感。
- Linux 大小写敏感
   - 数据库名、表名、表的别名、变量名是严格区分大小写；
   - 关键字、函数名、列名（或字段名）、是忽略大小写。

建议采用统书写规范
- 数据库、表名、表别名、字段名等小写。
- SQL关键字、函数名、绑定变量等大写。

### 导入现有的数据表、表中的一条数据
方式1: source 文件名的全路径
方式2: 借助图形化界面工具导入数据


### DDL

show tables;

DESC 表明 （表结构）

show create table 表名;


表结构的创建

```SQL

create table 表明（
   字段1 字段1类型[comment 字段1注释],
   ...
   字段n 字段n类型[comment 字段n注释],
)[comment 表注释];
```

<!-- INT NOT NULL AUTO_INCREMENT PRIMARY KEY -->

auto_increment

注：1. 如果把“NULL”插入到 AUTO_INCREMENT 数据列里，MySQL 将自动生成下一个序列编号。序列编号从 1 开始，并以“1”为基数递增；

2. 把“0”插入 AUTO_INCREMENT 数据列的效果，与插入“NULL”值一样，但不建议这样做，最好还是直接插入“NULL”值；

3. 在插入记录时，如果没有为 AUTO_INCREMENT 数据列明确地指定一个数值，则等同插入“NULL”值；

4. 在插入或更新记录时，如果为 AUTO_INCREMENT 数据列明确指定了一个数值，则会出现两种情况：情况一，如果插入的值与已有的编号重复，则会出现错误信息，因为 AUTO_INCREMENT 数据列的值必须是唯一的；情况二，如果插入的值大于现有编号的值，则会把该值插入到数据列中，并使 AUTO_INCREMENT 数据列的下一个编号从这个新的编号值开始递增（即跳过了一些编号）。


### SQL DDL  数据类型

数值类型

- TINYINT
- SAMLLINT
- MEDIUMINIT
- INT 或 INTEGER
- BINGINT
- FLOAT
- DOUBLE
- DECIMAL


- age TINYINT UNSINGNED 无符号 （大于0）
- score double(4,1) # 表示分数 84.2

字符串类型
- CHAR  (定长)
- VARCHAR 变长字符串
- TINYBLOB （不超过255个字符的二进制）
- BLOB
- TEXT
- MENDIUMBLOB
- LONGBLOB
- LONGTEXT  极大文本数据

使用
char(10) 最多存储10个字符
varchar(10)  两者差异 char 性能好、varchar 性能较差。

用户名 username varchar(50)
性别 gender char(1)

日期时间类型
- DATE  （YYYY-MM-DD）
- TIME   (HH:MM:SS)
- YEAR   (YYYY)
- DATETIME  (YYYY-MM-DD HH:MM:SS)
- TIMESTAMP (YYYY-MM-DD HH:MM:SS) 时间戳


```SQL
+----------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Table    | Create Table                                                                                                                                                                                                                                                                                                                   |
+----------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| employee | CREATE TABLE `employee` (
  `id` int DEFAULT NULL,
  `employee_number` varchar(10) DEFAULT NULL,
  `employee_name` varchar(10) DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `age` tinyint unsigned DEFAULT NULL,
  `idcard` char(18) DEFAULT NULL,
  `entrydate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 |
+----------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### DDL 表操作、修改表
- 向表中添加字段

alter table 表明 add 字段名 类型（长度）[comment 注释];

- 修改字段名 和 字段类型

alter table 表名 change 旧字段名 新字段名 类型（长度）[comment 注释];

- 修改字段类型

alter table 表名 modify 旧字段名 新字段名 类型（长度）[comment 注释];

- 删除字段

alter table 表明 drop 字段

- 修改表名

alter table 表名 rename to 新的名字;

- 删除某一个表 (表的数据都会被删除)

drop table 表别名  (drop table if exists tags;)

truncate table 表名 （删除表名、然后创建出来）



### DML

#### 插入数据 insert into
1. 给指定字段插入数据
  insert into 表名(字段1，字段2) values(值, ..)

2. 给全部字段添加数据
   insert into 表名 values(值, ...)

3. 批量添加数据
    insert into 表名（字段名， 字段2) values(),(),()
    insert into 表名 values(),(),()

#### 修改数据 update

1. 修改数据
   1. update 表名 set 字段名1=值1， 字段2=值2， ... where[条件]
   2. update 表名 set 字段名=值; # 更新表中所有的字段数据（没有where 条件）

2. 删除数据
 1.  delete from 表名 where [条件]


### DQL data query language (select)

select
    字段
from
    表名
where
    条件
group by
    分组条件
having
    分组条件表
group by
    排序字段列表
limit
    分页参数

- 基本查询
- 条件查询
- 聚合函数
- 分组查询
- 排序查询
- 分页查询


#### 基本查询
1. 查询返回多个字段
   1. select 字段,...字段n， from 表名
   2. select * from 表名;

2. 设置别名
   1. select 字段名 as 别名，字段2 as 别名 ... from 表名

3. 去重复记录
   1. select distinct 字段列表 from 表名

#### DQL -条件查询

1. 条件查询 
   1. 比较运算符
      1. > = < between ... and  in like is NULL
   2. 逻辑运算符
      1. AND  &&  OR || NOT !

### 聚合函数
聚合函数将作为一个整体，进行纵向计算。

1.  常见的聚合函数
    1.  cout
    2.  sum
    3.  max
    4.  min
    5.  avg

用法
select 聚合函数（字段名）from 表名;

```SQL
select count(*) from user; # 所有的null不参与计算
```

```SQL
select max(age) from user; # 所有的null不参与计算
```

```SQL
select sum(age) from user where address = '';
```

### 分组查询
1. 语法
    select 字段列表 表名 [where 条件] group by 分组字段名 [having 分组后过滤条件];


    where 和 having的区别

    1. 执行时机不同 where 在分组之前， 不满足where条件，不参与分组、having在分组之后。
    2. 判断条件不同


```SQL
select gender, count(*) from user group by gender; # 统计男女
```

注意：
1. 执行顺序 where > 聚合函数 > having
2. 分组之后，查询的字段一般为聚合函数和分组字段，查询其他字段无任何意义。


### 排序查询

1. 语法
   1.  select 字段列表 from 表名 order by 字段1 排序方式1, 字段2, 排序方式2  (先按字段1排序，在按字段2排序)
   2.  asc 升 (默认值), desc 降


### 分页查询 limit

1. 语法
   1. select 字段列表 from 表名 limit 起始索引、查询记录数。

注意：
 1. 起始索引从0开始。起始索引 = （查询页码 - 1） * 每个页面记录数
 2. 分页查询是数据库的方言，不同的数据库有不同的实现， Mysql 是limit 
 3. 如果查询的是第一页数据，起始索引可以省略，直接简写为limit 10。

 ### 如何查询一个数据库有多少张表

```sql
select count(*) as 结果 from information_schema.tables where table_schema='xxx'; # xxx 库名
```