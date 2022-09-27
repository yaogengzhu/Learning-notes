

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