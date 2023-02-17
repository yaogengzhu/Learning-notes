# 创建一个商品表
create table goods(
	id int,
	goods_id int not null,
	goods_name varchar(40) not null,
	unitprice double not null check (unitprice > 1.0 and unitprice < 9999.99),
	category int not null,
	provider varchar(30),
	PRIMARY KEY  (goods_id)
)  engine=InnoDB default charset=utf8;

# 创建一个客户表
create table customer(
	id int,
	customer_id int not null,
	`name` varchar(30) not null,
	address varchar(100),
	email varchar(40),
	sex varchar(4) check(sex in('男', '女')),
	card_id varchar(28),
	primary key (customer_id)
) engine=InnoDB default charset=utf8;

# 创建一个购买记录表
create table purchase(
	id int,
	order_id varchar(30),
	customer_id int,
	goods_id int not null,
	nums int,
	primary key (`order_id`),
	FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`),
	FOREIGN KEY (`goods_id`) REFERENCES `goods` (`goods_id`)
) engine=InnoDB default charset=utf8;