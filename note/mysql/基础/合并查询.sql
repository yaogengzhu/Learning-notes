# 合并查询 union,  union all
# 多个条件查询
-- union all 会将两个查询的结果集合并，但是不会去重
-- union 会将两个查询的结果集合并，会去重
select * from t1 where id = 1 union all select * from t2 where id = 1;
select * from t1 where id = 1 union select * from t2 where id = 1;