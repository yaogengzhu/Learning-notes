# mysql 体系结构

- 客户端连接层
  最上层是一些客户端和链接服务，主要完成一些类似链接处理、授权认证、及相关的安全方案。服务器也会安全接入的每个客户端验证它所具有的操作权限
- 服务层
  第二层架构主要是完成大多数的核心服务功能，如 SQL 接口，并完成缓存的查询，SQL 的分析和优化，部分内置函数的执行。所有跨存储引擎的功能也在这一层实现。如过程、函数等
- 存储引擎层 （索引在引擎层实现）
  存储引擎真正的负责 Mysql 中数据的存储和提取，服务器通过 API 和存储引擎进行通信。不同的存储引擎具有不同的功能，这样我们可以根据自己的需要，来选择合适的存储引擎
- 存储层
  主要是将数据存储在文件系统之上，并完成与存储引擎的交互

## 存储引擎层

存储引擎是 mysql 存储数据、建立索引、更新/查询数据等技术实现。 存储引擎是基于表的，而不是基于库的。

```sql
show create table 表名;
```

查看数据库支持的存储引擎

```sql
show engines
```

创建表的时候指定存储引擎

```sql
create table test(
    id int,
    name varchar(10)
) engine = MyISAM;
```

## 存储引擎的特点

innoDB

- DML 操作遵行 ACID 模型，支持事务
- 行级锁，提高并发访问性能
- 支持外健 FOREING KEY ,保证数据的完整性和正确性。

参数： innodb_file_per_table

```sql
show variables like 'innodb_file_per_table'
```

## innodb 逻辑存储结构

- tablespace 表空间
- segment 段
- extend 区 （固定大小）1M
- page 页 (固定大小)16k
- Row 行

（事务、行级锁、外键） 区别于 MYISAM

## MyISAM

是 mysql 早期的存储引擎

- 不支持事务，不支持外健
- 支持表锁，不支持行锁
- 访问速度快

文件
xxx.sdi 表存储结构信息
xxx.MYD 存储数据
xxx.MYI 存储索引

## Memory

表数据存在内存中，由于受到硬件、或断电的影响，数据丢失。只能将表作为缓存和临时数据

- 内存存放
- hash 索引 （默认）

文件
xxx.sdi

## 如何选择存储引擎

INnodb： 基本日常使用

MyISAM: 日志

Memory: 临时表、缓存
