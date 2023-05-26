# 索引
-- 查询速度提升
-- 为啥索引能提升查询速度（）

-- 索引的原理 （全表扫描 慢）
-- 形成索引的数据结构 （如：二叉树）
-- 代价 占用更多的空间，修改、删除、添加数据的时候，需要维护索引

# 没有索引的时候
-- 创建索引语法
-- create index 索引名 on 表名(字段名);
create index idx_name on t_user(name);

-- 索引本身也会占用空间
-- 索引名字必须是唯一的



重建索引
```mysql
alter table T drop index k;

alter table T add index(k);

```


重建组主键索引

```mysql
alter table T drop primary key;

alter table T add primary key(id);
```