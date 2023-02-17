# 自增长

-- 和primary key配合使用
-- 也可以单独使用，但是需要配置一个unique
-- 自增长从最大值开始

# 修改自增长的值为100
alter table t4 auto_increment = 100;