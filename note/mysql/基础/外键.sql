
# 外键 

-- 主表中必须有主键，外键可以是主键，也可以是非主键
# 主表
CREATE TABLE `t1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

# 从表
CREATE TABLE `t2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `t1_id` int(11) NOT NULL, # 外键
  PRIMARY KEY (`id`),
  KEY `t1_id` (`t1_id`),
  CONSTRAINT `t2_ibfk_1` FOREIGN KEY (`t1_id`) REFERENCES `t1` (`id`) # 外键约束
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;


-- 表的类型必须是innoDB, 否则不支持外键
-- 外键可以为null，但是外键约束对应的主表的主键必须存在，否则数据无法插入
-- 主外键数据形成，数据不能被随意删除，否则会报错

SELECT * from t1;
INSERT into t1 values(1, '玉兔'), (2, '祥龙')

select * FROM t2;
insert into t2 values(1, '小白兔', 1), (2, '兔年', 1);
insert into t2 values(3, '龙年', 2), (4, '小白龙', 2);

# 左外连接 （左侧的表完全显示）
select t2.id, t2.name, t1.name  from t2 
	left join t1 on t1.id = t2.t1_id 