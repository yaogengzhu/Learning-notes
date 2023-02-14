# 创建数据库
create database runoob;

# 使用数据库
use runoob;

# 创建表
create table web_site(
	id int auto_increment primary key comment 'id',
	name varchar(30) not null comment '名字',
	url varchar(30) not null comment '网址',
	alexa int not null comment '排名',
	country varchar(30) not null comment '国家'
) charset=utf8 comment 'web 表'

desc web_site;

#
+----+--------------+---------------------------+-------+---------+
| id | name         | url                       | alexa | country |
+----+--------------+---------------------------+-------+---------+
| 1  | Google       | https://www.google.cm/    | 1     | USA     |
| 2  | 淘宝          | https://www.taobao.com/   | 13    | CN      |
| 3  | 菜鸟教程      | http://www.runoob.com/    | 4689  | CN      |
| 4  | 微博          | http://weibo.com/         | 20    | CN      |
| 5  | Facebook     | https://www.facebook.com/ | 3     | USA     |
| 7  | stackoverflow | http://stackoverflow.com/ |   0 | IND     |
+----+---------------+---------------------------+-------+---------+
#

insert into web_site values(1, 'Google', 'https://www.google.cm/', 1, 'USA');
insert into web_site values(2, '淘宝', 'https://www.taobao.com/', 13, 'CN');
insert into web_site values(3, '菜鸟教程', 'http://www.runoob.com/', 4689, 'CN');
insert into web_site(id, name, url, alexa, country) values(4, '微博', 'http://weibo.com/', 20, 'CN');
insert into web_site values(5, 'Facebook', 'https://www.facebook.com/', 3, 'USA');
insert into web_site values(7, 'stackoverflow', 'http://stackoverflow.com/', 0, 'IND');

select * from web_site;


# access_log 
+-----+---------+-------+------------+
| aid | site_id | count | date       |
+-----+---------+-------+------------+
|   1 |       1 |    45 | 2016-05-10 |
|   2 |       3 |   100 | 2016-05-13 |
|   3 |       1 |   230 | 2016-05-14 |
|   4 |       2 |    10 | 2016-05-14 |
|   5 |       5 |   205 | 2016-05-14 |
|   6 |       4 |    13 | 2016-05-15 |
|   7 |       3 |   220 | 2016-05-15 |
|   8 |       5 |   545 | 2016-05-16 |
|   9 |       3 |   201 | 2016-05-17 |
+-----+---------+-------+------------+


create table access_log(
	aid int auto_increment primary key,
	site_id int not null,
	count int not null,
	date Date not null
) charset=utf8

insert into access_log values(1, 1, 45, '2016-05-10');
# 批量插入数据
insert into access_log values(2, 3, 100, '2016-05-13'), (3, 1, 230, '2016-05-14');
insert into access_log values(4, 2, 10, '2016-05-14'), (5, 5, 13, '2016-05-15'), (6, 4, 13, '2016-05-15'), (7, 3, 220, '2016-05-15'), (8, 5, 545, '2016-05-16'), (9, 3, 201, '2016-05-17');

SELECT * from access_log;
